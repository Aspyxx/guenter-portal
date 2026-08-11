import json
import tempfile
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path

from scripts.update_news import NewsItem, aggregate, build_news, parse_feed, valid_news, write_atomic


NOW = datetime(2026, 8, 11, 8, 0, tzinfo=timezone.utc)


def item(source, number, minutes=0):
    domains = {"Tagesschau": "www.tagesschau.de", "SPIEGEL": "www.spiegel.de", "Süddeutsche": "www.sueddeutsche.de"}
    return NewsItem(source, f"{source} Meldung {number}", f"https://{domains[source]}/{source}/{number}", NOW - timedelta(minutes=minutes), number)


class NewsTests(unittest.TestCase):
    def test_balanced_and_chronological_top_27(self):
        sources = {
            source: [item(source, number, number * 3 + offset) for number in range(12)]
            for offset, source in enumerate(("Tagesschau", "SPIEGEL", "Süddeutsche"))
        }
        selected = aggregate(sources)
        self.assertEqual(len(selected), 27)
        self.assertEqual({source: sum(entry.source == source for entry in selected) for source in sources}, {
            "Tagesschau": 9, "SPIEGEL": 9, "Süddeutsche": 9,
        })
        timestamps = [entry.published for entry in selected]
        self.assertEqual(timestamps, sorted(timestamps, reverse=True))

    def test_other_sources_fill_a_failed_feed(self):
        sources = {
            "Tagesschau": [item("Tagesschau", number, number) for number in range(20)],
            "SPIEGEL": [item("SPIEGEL", number, number) for number in range(20)],
            "Süddeutsche": [],
        }
        selected = aggregate(sources)
        self.assertEqual(len(selected), 27)
        self.assertFalse(any(entry.source == "Süddeutsche" for entry in selected))

    def test_parser_deduplicates_and_rejects_unsafe_links(self):
        rss = b"""<rss><channel>
          <item><title>Meldung A</title><link>https://www.spiegel.de/a#ref=rss</link><pubDate>Tue, 11 Aug 2026 08:00:00 +0000</pubDate></item>
          <item><title>Meldung A doppelt</title><link>https://www.spiegel.de/a</link></item>
          <item><title>Unsicher</title><link>http://www.spiegel.de/b</link></item>
          <item><title>Fremd</title><link>https://example.test/c</link></item>
        </channel></rss>"""
        parsed = parse_feed(rss, "SPIEGEL")
        self.assertEqual(len(parsed), 1)
        self.assertEqual(parsed[0].title, "Meldung A")

    def test_json_contains_no_images_or_full_text(self):
        news = build_news({"Tagesschau": [item("Tagesschau", 1)], "SPIEGEL": [], "Süddeutsche": []}, NOW)
        self.assertTrue(valid_news(news))
        serialized = json.dumps(news).casefold()
        for forbidden in ("image", "bild", "volltext", "description", "beschreibung", "content"):
            self.assertNotIn(forbidden, serialized)

    def test_atomic_write_preserves_existing_file_on_invalid_data(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "news.json"
            old = build_news({"Tagesschau": [item("Tagesschau", 1)], "SPIEGEL": [], "Süddeutsche": []}, NOW)
            path.write_text(json.dumps(old), encoding="utf-8")
            with self.assertRaises(ValueError):
                write_atomic(path, {"meldungen": []})
            self.assertEqual(json.loads(path.read_text(encoding="utf-8")), old)


if __name__ == "__main__":
    unittest.main()
