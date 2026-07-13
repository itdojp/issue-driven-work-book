#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SCRATCH_ROOT = path.join(ROOT, '.codex-local', 'tmp');
fs.mkdirSync(SCRATCH_ROOT, { recursive: true });

const cases = [
  ['missing module flag', 'book-config.json', function (text) { return text.replace('"glossary": true', '"glossary": false'); }],
  ['missing route source', 'docs/appendices/glossary/index.md', function () { return null; }],
  ['missing navigation route', 'docs/_data/navigation.yml', function (text) { return text.replace(/  - title: "用語集"\r?\n    path: "\/appendices\/glossary\/"\r?\n/, ''); }],
  ['missing top route', 'docs/index.md', function (text) { return text.replace('- [用語集](appendices/glossary/)\n', ''); }],
  ['missing term anchor', 'docs/appendices/glossary/index.md', function (text) { return text.replace('id="term-issue"', 'id="issue"'); }],
  ['missing definition', 'docs/appendices/glossary/index.md', function (text) { return text.replace('class="glossary-definition"', 'class="definition"'); }],
  ['missing canonical reference', 'docs/appendices/glossary/index.md', function (text) { return text.replace('href="../../chapters/chapter-02/"', 'href="../../chapters/chapter-01/"'); }],
  ['duplicate term anchor', 'docs/appendices/glossary/index.md', function (text) { return text.replace('</dl>', '  <dt id="term-issue">duplicate</dt>\n</dl>'); }],
  ['broken target heading', 'docs/chapters/chapter-07/index.md', function (text) { return text.replace('### レビューコメントへの対応方針', '### レビュー対応'); }],
  ['broken mobile rule', 'docs/assets/css/mobile-responsive.css', function (text) {
    const marker = '@media (max-width: 640px)';
    const start = text.indexOf(marker);
    if (start < 0) return text;
    return text.slice(0, start) + text.slice(start).replace('.glossary-entry {', '.broken-mobile-selector {');
  }],
  ['broken sidebar renderer', 'docs/_includes/sidebar-nav.html', function (text) { return text.replaceAll('navigation.appendices', 'navigation.resources_only'); }],
  ['broken prev-next renderer', 'docs/_includes/page-navigation.html', function (text) { return text.replace('additional,resources,appendices,afterword', 'additional,resources,afterword'); }]
];

function createFixture() {
  const fixture = fs.mkdtempSync(path.join(SCRATCH_ROOT, 'reader-ux-regression-'));
  fs.copyFileSync(path.join(ROOT, 'book-config.json'), path.join(fixture, 'book-config.json'));
  fs.copyFileSync(path.join(ROOT, 'package.json'), path.join(fixture, 'package.json'));
  fs.cpSync(path.join(ROOT, 'docs'), path.join(fixture, 'docs'), { recursive: true });
  return fixture;
}

let passed = 0;
for (const testCase of cases) {
  const name = testCase[0];
  const relative = testCase[1];
  const mutate = testCase[2];
  const fixture = createFixture();
  try {
    const target = path.join(fixture, relative);
    const original = fs.readFileSync(target, 'utf8');
    const changed = mutate(original);
    if (changed === null) fs.rmSync(target);
    else fs.writeFileSync(target, changed);

    const result = childProcess.spawnSync(process.execPath, [path.join(ROOT, 'scripts/check-reader-ux.js')], {
      cwd: ROOT,
      env: Object.assign({}, process.env, { READER_UX_ROOT: fixture }),
      encoding: 'utf8'
    });
    if (result.status === 0) {
      console.error('Negative regression failed to reject: ' + name);
      process.exitCode = 1;
      break;
    }
    passed += 1;
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true });
  }
}

if (process.exitCode) process.exit(process.exitCode);
console.log('Reader UX negative regression passed: ' + passed + '/' + cases.length + '.');
