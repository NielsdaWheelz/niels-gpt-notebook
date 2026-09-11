# niels-gpt-notebook

one continuous document: prompts, your own answers, predictions, experiments, and margin notes.

write in [notebook.md](notebook.md). prompts are blockquotes; your answers are ordinary markdown between them. no required template. the existing prompts are copied from the project conversation; assistant answers are intentionally absent.

## margin notes

put an aside immediately before the paragraph it belongs beside. keep the blank lines so markdown inside it is rendered:

```markdown
<aside>

a note, a [link](https://example.com), an image, or some html.

</aside>

the paragraph this note accompanies.
```

on smaller screens, the note appears inline at that position. neighbouring notes stack without overlapping; a long note can push the next one down.

## visualizations

we build these together. keep a standalone html/css/js visualization in `public/viz/`, then embed it in the main text or an aside:

```html
<iframe src="/viz/example.html" title="what this visualization shows" height="400"></iframe>
```

choose its height for the visualization. its javascript and styling stay inside the frame. ordinary html can go directly in the markdown. this is trusted, locally authored content, not a place to paste unreviewed scripts.

[drafts/temperature-and-sampling.html](drafts/temperature-and-sampling.html) preserves the earlier sketch unchanged. it still depends on conversation styling and is not published. its logits are illustrative, not model output.

## run

```sh
npm ci
npm run dev
```

`npm test` builds the site and checks its rendered content. the local preview uses python's built-in static file server. after editing, run `npm run build` in another terminal and refresh the browser; there is no automatic reload.

the build uses one dependency, marked, to turn `notebook.md` into html. `index.html` is the page template; `style.css` controls the layout. files under `public/` are copied into `dist/`, the only directory vercel publishes.

no react, application server, database, browser editor, notebook kernel, or visualization framework. javascript appears only when an authored visualization needs it.

model code and authoritative run artifacts belong in `../niels-gpt-3`. when publishing measured results, record the model commit and run beside them. publishing does not rerun experiments.

## publish

the notebook is public, including its prompt history. its domain is `llm.nielseriknandal.com`; cloudflare manages dns and vercel hosts the static files.

the source repository is private; the website is public. pushes to `main` build, test, and publish through vercel. `vercel --prod` can also publish the linked project manually. only the contents of `dist/` are served; drafts, source files, and local work directories are not website assets.

the original private sites deployment is retained as a migration fallback. its configuration and source remain in git history.
