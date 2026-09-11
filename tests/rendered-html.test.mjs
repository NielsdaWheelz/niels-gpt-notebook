import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { marked } from "marked";

test("renders the notebook and margin markdown in the built page", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /^text\/html/);

  const html = await response.text();
  const markdown = await readFile(new URL("../notebook.md", import.meta.url), "utf8");
  assert.ok(html.includes(marked.parse(markdown)));
  assert.match(html, /<title>llm notebook<\/title>/);
  assert.match(html, /<aside>[\s\S]*<a href="https:\/\/github.com\/NielsdaWheelz\/niels-gpt-1">/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("keeps the twelve initial prompts separate and in order", async () => {
  const markdown = await readFile(new URL("../notebook.md", import.meta.url), "utf8");
  const prompts = marked.lexer(markdown).filter((token) => token.type === "blockquote");
  assert.ok(prompts.length >= 12);
  assert.match(prompts[0].text, /^i want to develop an llm\./);
  assert.equal(prompts[11].text, "lgtm");
});

test("allows markdown and embedded visuals in a margin note", () => {
  const html = marked.parse(
    '<aside>\n\na **note** and [link](https://example.com).\n\n' +
    '<iframe src="/viz/example.html" title="example" height="400"></iframe>\n\n' +
    '</aside>\n\nmain text.',
  );
  assert.match(html, /<aside>\s*<p>a <strong>note<\/strong>/);
  assert.match(html, /<iframe src="\/viz\/example.html" title="example" height="400"><\/iframe>/);
  assert.match(html, /<\/aside>\s*<p>main text\.<\/p>/);
});
