# Practical Notes on Data Analysis and Statistical Inference

Open **index.html** in your browser to study. You can open it directly; no web server is required.

The page opens in Hungarian by default. Use the **English** button at the top to
switch to English, and **Magyar** to switch back. You can open or share the English
version directly with `index.html?lang=eng` (or `?lang=eng` after the hosted page URL).
The switch preserves other URL parameters and the current chapter anchor.

## Files

- `notes.md` — Hungarian course text, formulas, tables, quiz questions, and test-selector explanations.
- `notes_en.md` — the English translation, including all chapters, formulas, quiz questions, and explanations.
- `index.html` — page layout, title, header, navigation, footer, and the generated notes.
- `interactive.js` — slider calculations, quiz behavior, charts, and MathJax configuration.
- `language.js` — URL-based language selection, page titles, and interface translations.
- `style.css` — appearance, responsive layout, and printing styles.
- `widgets.html` — HTML for the interactive controls and chart placeholders, inserted into the notes during the build.
- `widgets_en.html` — English labels and markup for the same controls.
- `build.py` — rebuilds the notes using Python 3, with no packages to install.
- `original/index.html` — unchanged original page as a backup.

## Edit the course text

1. Edit and save `notes.md` (Hungarian) or `notes_en.md` (English) as UTF-8.
2. Run this command in this folder:

   ```powershell
   python build.py
   ```

3. Open or refresh `index.html` in your browser.

The Markdown is converted **when you run the build**, rather than loaded by the browser. Both languages are bundled into the generated page, so it works when opened directly from a folder. Share `index.html`, `style.css`, `language.js`, and `interactive.js` together to share the finished webpage. Keep all the project files if you want to edit it later.

The two Markdown files are independent editable sources; rebuilding does not
translate later edits automatically. Update both when changing the course content,
and keep the same section IDs in each language.

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

The bottom of each Markdown file has two fenced data blocks: `quiz` and `explanations`. These contain JSON, which lets you edit the educational content without changing the JavaScript behavior.

Each quiz question has:

- `q`: the question text.
- `opts`: the answer options.
- `correct`: the correct option's index, starting from **0**. Thus `1` means the second answer.
- `explanation`: the feedback after grading.

You can add or remove question objects. Preserve valid JSON: double quotes around text, commas between entries, and no trailing commas. Explanations currently support the original HTML emphasis.

Edit the `one`, `ind`, and `pair` entries in the `explanations` block to change the test-selector feedback. The selector choices, calculator labels, and button captions are in `widgets.html` and `widgets_en.html`; translations of chart labels and generic quiz feedback are in `language.js`.

## Layout and appearance

Edit styles in `style.css`. Edit the surrounding layout and default Hungarian navigation in `index.html`; English navigation is generated from the English chapter headings. Page titles, header text, and footer text are localised in `language.js`. Keep the default Hungarian title/header/footer in `index.html` consistent with those values. Do not manually edit content between `<!-- NOTES:START -->` and `<!-- NOTES:END -->`: the build replaces that part from the two Markdown and widget files.

After editing either Markdown or widget file, run the build. CSS and JavaScript changes only need a browser refresh.

## Check the language switch and interactions

With Node.js installed, run `node tests/check-interactions.cjs` after building.
This dependency-free JavaScript DOM harness checks language URLs and switching
back, titles, translated navigation, number formatting, sliders, test selection,
quiz grading and reset, and chart labels. It does not check visual rendering.
