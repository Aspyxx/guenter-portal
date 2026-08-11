#!/usr/bin/env python3
"""Build focus.json from public German news and search-trend RSS feeds."""

from __future__ import annotations

import argparse
import json
import math
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from typing import Iterable
from urllib.parse import quote_plus, urlparse


TAGESSCHAU_URL = "https://www.tagesschau.de/xml/rss2/"
TRENDS_URL = "https://trends.google.com/trending/rss?geo=DE"
HT = "{https://trends.google.com/trending/rss}"
USER_AGENT = "GuentersZeitung-FocusBot/1.0 (+https://guenterszeitung.keuter.xyz/)"
MIN_SCORE = 25.0

STOP_WORDS = {
    "aber", "alle", "als", "auch", "auf", "aus", "bei", "bis", "das", "dem", "den",
    "der", "des", "die", "durch", "ein", "eine", "einer", "eines", "er", "es", "fuer",
    "für", "gegen", "hat", "im", "in", "ist", "mit", "nach", "nicht", "noch", "nun",
    "oder", "sich", "sie", "so", "ueber", "über", "und", "von", "vor", "war", "was",
    "wegen", "werden", "wie", "wir", "zu", "zum", "zur", "mehr", "aktuell", "heute",
}

# Closely related terms are deliberately conservative: only unmistakably shared events
# are normalized. Unrelated political, sports or entertainment stories stay separate.
THEMES = {
    "unwetter": {
        "terms": {"unwetter", "gewitter", "hagel", "sturm", "starkregen", "hochwasser", "wetterwarnung"},
        "title": "Unwetter in Deutschland", "icon": "⛈️",
    },
    "hitzewelle": {
        "terms": {"hitzewelle", "hitze", "hitzewarnung", "rekordhitze"},
        "title": "Hitze in Deutschland", "icon": "🌡️",
    },
    "bundestagswahl": {
        "terms": {"bundestagswahl", "bundestagswahlen", "wahlkampf", "bundestagwahl"},
        "title": "Bundestagswahl", "icon": "🗳️",
    },
}

ICON_RULES = [
    ({"unwetter", "gewitter", "hagel", "sturm", "hochwasser"}, "⛈️"),
    ({"hitze", "hitzewelle"}, "🌡️"),
    ({"wahl", "bundestag", "regierung", "kanzler"}, "🏛️"),
    ({"krieg", "angriff", "militaer", "militär"}, "🌍"),
    ({"fussball", "fußball", "bundesliga", "wm", "em"}, "⚽"),
    ({"wirtschaft", "boerse", "börse", "dax", "inflation"}, "📈"),
    ({"brand", "feuer"}, "🔥"),
]


@dataclass
class Item:
    title: str
    link: str
    source: str
    rank: int
    published: datetime
    traffic: int = 0

    @property
    def tokens(self) -> set[str]:
        return tokenize(self.title)


def fetch(url: str, timeout: int = 20) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/xml"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def parse_date(value: str | None) -> datetime:
    if not value:
        return datetime.now(timezone.utc)
    try:
        parsed = parsedate_to_datetime(value)
        return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)
    except (TypeError, ValueError):
        return datetime.now(timezone.utc)


def parse_tagesschau(payload: bytes) -> list[Item]:
    root = ET.fromstring(payload)
    items = []
    for rank, node in enumerate(root.findall("./channel/item")[:40]):
        title = (node.findtext("title") or "").strip()
        link = (node.findtext("link") or "").strip()
        if title and link:
            items.append(Item(title, link, "Tagesschau", rank, parse_date(node.findtext("pubDate"))))
    return items


def traffic_number(value: str | None) -> int:
    if not value:
        return 0
    cleaned = value.upper().replace(".", "").replace(",", "").replace("+", "").strip()
    factor = 1
    if cleaned.endswith("K"):
        factor, cleaned = 1_000, cleaned[:-1]
    elif cleaned.endswith("M"):
        factor, cleaned = 1_000_000, cleaned[:-1]
    try:
        return int(float(cleaned) * factor)
    except ValueError:
        return 0


def parse_trends(payload: bytes) -> list[Item]:
    root = ET.fromstring(payload)
    items = []
    for rank, node in enumerate(root.findall("./channel/item")[:30]):
        title = (node.findtext("title") or "").strip()
        traffic = traffic_number(node.findtext(f"{HT}approx_traffic"))
        link = f"https://trends.google.com/trends/explore?geo=DE&q={quote_plus(title)}"
        if title:
            items.append(Item(title, link, "Google Trends", rank, parse_date(node.findtext("pubDate")), traffic))
    return items


def tokenize(text: str) -> set[str]:
    words = re.findall(r"[a-zäöüß0-9]{2,}", text.casefold())
    return {word for word in words if word not in STOP_WORDS and not word.isdigit()}


def theme_key(tokens: set[str]) -> str | None:
    for key, config in THEMES.items():
        if tokens & config["terms"]:
            return key
    return None


def related(left: Item, right: Item) -> bool:
    left_tokens, right_tokens = left.tokens, right.tokens
    if not left_tokens or not right_tokens:
        return False
    left_theme, right_theme = theme_key(left_tokens), theme_key(right_tokens)
    if left_theme and left_theme == right_theme:
        return True
    overlap = left_tokens & right_tokens
    # A distinctive shared name is useful for short Trends terms such as "Merz".
    if any(len(word) >= 5 for word in overlap):
        return True
    return len(overlap) >= 2 and len(overlap) / min(len(left_tokens), len(right_tokens)) >= 0.5


def clusters(items: Iterable[Item]) -> list[list[Item]]:
    groups: list[list[Item]] = []
    for item in items:
        matches = [group for group in groups if any(related(item, member) for member in group)]
        if not matches:
            groups.append([item])
            continue
        target = matches[0]
        target.append(item)
        for extra in matches[1:]:
            target.extend(extra)
            groups.remove(extra)
    return groups


def age_hours(item: Item, now: datetime) -> float:
    return max(0.0, (now - item.published.astimezone(timezone.utc)).total_seconds() / 3600)


def score(group: list[Item], now: datetime) -> float:
    tagesschau = [item for item in group if item.source == "Tagesschau"]
    trends = [item for item in group if item.source == "Google Trends"]
    value = 0.0
    if tagesschau:
        best = min(tagesschau, key=lambda item: item.rank)
        value += max(8, 32 - best.rank * 0.8)
        value += max(0, 12 - age_hours(best, now) * 0.5)
    if trends:
        best = max(trends, key=lambda item: item.traffic)
        value += min(32, 8 + 6 * math.log10(max(1, best.traffic) / 100 + 1))
        value += max(0, 8 - best.rank * 0.25)
    value += min(24, max(0, len(group) - 1) * 7)
    if tagesschau and trends:
        value += 28
    return round(value, 2)


def display_title(group: list[Item]) -> str:
    all_tokens = set().union(*(item.tokens for item in group))
    key = theme_key(all_tokens)
    if key:
        return str(THEMES[key]["title"])
    trend_items = [item for item in group if item.source == "Google Trends"]
    if trend_items:
        candidate = max(trend_items, key=lambda item: (item.traffic, -item.rank)).title
        if 3 <= len(candidate) <= 70:
            return candidate.title() if candidate == candidate.casefold() else candidate[:1].upper() + candidate[1:]
    candidate = min(group, key=lambda item: item.rank).title
    candidate = re.sub(r"^[^:]{2,28}:\s*", "", candidate).strip()
    return candidate[:82].rstrip(" -:")


def choose_icon(title: str, group: list[Item]) -> str:
    tokens = tokenize(title) | set().union(*(item.tokens for item in group))
    key = theme_key(tokens)
    if key:
        return str(THEMES[key]["icon"])
    for terms, icon in ICON_RULES:
        if tokens & terms:
            return icon
    return "🔎"


def build_description(group: list[Item]) -> str:
    news_count = sum(item.source == "Tagesschau" for item in group)
    trends = [item for item in group if item.source == "Google Trends"]
    if news_count and trends:
        traffic = max(item.traffic for item in trends)
        volume = f" mit mehr als {traffic:,} Suchanfragen".replace(",", ".") if traffic >= 1_000 else ""
        return f"Das Thema steht in den aktuellen Nachrichten und verzeichnet bei Google Trends{volume} starkes Interesse."
    if news_count > 1:
        return f"Mehrere aktuelle Tagesschau-Meldungen machen dieses Thema derzeit besonders relevant."
    if trends:
        traffic = max(item.traffic for item in trends)
        volume = f" (mehr als {traffic:,} Suchanfragen)".replace(",", ".") if traffic >= 1_000 else ""
        return f"Dieses Thema verzeichnet bei Google Trends Deutschland derzeit starkes Suchinteresse{volume}."
    return "Dieses Thema ist in den aktuellen Tagesschau-Meldungen besonders prominent platziert."


def build_focus(tagesschau: list[Item], trends: list[Item], now: datetime) -> dict | None:
    candidates = clusters([*tagesschau, *trends])
    if not candidates:
        return None
    ranked = sorted(((score(group, now), group) for group in candidates), key=lambda pair: pair[0], reverse=True)
    best_score, best = ranked[0]
    if best_score < MIN_SCORE:
        return None
    primary = min((item for item in best if item.source == "Tagesschau"), key=lambda item: item.rank, default=None)
    if primary is None:
        primary = max(best, key=lambda item: (item.traffic, -item.rank))
    sources = sorted({item.source for item in best}, key=lambda name: name != "Tagesschau")
    title = display_title(best)
    return {
        "titel": title,
        "beschreibung": build_description(best),
        "link": primary.link,
        "quelle": primary.source,
        "quellen": sources,
        "icon": choose_icon(title, best),
        # UTC is portable on every runner; the browser renders this in the visitor's local time.
        "aktualisiert": now.astimezone(timezone.utc).isoformat(timespec="seconds"),
        "score": best_score,
    }


def valid_focus(data: object) -> bool:
    if not isinstance(data, dict):
        return False
    required = ("titel", "beschreibung", "link", "quelle", "icon", "aktualisiert")
    if not all(isinstance(data.get(key), str) and data[key].strip() for key in required):
        return False
    return urlparse(data["link"]).scheme == "https"


def write_atomic(path: Path, data: dict) -> None:
    if not valid_focus(data):
        raise ValueError("Refusing to write incomplete focus data")
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    json.loads(temporary.read_text(encoding="utf-8"))
    temporary.replace(path)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path("focus.json"))
    parser.add_argument("--tagesschau-url", default=os.environ.get("TAGESSCHAU_URL", TAGESSCHAU_URL))
    parser.add_argument("--trends-url", default=os.environ.get("TRENDS_URL", TRENDS_URL))
    args = parser.parse_args()

    tagesschau: list[Item] = []
    trends: list[Item] = []
    errors = []
    for name, url, parser_function in (
        ("Tagesschau", args.tagesschau_url, parse_tagesschau),
        ("Google Trends", args.trends_url, parse_trends),
    ):
        try:
            parsed = parser_function(fetch(url))
            if not parsed:
                raise ValueError("feed contains no usable items")
            if name == "Tagesschau":
                tagesschau = parsed
            else:
                trends = parsed
            print(f"{name}: {len(parsed)} Einträge geladen")
        except Exception as exc:  # Keep the other source usable; do not publish broken data.
            errors.append(f"{name}: {exc}")
            print(f"WARNUNG: {errors[-1]}", file=sys.stderr)

    focus = build_focus(tagesschau, trends, datetime.now(timezone.utc))
    if focus is None:
        if args.output.exists():
            print("Kein verlässliches neues Thema; vorhandene focus.json bleibt unverändert.")
            return 0
        print("FEHLER: Kein verlässliches Thema und keine vorhandene focus.json.", file=sys.stderr)
        return 1

    write_atomic(args.output, focus)
    print(f"Fokus aktualisiert: {focus['titel']} (Score {focus['score']})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
