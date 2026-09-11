# niels-gpt-notebook

a learning notebook for building and understanding a language model. intended website: `llm.nielseriknandal.com`.

status: local repository and working plan. the website, hosting, and domain connection have not been implemented. the name is provisional.

## purpose

record the questions, predictions, experiments, failures, explanations, and revisions that build understanding. interactive visualizations belong inside that record, with their source in this repository. author the entries and visualizations together as the corresponding concepts are learned; a finished assistant-written tutorial does not substitute for that work.

provide two ways through the same entries: a chronological learning log and a concept index. give an entry a stable address so later work can cite an earlier experiment or correction. preserve historical observations and explain revised conclusions rather than silently rewriting the learning history.

## repository boundary

| repository | owns |
| --- | --- |
| `niels-gpt-3` | model implementation, training, evaluation, experiment configurations, and authoritative run artifacts |
| `niels-gpt-notebook` | learning entries, mathematical explanations, visualization source, small published data snapshots, and the website |

measured notebook results identify the training repository's exact commit, run, configuration, and relevant data/tokenizer versions. small exports can be committed beside an entry. large datasets and checkpoints remain outside the website repository. illustrative calculations are labeled as such and checked against the model implementation when they claim to reproduce it.

the cost of two repositories is keeping these references explicit. the benefit is independent publication and presentation tooling without entangling the training environment. begin with simple exported data and pinned references; no shared package or submodule is required.

## an entry we build together

1. the question and current prediction.
2. the smallest derivation or program needed to test it.
3. an interactive visualization or measured figure when it helps.
4. the observation, including surprising or negative results.
5. the explanation in the learner's own words, remaining uncertainty, and the next question.

use these as prompts, not mandatory empty headings. distinguish illustrative numbers, actual model traces, and measured experiments. keep numerical values inspectable beneath the visual representation.

## publication and computation

the initial site should publish prose, mathematics, source, recorded results, and small browser interactions. training and gpu experiments run in the model environment; rendering a page must not silently start or repeat a training run. an embedded live python notebook is an option for a lesson that benefits from it, not a prerequisite for the whole site.

evaluate the publishing tool through one jointly authored entry. [quarto](https://quarto.org/docs/computations/python.html) supports python/jupyter content and [reactive observable javascript](https://quarto.org/docs/computations/ojs.html); it is a strong candidate when computational writing leads. [astro with mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) is a candidate when bespoke interactive presentation leads, with more notebook integration work. these are planning options, not installed dependencies or a settled stack. hosting is also undecided.

the useful first slice is one readable entry with one understandable experiment, source links, and a stable address. build it together before expanding navigation, automation, or a library of visualizations.

## preserved draft

[temperature-and-sampling.html](drafts/temperature-and-sampling.html) preserves the earlier illustrative temperature sketch unchanged. it is a reference draft, not a completed learning entry. it depends on the original conversation's styling utilities and is not yet a standalone website page. it contains invented fixed logits, not output from a trained model.

future visualizations should have their authoritative source here. conversation previews can show that work, but must not become its only durable copy.
