"""
Parse blockchain_part_*.pdf (converted via pdftotext) into questions.js format.

Usage (from repo root):
  pdftotext.exe -layout blockchain_part_1.pdf _part1.txt
  python scripts/parse_blockchain_pdf.py --txt _part1.txt --part 1 --out questions.js
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


def normalize_text(raw: str) -> str:
    raw = raw.replace("\ufeff", "").replace("\x0c", "\n")
    # Fix common ligature/control characters emitted by some pdftotext builds
    raw = (
        raw.replace("\x1c", "fi")   # e.g. rst -> first
        .replace("\x1b", "ff")      # e.g. dierent -> different
        .replace("\x1f", "fl")      # e.g. oine -> offline
        .replace("\x1e", "ffi")     # e.g. eciently -> efficiently
    )
    # drop control chars except \n and \t
    return "".join(ch for ch in raw if (ch in ("\n", "\t") or ord(ch) >= 32))


def squish_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def parse_questions(txt: str, part: int) -> list[dict]:
    lines = normalize_text(txt).splitlines()

    module: str | None = None
    out: list[dict] = []
    q: dict | None = None

    def flush() -> None:
        nonlocal q
        if not q:
            return
        q["text"] = squish_ws(q.get("text", ""))
        for opt in q.get("options", []):
            opt["text"] = squish_ws(opt.get("text", ""))
        if q.get("correctAnswer"):
            q["correctAnswer"] = str(q["correctAnswer"]).strip().lower()
        out.append(q)
        q = None

    i = 0
    while i < len(lines):
        line = lines[i].rstrip()

        m = re.match(r"^\s*MODULE\s+(\d+)\s*:\s*(.+?)\s*$", line)
        if m:
            module = f"MODULE {m.group(1)}: {m.group(2).strip()}"
            i += 1
            continue

        m = re.match(r"^\s*Question\s+(\d+)\s+([A-Z]+)\s*$", line)
        if m:
            flush()
            qid = int(m.group(1))
            diff = m.group(2).upper()
            q = {
                "id": qid,
                "part": part,
                "section": module or "BLOCKCHAIN",
                "text": "",
                "options": [],
                "correctAnswer": "",
                "difficulty": diff,
            }

            # Question text: lines after header until options or "Correct Answer"
            i += 1
            text_lines: list[str] = []
            while i < len(lines):
                l = lines[i].strip("\r")
                if re.match(r"^\s*\([a-z]\)\s+", l):
                    break
                if re.search(r"^\s*Correct\s+Answer\s*:", l, flags=re.I):
                    break
                if l.strip() == "" and text_lines:
                    i += 1
                    break
                if l.strip() != "":
                    text_lines.append(l.strip())
                i += 1
            q["text"] = " ".join(text_lines).strip()

            # Options / correct answer until next Question/MODULE
            cur_opt: dict | None = None
            while i < len(lines):
                l = lines[i]
                if re.match(r"^\s*Question\s+\d+\s+[A-Z]+\s*$", l):
                    break
                if re.match(r"^\s*MODULE\s+\d+\s*:\s*", l):
                    break

                mopt = re.match(r"^\s*\(([a-z])\)\s*(.*)$", l.strip())
                if mopt:
                    cur_opt = {"id": mopt.group(1).lower(), "text": mopt.group(2).strip()}
                    q["options"].append(cur_opt)
                    i += 1
                    continue

                mca = re.search(r"Correct\s+Answer\s*:\s*\[?\s*([a-z])\s*\]?", l, flags=re.I)
                if mca:
                    q["correctAnswer"] = mca.group(1).lower()
                    i += 1
                    continue

                # Continuation line for current option
                if cur_opt and l.strip() and not l.strip().lower().startswith("correct"):
                    cur_opt["text"] += " " + l.strip()

                i += 1

            continue

        i += 1

    flush()
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--txt", required=True, help="Path to pdftotext output .txt")
    ap.add_argument("--part", required=True, type=int, choices=[1, 2])
    ap.add_argument("--out", default="questions.js")
    args = ap.parse_args()

    txt_path = Path(args.txt)
    raw = txt_path.read_text(encoding="utf-8", errors="ignore")
    questions = parse_questions(raw, part=args.part)

    ids = [q["id"] for q in questions]
    if not ids:
        raise SystemExit("No questions parsed (ids empty).")

    # Basic sanity checks
    missing = [n for n in range(min(ids), max(ids) + 1) if n not in set(ids)]
    print(f"parsed={len(questions)} range={min(ids)}..{max(ids)} missing={len(missing)}")
    if missing:
        print("missing_first_20:", missing[:20])

    out_lines = [
        f"// questions.js - BLOCKCHAIN PART {args.part} (generated from PDF via pdftotext)",
        "const questions = " + json.dumps(questions, ensure_ascii=False, indent=4) + ";",
        "",
    ]
    Path(args.out).write_text("\n".join(out_lines), encoding="utf-8")
    print(f"wrote={args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


