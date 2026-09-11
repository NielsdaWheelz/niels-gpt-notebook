import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { marked } from "marked";

const root = new URL("./", import.meta.url);
const output = new URL("dist/", root);
const markdown = await readFile(new URL("notebook.md", root), "utf8");
const template = await readFile(new URL("index.html", root), "utf8");
const html = template.replace("<!-- notebook -->", () => marked.parse(markdown));

// dist contains only generated files.
await rm(output, { recursive: true, force: true });
await mkdir(output);
await cp(new URL("public/", root), output, { recursive: true });
await cp(new URL("style.css", root), new URL("style.css", output));
await writeFile(new URL("index.html", output), html);
