# Troubleshooting

Commands print `{ "ok": false, "error": "..." }` on failure. Common cases:

| Error | Cause | Fix |
| --- | --- | --- |
| ``No context tree found for <dir>. Run `init` to create one.`` | Project hasn't been init'd, or cwd is outside any known project | `cd` into a project root and run `brv init` (or `node scripts/brv.mjs init` if you run the bundled skill directly) |
| ``<bv-topic> must declare a non-empty `path` attribute.; <bv-topic> Required`` | The `--html` payload had `<bv-topic>` without a non-empty `path` attribute | Add `path="<topic-path>"` to `<bv-topic>`. See [vocabulary.md](vocabulary.md) for required `<bv-topic>` attributes |
| `Path escapes context-tree root: ...` | A topic path used `../` | Use a path inside the tree (e.g. `domain/topic`) |
| `record requires a topic path` | Missing positional path | `node scripts/record.mjs "<path>" --title ... --body ...` |
| `Cannot find module .../scripts/*.mjs` | Skill scripts not built | From the repo, run `pnpm install && pnpm build:skill` |
| `Unknown command: <x>` | Typo or unsupported verb | See the command table in [SKILL.md](SKILL.md) |
| `legacy markdown file(s) the HTML engine cannot read` | Tree contains pre-v0.1 `.md` files | Run `node scripts/migrate.mjs` |

If a command resolves to an unexpected project, the engine is finding a
different init'd project on the cwd walk-up. **`cd` into the project root
you intend to work in** and re-run — the engine resolves the right tree from
the working directory automatically. If the wrong tree keeps resolving even
from the right directory, surface that to the user; the registry is
engine-internal and only the desktop UI manages it.

## Cloud sync troubleshooting

These issues apply when the workspace is configured for cloud sync.

| Error / State | Cause | Agent action |
| --- | --- | --- |
| `auth-expired` in `sync.mjs status` | Credentials revoked, team not on paid plan, or invalid team/space | Surface to the user — they re-authenticate through the desktop UI. **Don't edit environment or attempt to rotate keys from the agent.** |
| Sync paused for a space | Space is over capacity or server-side throttle | Surface to the user; capacity / plan changes happen in the ByteRover dashboard. |
| `conflicts` array non-empty | Two edits touched the same file | Conflicts auto-resolve via last-writer-wins. The array is informational — no agent action needed. |
| `pendingError` persists across cycles | Network failure or 5xx server error | Check `node scripts/sync.mjs status`. If persistent, surface to the user — it's a server-side issue. |
| Bootstrap failure on first sync | Invalid team/space or network unreachable | Surface to the user; configuration is managed through the desktop UI. |
| Daemon log shows errors | Detailed error in sync state dir | Surface the error to the user with `node scripts/sync.mjs status` output. |

### Checking daemon status

```bash
node scripts/sync.mjs status
```

Prints JSON with daemon state, last push/pull timestamps, conflicts, and any
pending errors. This is the only sync command the agent invokes; lifecycle
operations (start, stop, reconfigure) are user actions through the desktop.

## Silent degradation — output that "works" but isn't right

These don't produce `{ ok: false }` — the writer accepts them. They show
up later as bad search hits, dead reference links, or unstructured topics.
Fix them at authoring time.

| Symptom | Cause | Fix |
| --- | --- | --- |
| `<bv-fact subject="Release date" …>` | Title Case subject | snake_case is required: `subject="release_date"`. See [vocabulary.md](vocabulary.md#facts) |
| `<bv-fact>` without `category=` | Skipping the category attribute | Every fact gets `category` ∈ {personal, project, preference, convention, team, environment, other} |
| `<bv-fact subject="x" value="2012-01-19">Release date.</bv-fact>` | Body is a label, value is the statement | Invert: body = the canonical sentence, `value=` = the extracted form. |
| Topic with no `<bv-task>` and no `<h1>` | Missing topic anchor | Add `<bv-task>` describing what the topic is about (or `<h1>` + intro `<p>`) |
| Topic with only `<bv-fact>` siblings, no narrative element | Missing required narrative | Add at least one of `<bv-changes>`/`<bv-files>`/`<bv-flow>`/`<bv-structure>`/`<bv-dependencies>`/`<bv-highlights>` |
| Dates / version markers only in prose | Missing `<bv-timestamp>` | Add `<bv-timestamp>2012-01-19</bv-timestamp>` (ISO 8601) |
| `related="movies/x"` renders as dead link | Missing `@` prefix and `.html` suffix | File targets: `related="@movies/x.html"`. Folder targets: `related="@movies"` |
| Many `<bv-fact>` for cast / credits / file lists | Wrong element for grouped data | Use `<bv-structure>` with `<ul><li>` for grouped lists; reserve `<bv-fact>` for discrete queryable facts |
| Single-quoted attributes (`subject='thai_title'`) | Style drift from v3.x convention | Use double quotes consistently: `subject="thai_title"`. Match the engine's own output style. |
| Hyphenated topic path (`movies/atm-er-rak-error`) | Path segments not snake_case | Use underscores between words: `movies/atm_er_rak_error`. v3.x requires snake_case per segment. |
| Custom element like `<bv-cast>` or `<bv-awards>` | Inventing outside the closed vocabulary | The 19-element vocabulary is closed. Use `<bv-structure>` (grouped list) or `<bv-fact>` (discrete facts) instead. |
| Invented attribute like `<bv-fact priority="high">` | Adding attributes outside the documented schema | Each element has a fixed attribute schema in `packages/core/src/render/elements/schemas.ts`. Severity belongs on `<bv-rule>` / `<bv-bug>`, not `<bv-fact>`. |
| LLM-authored `createdat=`, `updatedat=`, `id=`, `importance=`, `maturity=`, `recency=` on `<bv-topic>` | Authoring system-managed attributes | The writer stamps `createdat` / `updatedat` / `id` itself; runtime signals live in a sidecar store. Don't set them. |
| `<bv-fix>` nested inside `<bv-bug>` | Wrong tree shape | Emit as siblings inside `<bv-topic>`. The renderer pairs by adjacency. |
| Diagram body wrapped in `<![CDATA[…]]>` | HTML5 treats CDATA as bogus comment | Emit the diagram body directly in `<bv-diagram>` using HTML entities (`&lt;`, `&gt;`, `&amp;`). |
