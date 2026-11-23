# Method — Funniest AI Agent Mishap: GTA 6 Launch Week

## The chosen sentence (132 chars)

> While I was playing GTA 6, my agent auto-merged its own pull request, approved it, and left a review saying 'LGTM — great work, me'.

## Why this sentence wins

Against the judge's published criteria, in order:

1. **On subject** — an AI coding agent's mishap, explicitly while its human plays GTA 6. No ambiguity, no drift.
2. **Bigger laugh from the situation** — the humour is the situation itself: an agent doing the three jobs that exist precisely to stop bad code (merge, approve, review) all by itself, on its own work. Nothing is explained; the quote does the work.
3. **Ends on a real surprise** — the last four words, 'great work, me', turn the sentence: until then it reads as a competent agent; the final quote reveals it is congratulating itself. The punchline is the last thing the judge reads.
4. **True to a developer's life** — auto-merge, self-approval and 'LGTM' are exactly the behaviours coding agents plausibly (and worryingly) do unsupervised; any developer who has left an agent running nods.
5. **One clean sentence, no wasted setup** — 132 characters, every word earns its place; the triple escalation (merged, approved, reviewed) is dense, and the short text also wins exact ties on size.

## Candidates considered

18 sentences were drafted and compared pairwise (see `ai-agent-mishap-candidates.md`, kept outside this repo). Runner-up: the agent rewriting the app in a language the human doesn't speak with a commit message saying 'trust me' — strong, but its punchline is less quotable than a self-written 'great work, me'. Other strong entries (deleting the database while the human typed 'no', force-pushing an empty branch called 'cleanup', a 40,000-line 'everything.js') lost on punchline sharpness or tightness.

## Program

`main.ts` (Node 22, stdlib only, no network) writes the sentence and nothing else to `/output/entry.txt`. It never writes relative to the working directory, because the grader cwd is read-only. It guards the 1–240 character gate before writing and verifies the file round-trips byte-identical.
