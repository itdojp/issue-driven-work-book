#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(process.env.READER_UX_ROOT || path.join(__dirname, '..'));
const errors = [];
const terms = [
  ['issue', '../../chapters/chapter-02/', 'docs/chapters/chapter-02/index.md', null],
  ['pr', '../../chapters/chapter-07/', 'docs/chapters/chapter-07/index.md', null],
  ['acceptance-criteria', '../../chapters/chapter-02/#受け入れ条件と確認方法を対応づける', 'docs/chapters/chapter-02/index.md', '### 受け入れ条件と確認方法を対応づける'],
  ['given-when-then', '../../chapters/chapter-02/#受け入れ条件の例given-when-then', 'docs/chapters/chapter-02/index.md', '### 受け入れ条件の例（Given-When-Then）'],
  ['scope', '../templates/issue-task/#スコープ', 'docs/appendices/templates/issue-task/index.md', '## スコープ'],
  ['non-scope', '../templates/issue-task/#非スコープ', 'docs/appendices/templates/issue-task/index.md', '## 非スコープ'],
  ['dor', '../../chapters/chapter-05/#最小の-dor--dod', 'docs/chapters/chapter-05/index.md', '### 最小の DoR / DoD'],
  ['dod', '../../chapters/chapter-05/#pr-前後の-dod-ゲート', 'docs/chapters/chapter-05/index.md', '### PR 前後の DoD ゲート'],
  ['triage', '../templates/triage-matrix/', 'docs/appendices/templates/triage-matrix/index.md', null],
  ['priority', '../../chapters/chapter-04/#priority-と-severity-を混同しない', 'docs/chapters/chapter-04/index.md', '### Priority と Severity を混同しない'],
  ['severity', '../../chapters/chapter-04/#priority-と-severity-を混同しない', 'docs/chapters/chapter-04/index.md', '### Priority と Severity を混同しない'],
  ['blocker', '../../chapters/chapter-06/#ブロッカー報告の分解', 'docs/chapters/chapter-06/index.md', '### ブロッカー報告の分解'],
  ['dependency', '../../chapters/chapter-04/#分割の観点', 'docs/chapters/chapter-04/index.md', '### 分割の観点'],
  ['evidence', '../../chapters/chapter-03/#最低限残すべき情報', 'docs/chapters/chapter-03/index.md', '### 最低限残すべき情報'],
  ['rollback', '../templates/pr/#ロールバック', 'docs/appendices/templates/pr/index.md', '## ロールバック'],
  ['review-thread', '../../chapters/chapter-07/#レビューコメントへの対応方針', 'docs/chapters/chapter-07/index.md', '### レビューコメントへの対応方針'],
  ['runbook', '../../chapters/chapter-09/#転記の判断', 'docs/chapters/chapter-09/index.md', '### 転記の判断'],
  ['adr', '../templates/adr/', 'docs/appendices/templates/adr/index.md', null]
];

function read(file) {
  try {
    return fs.readFileSync(path.join(ROOT, file), 'utf8');
  } catch (error) {
    errors.push(file + ': cannot read (' + error.message + ')');
    return '';
  }
}

function count(text, needle) {
  return text.split(needle).length - 1;
}

function expect(condition, message) {
  if (!condition) errors.push(message);
}

const configText = read('book-config.json');
let config = {};
try {
  config = JSON.parse(configText);
} catch (error) {
  errors.push('book-config.json: invalid JSON (' + error.message + ')');
}
const appendices = config.structure && Array.isArray(config.structure.appendices) ? config.structure.appendices : [];
expect(config.ux && config.ux.profile === 'A', 'book-config.json: ux.profile must be A');
expect(config.ux && config.ux.modules && config.ux.modules.glossary === true, 'book-config.json: ux.modules.glossary must be true');
expect(appendices.filter(function (item) { return item.id === 'glossary' && item.title === '用語集'; }).length === 1,
  'book-config.json: structure.appendices must contain one glossary entry');

const glossary = read('docs/appendices/glossary/index.md');
const nav = read('docs/_data/navigation.yml');
const top = read('docs/index.md');
const css = read('docs/assets/css/mobile-responsive.css');
const layout = read('docs/_layouts/book.html');
const sidebar = read('docs/_includes/sidebar-nav.html');
const pageNavigation = read('docs/_includes/page-navigation.html');
const pkgText = read('package.json');
let pkg = {};
try {
  pkg = JSON.parse(pkgText);
} catch (error) {
  errors.push('package.json: invalid JSON (' + error.message + ')');
}

expect(count(nav, 'path: "/appendices/glossary/"') === 1, 'navigation: glossary route must appear exactly once');
expect(count(top, '](appendices/glossary/)') === 2, 'docs/index.md: glossary link must appear in quick links and appendices');
expect(glossary.includes('title: "用語集"') && glossary.includes('order: 930'), 'glossary: expected front matter');
expect(count(glossary, 'class="glossary-entry"') === terms.length, 'glossary: expected exactly ' + terms.length + ' entries');
expect(count(glossary, 'class="glossary-definition"') === terms.length, 'glossary: every term needs one definition');
expect(count(glossary, 'class="glossary-reference"') === terms.length, 'glossary: every term needs one reference');
expect(css.includes('.glossary-list') && css.includes('.glossary-entry'), 'CSS: glossary list and entry rules are required');
expect(/@media \(max-width: 640px\)\s*\{[\s\S]*?\.glossary-entry\s*\{[\s\S]*?padding:\s*0\.75rem;[\s\S]*?\}[\s\S]*?\}/.test(css),
  'mobile CSS: narrow viewport must contain the glossary-entry padding rule');
expect(layout.includes('{% include sidebar-nav.html %}') && layout.includes('{% include page-navigation.html %}'),
  'book layout: sidebar and page navigation includes are required');
expect(sidebar.includes('navigation.appendices') && sidebar.includes('item.path | relative_url'),
  'sidebar: appendices must be rendered from navigation paths');
expect(pageNavigation.includes('introduction,chapters,additional,resources,appendices,afterword') &&
  pageNavigation.includes('class="nav-prev"') && pageNavigation.includes('class="nav-next"'),
  'page navigation: appendices must participate in prev/next rendering');
expect(pkg.scripts && pkg.scripts['check:reader-ux'] === 'node scripts/check-reader-ux.js',
  'package.json: check:reader-ux script is missing');
expect(pkg.scripts && pkg.scripts['check:reader-ux-regression'] === 'node scripts/check-reader-ux-regression.js',
  'package.json: check:reader-ux-regression script is missing');
expect(pkg.scripts && String(pkg.scripts.test || '').includes('npm run check:reader-ux') &&
  String(pkg.scripts.test || '').includes('npm run check:reader-ux-regression'),
  'package.json: npm test must run both reader UX checks');

const ids = [];
for (const item of terms) {
  const id = item[0];
  const href = item[1];
  const targetFile = item[2];
  const heading = item[3];
  const marker = 'id="term-' + id + '"';
  expect(count(glossary, marker) === 1, 'glossary: expected one stable anchor ' + marker);
  expect(count(glossary, 'href="' + href + '"') >= 1, 'glossary: missing canonical reference for term-' + id);
  const target = read(targetFile);
  expect(target.length > 0, 'glossary: canonical target file is empty for term-' + id);
  if (heading) expect(target.includes(heading), targetFile + ': canonical heading is missing for term-' + id);
  ids.push('term-' + id);
}
expect(new Set(ids).size === terms.length, 'glossary: term contract contains duplicate ids');

const actualAnchors = Array.from(glossary.matchAll(/<dt id="(term-[a-z0-9-]+)">/g), function (match) { return match[1]; });
expect(actualAnchors.length === terms.length, 'glossary: unexpected or malformed term anchors');
expect(new Set(actualAnchors).size === actualAnchors.length, 'glossary: duplicate term anchors');
expect(!/href=""/.test(glossary), 'glossary: empty href is not allowed');

if (errors.length) {
  console.error('Reader UX check failed:');
  for (const error of errors) console.error('- ' + error);
  process.exit(1);
}
console.log('Reader UX check passed: glossary route with 18 grounded terms and canonical targets.');
