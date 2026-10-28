# Interactive statistics course notes

Open **index.html** in your browser to study. You can open it directly; no web server is required.

## Files

- `notes.md` — Hungarian course text, formulas, tables, quiz questions, and test-selector explanations.
- `index.html` — page layout, title, header, navigation, footer, and the generated notes.
- `interactive.js` — slider calculations, quiz behavior, charts, and MathJax configuration.
- `style.css` — appearance, responsive layout, and printing styles.
- `widgets.html` — HTML for the interactive controls and chart placeholders, inserted into the notes during the build.
- `build.py` — rebuilds the notes using Python 3, with no packages to install.
- `original/index.html` — unchanged original page as a backup.

## Edit the course text

1. Edit and save `notes.md` as UTF-8.
2. Run this command in this folder:

   ```powershell
   python build.py
   ```

3. Open or refresh `index.html` in your browser.

The Markdown is converted **when you run the build**, rather than loaded by the browser. The generated page therefore works when opened directly from a folder. Share `index.html`, `style.css`, and `interactive.js` together to share the finished webpage. Keep all the project files if you want to edit it later.

Math formulas still use the original MathJax CDN, so rendering the formulas requires internet access. The notes, charts, calculator, and quiz are local.

## Text format

The dependency-free builder supports the Markdown features used by these notes: headings, paragraphs, bold, italics, inline code, links, flat numbered and bulleted lists, and tables. It is a small course-specific Markdown builder; features such as nested lists, images, and arbitrary code fences are not supported.

```markdown
<!-- section: s1 -->

## 1. A chapter title

A paragraph with **bold text** and *emphasis*.

### A subsection

- One item
- Another item

| Column A | Column B |
| --- | --- |
| Value | Value |

::: note
A highlighted note.
:::

::: example
An example.
:::

::: formula
\[
SE=\frac{s}{\sqrt{n}}
\]
:::

{{widget:standard-error}}
```

Use `\( ... \)` for inline formulas and `\[` / `\]` on separate lines for display formulas. Keep LaTeX backslashes as written. Within tables, `|` separates cells; do not use literal pipe characters inside cells.

Keep the `<!-- section: ... -->` markers and `{{widget:...}}` markers intact when editing prose. The section markers preserve navigation targets. When adding or renaming chapters, update the navigation links in `index.html` as well. The final takeaways section has its own marker.

## Quiz and test-selector text

The bottom of `notes.md` has two fenced data blocks: `quiz` and `explanations`. These contain JSON, which lets you edit the educational content without changing the JavaScript behavior.

Each quiz question has:

- `q`: the question text.
- `opts`: the answer options.
- `correct`: the correct option's index, starting from **0**. Thus `1` means the second answer.
- `explanation`: the feedback after grading.

You can add or remove question objects. Preserve valid JSON: double quotes around text, commas between entries, and no trailing commas. Explanations currently support the original HTML emphasis.

Edit the `one`, `ind`, and `pair` entries in the `explanations` block to change the test-selector feedback. The selector choices, calculator labels, and button captions are in `widgets.html`; chart labels and generic quiz feedback are in `interactive.js`.

## Layout and appearance

Edit styles in `style.css`. Edit the title, header, navigation, footer, and surrounding layout directly in `index.html`. Do not manually edit content between `<!-- NOTES:START -->` and `<!-- NOTES:END -->`: the build replaces that part from `notes.md` and `widgets.html`.

After editing `notes.md` or `widgets.html`, run the build. CSS and JavaScript changes only need a browser refresh.
