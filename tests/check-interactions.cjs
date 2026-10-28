// Dependency-free smoke tests. This small DOM harness checks runtime behaviour;
// it does not replace browser rendering or accessibility checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const page = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function run(search, english) {
  const nodes = [];
  function parseHTML(markup, region) {
    const scripts = [];
    markup = markup.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (_, attrs, text) => {
      const id = /\bid="([^"]+)"/.exec(attrs);
      if (id) scripts.push(Object.assign(new Element({id: id[1]}, region), {textContent: text}));
      return '';
    });
    for (const match of markup.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)) {
      const attrs = {tag: match[1]};
      for (const a of match[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g)) attrs[a[1]] = a[2] ?? '';
      if (attrs.id || attrs.tag === 'input') nodes.push(new Element(attrs, region));
    }
    nodes.push(...scripts);
  }
  class Element {
    constructor(attrs = {}, region = 'layout') {
      Object.assign(this, attrs);
      this.region = region;
      this.value = attrs.value || '';
      this.checked = 'checked' in attrs;
      this.className = attrs.class || '';
      this.textContent = '';
      this.children = [];
      this.listeners = {};
      this.attrs = {};
      this._html = '';
    }
    set innerHTML(value) {
      this._html = value;
      if (this.tag === 'main' || this.id === 'quiz') {
        const region = this.tag === 'main' ? 'main' : 'quiz';
        for (let i = nodes.length - 1; i >= 0; i--)
          if (nodes[i].region === region || (region === 'main' && nodes[i].region === 'quiz')) nodes.splice(i, 1);
        parseHTML(value, region);
      }
    }
    get innerHTML() { return this._html; }
    setAttribute(key, value) { this.attrs[key] = String(value); }
    addEventListener(key, listener) { this.listeners[key] = listener; }
    replaceChildren() { this.children = []; }
    appendChild(child) { this.children.push(child); }
  }
  const main = new Element({tag: 'main'});
  const mainMarkup = /<main>([\s\S]*?)<\/main>/.exec(page)[1];
  parseHTML(page.replace(/<main>[\s\S]*?<\/main>/, ''), 'layout');
  main.innerHTML = mainMarkup;
  const get = id => nodes.find(node => node.id === id);
  const select = selector => {
    const match = /^input\[name="([^"]+)"\](?:\[value="([^"]+)"\])?(:checked)?$/.exec(selector);
    assert.ok(match, 'Unsupported test selector: ' + selector);
    return nodes.filter(node => node.name === match[1] &&
      (match[2] === undefined || node.value === match[2]) && (!match[3] || node.checked));
  };
  const document = {
    documentElement: {},
    getElementById: get,
    querySelector: selector => selector === 'main' ? main : select(selector)[0] || null,
    querySelectorAll: select,
    createElementNS: (_, tag) => new Element({tag})
  };
  const href = 'file:///course/index.html' + search;
  const window = {location: {href}};
  const context = vm.createContext({document, window, URL, console});
  for (const file of ['language.js', 'interactive.js'])
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, {filename: file});

  const ui = window.courseLanguage;
  assert.equal(ui.english, english);
  assert.equal(document.documentElement.lang, english ? 'en' : 'hu');
  assert.equal(document.title, ui.title);
  assert.equal(get('courseTitle').textContent, ui.title);
  assert.equal(get('footerTitle').textContent, ui.title);
  assert.equal(get('languageSwitch').textContent, english ? 'Magyar' : 'English');
  const other = new URL(get('languageSwitch').href);
  assert.equal(other.searchParams.get('lang'), english ? 'hu' : 'eng');
  assert.equal(other.hash, new URL(href).hash);
  assert.equal(other.searchParams.get('ref'), new URL(href).searchParams.get('ref'));
  if (english) {
    assert.match(main.innerHTML, /Scientific thinking and the role of statistics/);
    assert.match(get('tocLinks').innerHTML, /Practice questions/);
    assert.match(main.innerHTML, /Check answers/);
  }
  const ids = nodes.filter(n => n.id).map(n => n.id);
  assert.equal(ids.length, new Set(ids).size, 'Active IDs must be unique');
  assert.equal(get('seOutput').textContent, english ? '2.00' : '2,00');
  get('sampleSize').value = '400';
  get('sampleSize').listeners.input();
  assert.equal(get('seOutput').textContent, english ? '1.00' : '1,00');
  get('sdRange').value = '40';
  get('sdRange').listeners.input();
  assert.equal(get('seOutput').textContent, english ? '2.00' : '2,00');
  assert.ok(get('seCalculation').textContent.includes(english ? '2.00' : '2{,}00'));

  const explanations = JSON.parse(get('explanations-data').textContent);
  for (const value of ['one', 'ind', 'pair']) {
    for (const el of select('input[name="design"]')) el.checked = el.value === value;
    select('input[name="design"]')[0].listeners.change();
    assert.equal(get('testExplanation').innerHTML, explanations[value]);
  }
  const quiz = JSON.parse(get('quiz-data').textContent);
  assert.equal(quiz.length, 6);
  get('gradeBtn').listeners.click();
  assert.equal(get('feedback0').textContent, ui.unanswered);
  for (const [i, q] of quiz.entries())
    for (const option of select(`input[name="q${i}"]`)) option.checked = Number(option.value) === q.correct;
  get('gradeBtn').listeners.click();
  assert.match(get('quizScore').innerHTML, /6 \/ 6/);
  assert.ok(get('feedback0').innerHTML.includes(ui.correct));
  assert.ok(get('quizScore').innerHTML.includes(ui.answered));
  for (const [i, q] of quiz.entries())
    for (const option of select(`input[name="q${i}"]`)) option.checked = Number(option.value) === (q.correct + 1) % q.opts.length;
  get('gradeBtn').listeners.click();
  assert.match(get('quizScore').innerHTML, /0 \/ 6/);
  assert.ok(get('feedback0').innerHTML.includes(ui.incorrect));
  get('resetBtn').listeners.click();
  assert.equal(nodes.filter(node => node.region === 'quiz' && node.checked).length, 0);
  assert.equal(get('quizScore').innerHTML, '');
  assert.equal(get('normalChart').children.filter(node => node.tag === 'path').length, 2);
  assert.equal(get('dispersionChart').children.filter(node => node.tag === 'path').length, 2);
  assert.ok(get('normalChart').children.some(node => node.textContent === ui.zScore));
  assert.ok(get('dispersionChart').children.some(node => node.textContent === ui.lowDispersion));
  return other;
}

for (const [query, english] of [['', false], ['?lang=hu', false], ['?lang=eng', true],
  ['?lang=en', true], ['?lang=ENG', true], ['?lang=unknown', false]]) run(query, english);
const back = run('?ref=shared&lang=eng#s10', true);
const forward = run(back.search + back.hash, false);
assert.equal(forward.searchParams.get('lang'), 'eng');
console.log('Passed: URL languages and round-trip links, titles, English notes/navigation, sliders, test selector, quiz grading/reset, and chart labels.');
