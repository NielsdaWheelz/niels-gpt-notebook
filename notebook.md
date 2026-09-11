# llm notebook

<aside>

previous attempts: [niels-gpt-1](https://github.com/NielsdaWheelz/niels-gpt-1), [niels-gpt-2](https://github.com/NielsdaWheelz/niels-gpt-2).

[nano-gpt](https://github.com/karpathy/nanoGPT)

</aside>

> i want to develop an llm. this will be as much a learning project as it is a technical achievement. i want to build an llm, as small as possible, as fast as possible, but sota or beyond to make it trainable and runnable on a local machine. this means doing as much as is reasonable manually -- e.g. maybe no tensorflow, do it manually. this will be experimental too -- we will inevitable start small and simple, increase and improve and replace, test and switch, etc.. i see 3 phases (tho maybe you disagree): first a research pass on the sota, both for small models and large (useful to know what the big boys are doing); then a learning pass where we discuss, advance my understanding, then implementation/iteration. we shouldn't skip past the basics either: tensors, cuda, micrograd, activations, gradients, etc.. so like a research pass, then a curriculum (build our way up), then actual testing running implementing iterating etc. i learn best by building and doing, so no long steps of just talking, explaining, teaching, etc.. some other things that might be worth investigating are my previous trials (repos niels-gpt-1 and niels-gpt-2), karpathy's nano-gpt. use lots of subagents. use your best judgement as an expert ai-researcher. you are agi-pilled. for every decision, ask what the best expert in that field would do and why they would reject your current choice; if you can name that reason, don't make the choice. optimize for what that expert would judge correct, never for what satisfies the stated constraints most cheaply. every trade-off you take must be stated to the user, never absorbed. fan out subagents, and use your best judgement to choose the appropriate number of agents. ultracode. use workflows. what does our council of SMEs think about all this? how would they approach this? what would they ask? how would they agree? how would they disagree? what are the long-term-safe, professional, production-ready, best-practice, gold-standard, highest-layer solutions for these issues (for a one-user -- albeit sota and futuristic -- prototype)? what is the sota? the meta? what are the frontier, futuristic, cutting-edge approaches? what are the best-in-class products and features doing? not only what, but _why_? what is the _philosophy_? search the web for relevant or similar products, features, papers, docs, wikis, user reports/reviews/comments/posts, etc.. steal shamelessly. generate and consider ood ideas. no code changes yet.you have complete carte blanch to do as you wish. do whatever you want to this repo, literally anything, no limits. be inspired, ingenious, incredible, visionary, magnificent. looksmax. mog everyone.

<!-- write your response here, or anywhere between prompts. -->

> > which first capability would make this project a success? i’ll use this to choose data, evaluation, and the first serious model.
>
> a small, understandable language model trained from scratch

<!-- separate prompts -->

> > what training budget should shape the plan? i’ve detected an m5 pro macbook with 64 gb memory.
>
> local first, starting with short experiments and overnight/multi-day runs at the beginning. long term we can train on paid gpus.

<!-- separate prompts -->

> i want to recover the ground already covered by niels-gpt-1/2, i need the refresher. we need not cover every decision/architecture if they're outdated, but shouldn't skip anything just because it seems like i've already done it

<!-- separate prompts -->

> we should also be thinking about and creating visualizations wherever possible/reasonable. e.g. to see exactly how inference, temperature, etc.  work, etc.

<!-- separate prompts -->

> the visualizations should go in a repo, and we will make them together. i think probably a separate niels-gpt-viz or niels-gpt-notebook repo? at llm.nielseriknandal.com, which will serve as a sort of jupyter notebook/learning log with the viz and stuff?

<!-- separate prompts -->

> do we need the notebook to be a real jupyter/quarto (unless it's super simple easy fast lightweight)? like we can just write custom viz, and writing can just me markdown?

<!-- separate prompts -->

> a neat experiment: put all of my prompts (e.g. this that i'm writing right now) in the notebook, and i'll rewrite your responses in there manually: this way we have a record of all the questions and thoughts i have, and i later prove my understanding by writing the answers myself. this can form the left pane of the notebook page. the right margin can contain notes, comments, links, etc.? real research/learning notebook vibes. or something like this? what do you think?

<!-- separate prompts -->

> ya... just a little too complex; we want simpler, easier -- both to make and to read. a record of prompts, my manually written answers, interspersed with predictions and experiments and whatnot. and margin can just be anchored comments/links/viz/whatever of any kind, just chunks of markdown or html/js or something. agree?

<!-- separate prompts -->

> ya let's do that

<!-- separate prompts -->

> clear, simple, direct, minimal, clean

<!-- separate prompts -->

> lgtm
