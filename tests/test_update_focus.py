import json
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path

from scripts.update_focus import Item, build_focus, parse_tagesschau, parse_trends, valid_focus, write_atomic


NOW = datetime(2026, 8, 11, 8, 0, tzinfo=timezone.utc)


class FocusTests(unittest.TestCase):
    def test_combines_weather_terms_across_sources(self):
        news = [Item("Schwere Gewitter und Hagel erwartet", "https://www.tagesschau.de/a", "Tagesschau", 0, NOW)]
        trends = [Item("Unwetter Deutschland", "https://trends.google.com/a", "Google Trends", 0, NOW, 20_000)]
        focus = build_focus(news, trends, NOW)
        self.assertEqual(focus["titel"], "Unwetter in Deutschland")
        self.assertEqual(focus["quelle"], "Tagesschau")
        self.assertEqual(focus["quellen"], ["Tagesschau", "Google Trends"])

    def test_single_source_still_produces_focus(self):
        news = [
            Item("Hochwasser: Lage bleibt angespannt", "https://www.tagesschau.de/a", "Tagesschau", 0, NOW),
            Item("Starkregen sorgt für Hochwasser", "https://www.tagesschau.de/b", "Tagesschau", 2, NOW),
        ]
        focus = build_focus(news, [], NOW)
        self.assertIsNotNone(focus)
        self.assertEqual(focus["quelle"], "Tagesschau")

        trend_focus = build_focus([], [Item("Bodo Ramelow", "https://trends.google.com/a", "Google Trends", 0, NOW, 5_000)], NOW)
        self.assertIsNotNone(trend_focus)
        self.assertEqual(trend_focus["quelle"], "Google Trends")

    def test_atomic_write_never_accepts_incomplete_data(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "focus.json"
            old = {"titel": "Bisheriger Fokus"}
            path.write_text(json.dumps(old), encoding="utf-8")
            with self.assertRaises(ValueError):
                write_atomic(path, {"titel": "Defekt"})
            self.assertEqual(json.loads(path.read_text(encoding="utf-8")), old)

    def test_feed_parsers(self):
        rss = b"""<rss><channel><item><title>Thema A</title><link>https://example.test/a</link><pubDate>Tue, 11 Aug 2026 08:00:00 +0000</pubDate></item></channel></rss>"""
        trends = b"""<rss xmlns:ht='https://trends.google.com/trending/rss'><channel><item><title>Thema A</title><ht:approx_traffic>20K+</ht:approx_traffic><pubDate>Tue, 11 Aug 2026 08:00:00 +0000</pubDate></item></channel></rss>"""
        self.assertEqual(len(parse_tagesschau(rss)), 1)
        self.assertEqual(parse_trends(trends)[0].traffic, 20_000)

    def test_valid_focus_contract(self):
        data = {
            "titel": "Thema", "beschreibung": "Text", "link": "https://example.test",
            "quelle": "Tagesschau", "icon": "🔎", "aktualisiert": "2026-08-11T10:00:00+02:00",
        }
        self.assertTrue(valid_focus(data))
        data["link"] = "javascript:alert(1)"
        self.assertFalse(valid_focus(data))


if __name__ == "__main__":
    unittest.main()
