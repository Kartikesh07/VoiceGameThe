const fs = require('fs');
const vm = require('vm');
const ts = require('typescript');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
function parse(source) {
  const context = { exports: {} };
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
  return context.exports;
}
async function main() {
  const data = parse(fs.readFileSync('src/data/stories.ts', 'utf8'));
  const original = parse(execFileSync('git', ['show', 'HEAD:src/data/stories.ts'], { encoding: 'utf8' }));
  assert.equal(data.stories.length, original.stories.length);
  const assets = new Set();
  for (const story of data.stories) {
    const previous = original.stories.find(s => s.id === story.id);
    assert(previous, story.id);
    assert.equal(story.slug, previous.slug, 'Existing bookmark destinations must remain stable');
    assert(story.editorialStatus === 'demonstration' || story.source?.url.startsWith('https://www.thegamevoice.com/article/'));
    assert(!story.interview?.pullQuote, 'No invented interview quotations');
    assets.add(story.coverImage);
    for (const section of story.content.subsections || []) if (section.image) assets.add(section.image);
    const response = await fetch(`http://127.0.0.1:3104/articles/${story.slug}`);
    assert.equal(response.status, 200, story.slug);
    const html = await response.text();
    assert(html.includes(story.title.replaceAll('&', '&amp;')), story.title);
  }
  for (const asset of assets) {
    assert(fs.existsSync(`public${asset}`), asset);
    assert.equal((await fetch(`http://127.0.0.1:3104${asset}`)).status, 200, asset);
  }
  assert.equal(data.searchStories('Danchi', 'IMPRESSIONS').length, 1);
  assert.equal(data.searchStories('zzzznotfound').length, 0);
  assert.equal(data.getRelatedStories(data.stories[0].slug).length, 3);
  assert.equal(new Set(data.stories.map(s => s.slug)).size, data.stories.length);
  console.log(`Passed: ${data.stories.length} article URLs, ${assets.size} image assets, stable IDs/slugs, content provenance, search and related-story queries.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
