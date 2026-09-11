import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { marked } from "marked";

test("renders the notebook and margin markdown as static html", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  const markdown = await readFile(new URL("../notebook.md", import.meta.url), "utf8");
  assert.ok(html.includes(marked.parse(markdown)));
  assert.match(html, /<title>llm notebook<\/title>/);
  assert.match(html, /<aside>[\s\S]*<a href="https:\/\/github.com\/NielsdaWheelz\/niels-gpt-1">/);
});

test("keeps consecutive prompts separate without requiring an answer", () => {
  const markdown = "> first prompt\n\n<!-- separate prompts -->\n\n> second prompt";
  const prompts = marked.lexer(markdown).filter((token) => token.type === "blockquote");
  assert.deepEqual(prompts.map((prompt) => prompt.text), ["first prompt", "second prompt"]);
});

test("allows markdown, scripts, and embedded visuals in a margin note", () => {
  const html = marked.parse(
    '<aside>\n\na **note** and [link](https://example.com).\n\n' +
    '<iframe src="/viz/example.html" title="example" height="400"></iframe>\n\n' +
    '<script>document.body.dataset.example = "ready";</script>\n\n' +
    '</aside>\n\nmain text.',
  );
  assert.match(html, /<aside>\s*<p>a <strong>note<\/strong>/);
  assert.match(html, /<iframe src="\/viz\/example.html" title="example" height="400"><\/iframe>/);
  assert.ok(html.includes('<script>document.body.dataset.example = "ready";</script>'));
  assert.match(html, /<\/aside>\s*<p>main text\.<\/p>/);
});

test("publishes only the page, unchanged stylesheet, and explicit public assets", async () => {
  const assets = await readdir(new URL("../public/", import.meta.url), { recursive: true });
  const output = await readdir(new URL("../dist/", import.meta.url), { recursive: true });
  assert.deepEqual(output.sort(), [...assets, "index.html", "style.css"].sort());
  assert.equal(
    await readFile(new URL("../dist/style.css", import.meta.url), "utf8"),
    await readFile(new URL("../style.css", import.meta.url), "utf8"),
  );
});
