---
name: byterover
description: "Durable runbook memory for the current workspace. Use BEFORE any non-trivial work to retrieve prior decisions, patterns, and gotchas; use AFTER finishing to record what was learned. Iron Law: query before you think, curate after you implement."
metadata:
  version: 0.2.0
---

# ByteRover — durable project memory

ByteRover keeps project knowledge as a deterministic context tree. **You are
the brain; the engine never calls an LLM.** You do the reasoning, then run the
bundled deterministic scripts (via your Bash tool) to retrieve or persist
knowledge.

## Iron Law

1. **Query before you think.** At the start of any non-trivial task, retrieve
   what the project already knows so you don't re-derive or contradict it.
2. **Curate after you implement.** When you finish something worth remembering
   (a decision, a gotcha, a pattern), write it back so the next session
   inherits it.

## Where memory lives

The engine resolves the right context tree from your working directory. **You
do not compute, look up, or override the storage path.** Run commands from
inside the project (any subdirectory works) and the right tree is found
automatically — the resolver and registry are engine-internal.

## Language

**Match the user's input language.** Author the human-readable content in
whatever language the user is conversing in — body text of `<bv-*>` elements,
list items, and the `title` / `summary` attributes on `<bv-topic>`. There is no
setting and no flag; you infer the language from the conversation, the same way
you already do when replying.

**The schema stays English.** Keep **tag names** (`<bv-fact>`, never a
translated tag), **attribute names** (`subject`, `category`, `severity`),
**enum values** (`category="project"`, `subject="visa_required"`), and the
**`path`** attribute in English for tooling consistency. Code snippets and
identifiers stay verbatim.

Concrete (Vietnamese conversation): `path="travel/vietnam_visa"` and
`subject="visa_required" category="project"` stay English, while
`title="Yêu cầu visa Việt Nam"` and the `<bv-fact>` body
(`Người Mỹ cần visa để vào Việt Nam.`) are Vietnamese. Same rule for Chinese,
Japanese, Korean, Russian, Arabic, etc.

## Commands

Run from inside the project (any subdirectory). Topics are stored as `<bv-*>`
HTML. First run in a project: `node scripts/brv.mjs init` to create the tree
and register the project in history.

| Need | Command |
| --- | --- |
| Retrieve | `node scripts/query.mjs "<question>" --limit 5` |
| Save (rich, multi-element topics) | `node scripts/record.mjs "<topic-path>" --html '<bv-topic …>…</bv-topic>'` — **see the worked example in "Authoring rich topics" below; do NOT improvise the shape from this row** |
| Save (simple, single-fact topics) | `node scripts/record.mjs "<topic-path>" --title "T" --summary "S" --keywords a,b --body "..."` |

> **Required `<bv-topic>` attributes:** `path` and `title` MUST be present and
> non-empty on the topic root or the writer rejects the call. The `path` on
> `<bv-topic>` should match the positional `<topic-path>` you pass to
> `record.mjs`. See [vocabulary.md](vocabulary.md) for the full attribute spec.
| Read | `node scripts/brv.mjs read "<topic-path>.html"` |
| List | `node scripts/brv.mjs list` |
| Rebuild manifest + index | `node scripts/manifest.mjs` |
| Detect consolidation opportunities | `node scripts/dream.mjs --mode merge\|link\|prune\|synthesize` (proposes — never executes) |
| Fold one topic into another | `node scripts/merge.mjs <survivor> <loser>` |
| Remove redundant topics | `node scripts/prune.mjs <topic-path>...` (variadic, atomic — aborts on first failure with a partial report) |
| Combine many topics into a new one | `node scripts/synthesize.mjs <new-path> --html '<bv-topic …>…</bv-topic>' --absorb a.html,b.html,c.html` |
| Rename a topic | `node scripts/move.mjs <from-path> <to-path>` |
| Migrate legacy markdown | `node scripts/migrate.mjs [--dry-run]` |

To delete a topic, surface the request to the user — deletions happen through
the ByteRover desktop app.

Every command prints a JSON result. On `{ "ok": false, ... }` read
[troubleshooting.md](troubleshooting.md).

## Cloud sync (automatic)

Cloud sync runs automatically when the workspace is configured for it. `query`
and `record` start the background sync on demand; if sync isn't configured,
ByteRover runs local-only and the commands still work. **You do not configure
sync from the agent** — the user sets it up through the ByteRover desktop app.

The only sync command the agent runs is `node scripts/sync.mjs status` to check
state. If status shows `auth-expired` or non-empty `conflicts`, surface that to
the user — they resolve it through the desktop UI, not by editing environment.
Details: [sync.md](sync.md). Troubleshooting: [troubleshooting.md](troubleshooting.md).

## Authoring rich topics

Topics render in **four sections** and you should author with that
structure in mind. Each `<bv-*>` element belongs to one section; the
renderer ignores order within a section but you should emit them in
section order to keep the source readable.

| Section | Elements | What it carries |
|---|---|---|
| **`## Reason` (the WHY)** | `<bv-reason>` | The "why" of this curation, 1–2 sentences. Almost always include this. |
| **`## Raw Concept` (the WHAT and HOW)** | `<bv-task>`, `<bv-changes>`, `<bv-files>`, `<bv-flow>`, `<bv-timestamp>`, `<bv-author>`, `<bv-pattern>` | The concept itself: subject, changes, related files, process flow, date, author, regex patterns. |
| **`## Narrative` (the EXPLANATION)** | `<bv-structure>`, `<bv-dependencies>`, `<bv-highlights>`, `<bv-rule>`, `<bv-examples>`, `<bv-diagram>` | Structural docs, deps, key highlights, project rules, worked examples, preserved diagrams. |
| **`## Facts` (the EXTRACTED DATA)** | `<bv-fact>` | Discrete, queryable facts — one per element. Not a dumping ground for content that belongs in Narrative. |
| **Runbook (any section)** | `<bv-decision>`, `<bv-bug>`+`<bv-fix>` (siblings) | Standalone runbook records. |

Every topic MUST include:

1. **A `<bv-reason>`** explaining the WHY of the curation (the topic isn't
   useful without context for why it was captured).
2. **A `<bv-task>`** describing what the topic is about (one sentence), OR
   an `<h1>` + intro `<p>` if "task" doesn't fit.
3. **At least one Narrative or Raw Concept element** beyond the task:
   `<bv-changes>` / `<bv-files>` / `<bv-flow>` / `<bv-structure>` /
   `<bv-dependencies>` / `<bv-highlights>` / `<bv-decision>` /
   `<bv-bug>` / `<bv-fix>`. A topic with only `<bv-fact>` siblings is a
   placeholder, not a topic.
4. **`<bv-timestamp>`** in ISO 8601 if the content has a reference date.
5. **`<bv-fact subject="snake_case" category="…" value="…">canonical
   statement</bv-fact>`** for each extracted fact — `subject` is snake_case,
   `category` is one of `personal` / `project` / `preference` /
   `convention` / `team` / `environment` / `other`, `value` carries the
   extracted form, and the **body text is the canonical natural-language
   statement** (not a label).

### Worked example — research/profile-style topic

This is the shape an agent must author. Copy this skeleton and fill the
slots; do not invent a flatter shape:

```bash
node scripts/record.mjs "movies/atm_er_rak_error" --html '
<bv-topic path="movies/atm_er_rak_error"
          title="ATM: Er Rak Error (2012 Thai film)"
          summary="GTH 2012 romantic comedy by Mez Tharatorn — secretly-dating bank employees bet their jobs on recovering money from a malfunctioning ATM."
          keywords="atm_er_rak_error,gth,thai_romcom,mez_tharatorn,2012"
          tags="film,thai,gth,romcom"
          related="@movies/pee_mak_phra_khanong.html">

  <bv-reason>
    Anchor topic for cross-references between Thai GTH romcoms; documents
    the studio box-office record holder before Pee Mak (2013).
  </bv-reason>

  <bv-task>Profile of ATM: Er Rak Error (2012) — credits, plot, awards, legacy.</bv-task>

  <bv-timestamp>2012-01-19</bv-timestamp>

  <bv-highlights>
    Premise: a bank no-fraternization policy forces a secret 5-year couple
    into a winner-keeps-the-job bet over money from a glitching ATM.
    Was GTH biggest hit until Pee Mak (2013) topped it.
  </bv-highlights>

  <bv-structure>
    <p>Credits:</p>
    <ul>
      <li><strong>Director:</strong> Mez Tharatorn</li>
      <li><strong>Writers:</strong> Mez Tharatorn, Aummaraporn Phandintong</li>
      <li><strong>Studio:</strong> GTH (GMM Tai Hub)</li>
    </ul>
    <p>Lead cast:</p>
    <ul>
      <li><strong>Sua:</strong> Ter Chantavit Dhanasevi</li>
      <li><strong>Jib:</strong> Ice Preechaya Pongthananikorn</li>
    </ul>
  </bv-structure>

  <bv-flow>
    Sua and Jib are bank staff who dated secretly for 5 years under the
    bank no-fraternization policy. An ATM glitches and dispenses 130,000
    baht. They bet: whoever recovers the money keeps their job. The
    sequence escalates into a chaotic showdown involving manager Pakorn,
    Sergeant Sam, and Sam pet crocodile Jack.
  </bv-flow>

  <bv-fact subject="release_date" category="project" value="2012-01-19">
    The film was released theatrically in Thailand on January 19, 2012.
  </bv-fact>

  <bv-fact subject="runtime_minutes" category="project" value="123">
    The film runs 123 minutes.
  </bv-fact>

  <bv-fact subject="box_office" category="project" value="150.11 million baht">
    The film grossed 150.11 million baht, reaching Thailand 7th highest-
    grossing film within four weeks of release.
  </bv-fact>

  <bv-fact subject="record_vs_pee_mak" category="project" value="GTH highest-grossing film until Pee Mak (2013)">
    ATM was GTH/GMM Tai Hub highest-grossing film until Pee Mak surpassed it in 2013.
  </bv-fact>

  <bv-changes>
    <li>2013-11-30 to 2014-02-08: TV sequel ATM 2: Koo ver Error Er Rak aired (21 episodes, One 31).</li>
    <li>Chinese-language remake released as Welcome to the Beartown.</li>
  </bv-changes>

</bv-topic>'
```

Note what carries WHAT:

- **`<bv-reason>` carries the WHY** of this curation. Missing this is the
  single most common authoring failure — don't skip it.
- **`<bv-task>` + `<bv-timestamp>` carry the WHAT and WHEN.**
- **`<bv-highlights>` + `<bv-flow>` carry the HOW** (the explanation,
  the process).
- **`<bv-structure>` carries grouped lists** like cast/credits/file
  layouts — NOT a pile of `<bv-fact>` siblings. Reserve `<bv-fact>` for
  discrete queryable claims (release date, runtime, box office, awards).

### Output contract (hard rules)

The schema is permissive — the writer accepts violations silently — but
output that ignores these rules ranks worse and reads worse:

- **All attribute values are double-quoted strings.** Not single quotes.
- **All attribute names are lowercase.**
- **Path segments are snake_case with underscores between words**:
  `movies/atm_er_rak_error`, NOT `movies/atm-er-rak-error` (hyphens).
- **`related=`** uses **`@path.html`** for file targets, **`@path`** bare
  for folder/domain targets. The `@` prefix is required.
- **No code fence wrapper.** The `--html` argument is bare HTML — first
  character `<`, last characters `</bv-topic>`. No ` ``` `, no
  ` ```html `.
- **Don't set `createdat`, `updatedat`, `id`, `importance`, `maturity`,
  or `recency`** on `<bv-topic>`. The writer system-stamps the first
  three; the last three are sidecar runtime signals the LLM does not
  author.
- **Don't invent custom elements** outside the 19-element `<bv-*>`
  vocabulary, or attributes outside each element's documented schema.

### Two record forms

- **Simple form (`--title --body`)** wraps the body in a single
  `<bv-fact>`. Use it ONLY when the topic is genuinely one fact ("we
  use OAuth 2.0 with PKCE"). For anything else the wrapper structure
  is wrong.
- **Rich form (`--html`)** is everything else — profile dumps,
  decisions+reasons+rules+facts, bug+fix runbooks, research notes.

For the full element registry, schema-level attributes, and the
authoritative anti-patterns list, read
[vocabulary.md](vocabulary.md). For commit-quality recording guidance,
read [record.md](record.md).

## When to read what

- First time in a repo, or no memory exists for the project → [onboarding.md](onboarding.md)
- Before retrieving → [query.md](query.md)
- Before saving knowledge → [record.md](record.md)
- Choosing the right `<bv-*>` element → [vocabulary.md](vocabulary.md)
- Periodic cleanup / consolidation → [dream.md](dream.md)

> Note: topics are `<bv-*>` HTML (not markdown). `scripts/*.mjs` are generated
> from `@byterover/skill-runtime` by `pnpm build:skill`; if missing, build first.
