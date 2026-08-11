#!/usr/bin/env python3
"""Aggregate public RSS headlines for Guenters Zeitung without images or full text."""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.parse import urlparse, urlunparse


FEEDS = {
    "Tagesschau": "https://www.tagesschau.de/xml/rss2/",
    "SPIEGEL": "https://www.spiegel.de/schlagzeilen/index.rss",
    "Süddeutsche": "https://rss.sueddeutsche.de/rss/Topthemen",
}
ENV_NAMES = {
    "Tagesschau": "TAGESSCHAU_RSS_URL",
    "SPIEGEL": "SPIEGEL_RSS_URL",
    "Süddeutsche": "SUEDDEUTSCHE_RSS_URL",
}
ALLOWED_DOMAINS = {
    "Tagesschau": "tagesschau.de",
    "SPIEGEL": "spiegel.de",
    "Süddeutsche": "sueddeutsche.de",
}
SOURCE_ORDER = tuple(FEEDS)
PER_SOURCE = 9
TARGET_TOTAL = 27
USER_AGENT = "GuentersZeitung-NewsBot/1.0 (+https://guenterszeitung.keuter.xyz/)"


@dataclass(frozen=True)
class NewsItem:
    source: str
    title: str
    link: str
    published: datetime | None
    rank: int


def fetch(url: str, timeout: int = 20) -> bytes:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/xml"},
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def clean_title(value: str) -> str:
    without_tags = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", html.unescape(without_tags)).strip()[:240]


def parse_date(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        parsed = parsedate_to_datetime(value)
        return parsed.astimezone(timezone.utc) if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)
    except (TypeError, ValueError, OverflowError):
        return None


def allowed_https_url(url: str, source: str) -> bool:
    try:
        parsed = urlparse(url)
    except ValueError:
        return False
    domain = ALLOWED_DOMAINS.get(source)
    host = (parsed.hostname or "").casefold()
    return bool(domain and parsed.scheme == "https" and (host == domain or host.endswith("." + domain)))


def canonical_url(url: str) -> str:
    parsed = urlparse(url)
    return urlunparse((parsed.scheme.casefold(), parsed.netloc.casefold(), parsed.path.rstrip("/"), parsed.params, parsed.query, ""))


def parse_feed(payload: bytes, source: str) -> list[NewsItem]:
    root = ET.fromstring(payload)
    parsed_items: list[NewsItem] = []
    seen_links: set[str] = set()
    seen_titles: set[str] = set()

    for rank, node in enumerate(root.findall("./channel/item")):
        title = clean_title(node.findtext("title") or "")
        link = (node.findtext("link") or "").strip()
        link_key = canonical_url(link) if link else ""
        title_key = title.casefold()
        if not title or not allowed_https_url(link, source):
            continue
        if link_key in seen_links or title_key in seen_titles:
            continue
        seen_links.add(link_key)
        seen_titles.add(title_key)
        parsed_items.append(NewsItem(source, title, link, parse_date(node.findtext("pubDate")), rank))

    return parsed_items


def chronological_key(item: NewsItem) -> tuple[float, int, int]:
    timestamp = item.published.timestamp() if item.published else float("-inf")
    return timestamp, -item.rank, -SOURCE_ORDER.index(item.source)


def aggregate(items_by_source: dict[str, list[NewsItem]]) -> list[NewsItem]:
    selected: list[NewsItem] = []
    selected_keys: set[tuple[str, str]] = set()

    for source in SOURCE_ORDER:
        source_items = sorted(items_by_source.get(source, []), key=chronological_key, reverse=True)
        for item in source_items[:PER_SOURCE]:
            selected.append(item)
            selected_keys.add((item.source, canonical_url(item.link)))

    remaining = [
        item
        for source in SOURCE_ORDER
        for item in items_by_source.get(source, [])
        if (item.source, canonical_url(item.link)) not in selected_keys
    ]
    remaining.sort(key=chronological_key, reverse=True)
    selected.extend(remaining[: max(0, TARGET_TOTAL - len(selected))])
    selected.sort(key=chronological_key, reverse=True)
    return selected[:TARGET_TOTAL]


def build_news(items_by_source: dict[str, list[NewsItem]], now: datetime) -> dict | None:
    selected = aggregate(items_by_source)
    if not selected:
        return None
    counts = {source: sum(item.source == source for item in selected) for source in SOURCE_ORDER}
    return {
        "aktualisiert": now.astimezone(timezone.utc).isoformat(timespec="seconds"),
        "anzahlProQuelle": counts,
        "meldungen": [
            {
                "titel": item.title,
                "link": item.link,
                "quelle": item.source,
                "veroeffentlicht": item.published.isoformat(timespec="seconds") if item.published else None,
            }
            for item in selected
        ],
    }


def valid_news(data: object) -> bool:
    if not isinstance(data, dict) or not isinstance(data.get("aktualisiert"), str):
        return False
    messages = data.get("meldungen")
    if not isinstance(messages, list) or not 1 <= len(messages) <= 30:
        return False
    for message in messages:
        if not isinstance(message, dict):
            return False
        if not all(isinstance(message.get(key), str) and message[key].strip() for key in ("titel", "link", "quelle")):
            return False
        if message["quelle"] not in SOURCE_ORDER or not allowed_https_url(message["link"], message["quelle"]):
            return False
        if message.get("veroeffentlicht") is not None and not isinstance(message["veroeffentlicht"], str):
            return False
        if any(key in message for key in ("bild", "image", "volltext", "content", "beschreibung")):
            return False
    return True


def write_atomic(path: Path, data: dict) -> None:
    if not valid_news(data):
        raise ValueError("Refusing to write incomplete or unsafe news data")
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    json.loads(temporary.read_text(encoding="utf-8"))
    temporary.replace(path)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path("news.json"))
    for source in SOURCE_ORDER:
        parser.add_argument(
            "--" + source.casefold().replace("ü", "ue") + "-url",
            dest=ENV_NAMES[source].casefold(),
            default=os.environ.get(ENV_NAMES[source], FEEDS[source]),
        )
    args = parser.parse_args()

    items_by_source: dict[str, list[NewsItem]] = {}
    for source in SOURCE_ORDER:
        url = getattr(args, ENV_NAMES[source].casefold())
        try:
            items = parse_feed(fetch(url), source)
            if not items:
                raise ValueError("feed contains no usable items")
            items_by_source[source] = items
            print(f"{source}: {len(items)} Meldungen geladen")
        except Exception as exc:
            items_by_source[source] = []
            print(f"WARNUNG: {source}: {exc}", file=sys.stderr)

    news = build_news(items_by_source, datetime.now(timezone.utc))
    if news is None:
        if args.output.exists():
            print("Keine neuen Meldungen; vorhandene news.json bleibt unverändert.")
            return 0
        print("FEHLER: Keine Meldungen und keine vorhandene news.json.", file=sys.stderr)
        return 1

    write_atomic(args.output, news)
    counts = news["anzahlProQuelle"]
    print("Nachrichten aktualisiert: " + ", ".join(f"{source} {counts[source]}" for source in SOURCE_ORDER))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
