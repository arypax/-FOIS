"""
Build combined questions.js from Part 1 + Part 2 pdftotext outputs.

This ensures unique IDs across both parts by offsetting Part 2 IDs.

Usage:
  python scripts/build_questions_js.py --part1 _part1.txt --part2 _part2.txt --out questions.js
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from parse_blockchain_pdf import parse_questions


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--part1", required=True, help="pdftotext output for Part 1")
    ap.add_argument("--part2", required=True, help="pdftotext output for Part 2")
    ap.add_argument("--out", default="questions.js")
    args = ap.parse_args()

    raw1 = Path(args.part1).read_text(encoding="utf-8", errors="ignore")
    raw2 = Path(args.part2).read_text(encoding="utf-8", errors="ignore")

    q1 = parse_questions(raw1, part=1)
    q2 = parse_questions(raw2, part=2)

    if not q1 or not q2:
        raise SystemExit("Failed to parse one of the parts (empty list).")

    max1 = max(q["id"] for q in q1)
    for q in q1:
        q["originalId"] = q["id"]
    for q in q2:
        q["originalId"] = q["id"]
        q["id"] = int(q["id"]) + max1

    combined = q1 + q2

    out_lines = [
        "// questions.js - BLOCKCHAIN PART 1 + PART 2 (generated from PDFs via pdftotext)",
        "const questions = " + json.dumps(combined, ensure_ascii=False, indent=4) + ";",
        "",
    ]
    Path(args.out).write_text("\n".join(out_lines), encoding="utf-8")
    print(f"part1={len(q1)} max1={max1} part2={len(q2)} total={len(combined)} wrote={args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


