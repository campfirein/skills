# ByteRover skill

Public, auditable install surface for the ByteRover memory skill.

This repository is generated from the private `byterover-mono` release process
and published for skill installers. The shipped skill lives at
[`skills/byterover`](./skills/byterover):

- Agent instructions: [`skills/byterover/SKILL.md`](./skills/byterover/SKILL.md)
- Runtime scripts: [`skills/byterover/scripts`](./skills/byterover/scripts)
- Element vocabulary: [`skills/byterover/vocabulary.md`](./skills/byterover/vocabulary.md)
- Troubleshooting: [`skills/byterover/troubleshooting.md`](./skills/byterover/troubleshooting.md)

## Install

```bash
npx skills add campfirein/skills
```

## Skill Process

ByteRover gives the host agent a deterministic, zero-LLM memory runtime. The
agent remains responsible for reasoning; the scripts only retrieve, validate,
and persist structured memory.

The core workflow is:

1. Query before non-trivial work:
   `node scripts/query.mjs "<question>" --limit 5`
2. Use relevant hits as project constraints, and cite the returned
   `citation_block` when the answer materially relies on retrieved memory.
3. Do the requested work in the repository.
4. Record decisions, gotchas, or reusable patterns worth remembering:
   `node scripts/record.mjs "<topic-path>" --html '<bv-topic ...>...</bv-topic>'`

Topics are stored as structured `<bv-*>` HTML. The skill expects rich topics to
include the reason for recording, the task or subject, supporting narrative or
raw context, and extracted facts where appropriate. Human-readable prose follows
the user's language; schema names, enum values, and topic paths stay in English.

## Maintenance

This repo is a release artifact. Update the source templates in
`byterover-mono` for behavioral changes, then publish a new skill release. Keep
this README aligned with the generated `skills/byterover` layout.
