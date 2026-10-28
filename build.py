"""Rebuild the notes in index.html. Python 3; no third-party dependencies.

Supports the Markdown used in notes.md: headings, paragraphs, emphasis,
flat lists, tables, math, and the documented course-specific markers.
This is a trusted local authoring format, not a general Markdown processor.
"""
from pathlib import Path
import html
import json
import re

ROOT = Path(__file__).resolve().parent


def inline(text):
    math = []

    def save(match):
        math.append(match.group())
        return f"MATHPLACEHOLDER{len(math)-1}END"

    text = re.sub(r"\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]", save, text)
    text = html.escape(text.strip(), quote=False).replace("&lt;br&gt;", "<br>")
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text, flags=re.S)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^\s)]+)\)", r'<a href="\2">\1</a>', text)
    for i, value in enumerate(math):
        text = text.replace(f"MATHPLACEHOLDER{i}END", html.escape(value, quote=False))
    return text


def render(source, widgets):
    lines = source.strip().splitlines()
    out = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        if line.startswith("<!--"):
            while "-->" not in lines[i]:
                i += 1
            i += 1
            continue
        if line.startswith("{{widget:"):
            match = re.fullmatch(r"\{\{widget:([\w-]+)\}\}", line)
            if not match or match[1] not in widgets:
                raise ValueError(f"Unknown widget marker: {line}")
            out.append(widgets[match[1]])
            i += 1
            continue
        if line.startswith("::: "):
            kind = line[4:]
            if kind not in ("note", "example", "formula"):
                raise ValueError(f"Unknown container: {kind}")
            end = i + 1
            depth = 1
            while end < len(lines):
                if lines[end].strip().startswith("::: "):
                    depth += 1
                if lines[end].strip() == ":::":
                    depth -= 1
                    if depth == 0:
                        break
                end += 1
            if depth:
                raise ValueError(f"Unclosed container: {kind}")
            content = "\n".join(lines[i+1:end])
            out.append(f'<div class="{kind}">\n{render(content, widgets)}\n</div>')
            i = end + 1
            continue
        if line == r"\[":
            end = lines.index(r"\]", i + 1)
            out.append(html.escape("\n".join(lines[i:end+1]), quote=False))
            i = end + 1
            continue
        heading = re.match(r"^(#{1,6}) (.+)$", line)
        if heading:
            level = len(heading[1])
            out.append(f"<h{level}>{inline(heading[2])}</h{level}>")
            i += 1
            continue
        if line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append([x.strip() for x in lines[i].strip().strip("|").split("|")])
                i += 1
            if len(rows) < 2 or not all(re.fullmatch(r":?-{3,}:?", x) for x in rows[1]):
                raise ValueError("A table needs a Markdown separator row.")
            table = []
            for row_index, row in enumerate([rows[0]] + rows[2:]):
                tag = "th" if row_index == 0 else "td"
                table.append("<tr>" + "".join(f"<{tag}>{inline(x)}</{tag}>" for x in row) + "</tr>")
            out.append('<div class="table-wrap"><table>\n' + "\n".join(table) + "\n</table></div>")
            continue
        item = re.match(r"^(?:- |\d+\. )(.+)$", line)
        if item:
            tag = "ul" if line.startswith("- ") else "ol"
            items = []
            pattern = r"^- (.+)$" if tag == "ul" else r"^\d+\. (.+)$"
            while i < len(lines):
                item = re.match(pattern, lines[i].strip())
                if not item:
                    break
                items.append("<li>" + inline(item[1]) + "</li>")
                i += 1
            out.append(f"<{tag}>" + "\n".join(items) + f"</{tag}>")
            continue
        paragraph = [line]
        i += 1
        while i < len(lines) and lines[i].strip():
            if re.match(r"^(?:#{1,6} |:::|\{\{widget:|<!--|\||- |\d+\. |\\\[)", lines[i].strip()):
                break
            paragraph.append(lines[i].strip())
            i += 1
        out.append("<p>" + inline("\n".join(paragraph)) + "</p>")
    return "\n".join(out)


def compile_notes(notes_file, widgets_file):
    notes = (ROOT / notes_file).read_text(encoding="utf-8")
    widgets_source = (ROOT / widgets_file).read_text(encoding="utf-8")
    widgets = dict(re.findall(r'<template id="([\w-]+)">\n(.*?)\n</template>', widgets_source, re.S))
    datasets = {}

    def extract_data(match):
        name, value = match.groups()
        if name in datasets:
            raise ValueError(f"Duplicate data block: {name}")
        datasets[name] = json.loads(value)
        return ""

    notes = re.sub(r"^```(quiz|explanations)\n(.*?)^```\s*$", extract_data, notes, flags=re.S | re.M)
    if set(datasets) != {"quiz", "explanations"}:
        raise ValueError(f"Keep one quiz and one explanations data block in {notes_file}.")
    for question in datasets["quiz"]:
        if not isinstance(question["correct"], int) or not 0 <= question["correct"] < len(question["opts"]):
            raise ValueError("Quiz correct index must identify an existing option.")
    parts = re.split(r"<!-- section: ([\w-]+) -->", notes)
    sections = []
    seen = set()
    headings = {}
    for i in range(1, len(parts), 2):
        section_id, text = parts[i:i+2]
        if section_id in seen:
            raise ValueError(f"Duplicate section: {section_id}")
        seen.add(section_id)
        heading = re.search(r"^## (.+)$", text, re.M)
        if not heading:
            raise ValueError(f"Missing chapter heading: {section_id} in {notes_file}")
        headings[section_id] = heading[1]
        sections.append(f'<section id="{section_id}">\n{render(text, widgets)}\n</section>')
    if not sections:
        raise ValueError("No section markers found.")
    for name, data in datasets.items():
        sections.append(f'<script type="application/json" id="{name}-data">{script_json(data)}</script>')
    return {"html": "\n\n".join(sections), "ids": seen, "headings": headings, "datasets": datasets}


def script_json(data):
    """JSON safe inside a script element, including HTML stored as strings."""
    return json.dumps(data, ensure_ascii=False).replace("<", "\\u003c").replace(">", "\\u003e").replace("&", "\\u0026")


def build():
    hungarian = compile_notes("notes.md", "widgets.html")
    english = compile_notes("notes_en.md", "widgets_en.html")
    if hungarian["ids"] != english["ids"]:
        raise ValueError("Both languages must have the same section markers.")
    page_path = ROOT / "index.html"
    page = page_path.read_text(encoding="utf-8")
    targets = re.findall(r'href="#([\w-]+)"', page)
    for target in targets:
        if target not in hungarian["ids"]:
            raise ValueError(f"Navigation points to a missing section: {target}")
    navigation = "\n".join(f'<a href="#{target}">{inline(english["headings"][target])}</a>' for target in dict.fromkeys(targets))
    payload = {"html": english["html"], "navigation": navigation}
    content = hungarian["html"] + '\n<script type="application/json" id="english-page-data">' + script_json(payload) + '</script>'
    page, count = re.subn(r"<!-- NOTES:START -->.*?<!-- NOTES:END -->", lambda _: "<!-- NOTES:START -->\n" + content + "\n<!-- NOTES:END -->", page, flags=re.S)
    if count != 1:
        raise ValueError("index.html must contain exactly one NOTES:START / NOTES:END pair.")
    page_path.write_text(page, encoding="utf-8")
    print(f"Built index.html: Hungarian and English, {len(hungarian['ids'])} sections each; "
          f"{len(hungarian['datasets']['quiz'])}/{len(english['datasets']['quiz'])} quiz questions.")


if __name__ == "__main__":
    build()
