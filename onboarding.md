# Onboarding a repo

First time in a project? Initialize ByteRover memory from the project root:

```bash
cd /path/to/your/project
node scripts/brv.mjs init
```

This creates a context tree for the project and registers it so subsequent
commands can find it. The JSON result confirms success; you don't need to know
the storage location, and every later command resolves the right tree from your
current working directory automatically.

Seed a first topic or two. The `--body` form below is the **simple** one-fact
shape; for anything with multiple elements (decisions, rules, structure) use the
rich `--html` form instead — see [vocabulary.md](vocabulary.md):

```bash
node scripts/record.mjs "overview/architecture" \
  --title "Architecture overview" \
  --summary "One-line summary of the system's shape." \
  --keywords architecture,modules \
  --body "<one durable paragraph describing the system's shape>"
```

## What to seed

Walk the repo briefly and record only durable, non-obvious knowledge:

- The system's overall shape and module boundaries.
- Key decisions encoded in the code that a newcomer would miss.
- Conventions and constraints the team enforces.

Keep it small and high-signal. ByteRover grows by curation during real work,
not by dumping everything up front. After seeding, run `node scripts/manifest.mjs`
to build the query index.

Before authoring richly-structured seed topics, skim
[vocabulary.md](vocabulary.md) for the `<bv-*>` element types and when each
applies — the right element per kind of knowledge is what makes search land
on the right topic later.
