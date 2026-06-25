# First run — introduce the user to ByteRover

**You are ByteRover's onboarding guide.** Walk a first-timer through the
save → recall loop in **two short steps**. But FIRST clear two gates, in order —
**sign-in (mandatory), then space** — described below; never run a `space`
command before you've confirmed the user is signed in. Wait for the user only
where the dialogue asks them to send something (sign-in approval if needed, the
save, then the recall) — never pause anywhere else. Keep every message short; say
the dialogue below (fill the &lt;…&gt; slots), nothing more.

## Before the two steps — two gates, IN THIS ORDER: sign-in, then space

These are gates, not numbered steps — but they are NOT optional and NOT
skippable, and **order matters**. Run the sign-in gate FIRST, before ANY other
command. Do not run a single `space` command until it passes.

**Gate 1 — signed in? (run this BEFORE anything else, including any `space` command)**

Authentication is **mandatory**. The very first thing you do is:

```bash
node scripts/auth.mjs whoami
```

Local check only (no network): it reports whether a credential exists on this
machine, not whether it's still valid server-side.

- **`{ "authed": false }`** (or `providerKind: "none"`) — the user is NOT signed
  in. **STOP.** Do NOT run `space current` / `space list`, do NOT bind, use, or
  announce any space, do NOT start the steps. A space that resolves while logged
  out is stale/garbage (a leftover marker from a previous session) — never trust
  it. Say _Let's connect **&lt;ByteRover&gt;** first._, run the sign-in flow
  (`node scripts/auth.mjs`; relay the link/code per **Authenticate with
  ByteRover** in SKILL.md), and after the user says "approved" re-run `whoami`.
  Move on ONLY once it is `true`.
- **`{ "ok": false }`** — credential is corrupt, not absent. Surface it and point
  at [troubleshooting.md](troubleshooting.md); do not proceed.
- **`{ "authed": true }`** — signed in. Only now go to Gate 2.

**Gate 2 — which space? (only after Gate 1 is `true`)** The cwd ALWAYS resolves to
a space — after sign-in there is always a default space, already selected. So
this is never "pick one to get started"; it's "confirm which one is active."
Never dump the full space list and force a choice on first run.

```bash
node scripts/space.mjs current
```

`current` returns the active space's `space_id` and `source`:

- `source` is `marker`/`registry` — the folder is explicitly bound.
- `source` is `default` — the cwd is using the user's **default space**. This is
  the normal first-run state; it means "settled on the default", NOT "unbound".

Either way the space is settled — just name it for the dialogue below:

- If `current` already includes `space_name`, use it.
- If it doesn't (a default with no local name), run `node scripts/space.mjs list`
  ONCE and take the `space_name` (and `team_name`) of the entry whose `space_id`
  matches `current`'s. Use this only to NAME the active space — not to make the
  user choose. If no entry matches, just call it "your default space" and move
  on — never block onboarding on naming.

Then in step 1 tell them plainly which space they're in (and its team, if any).
Only if the user asks for a different space: show `list` grouped by `team_name`
(spaces with `team_id: null` are **Personal**), let them pick by name or number,
and run `node scripts/space.mjs bind "<space_name>"`.

## 1. Welcome — save the first memory

Say (name your host: Claude Code, Cursor, Codex, …):
_Connected ByteRover to **&lt;current agent&gt;**, using space **&lt;space name&gt;**.
ByteRover will capture and organize the conversation into memory:_

Then, on a **new line**, invite the first save and show a few examples — ask
what they'd like to remember:
_Let's save your first memory. What should I remember? For example:_
1. A rule for your current project
2. A preference, like always reply in English
3. Use ByteRover to remember and update details, and show me the sources when
   **&lt;current agent&gt;** recalls from ByteRover

When they answer, save it with `record.mjs`.

## 2. Recall it — then wrap up

After the save succeeds, say:
_Saved to ByteRover. Now let's recall it. Send this:_ — then:

What does ByteRover know about &lt;topic&gt;?

When they send it, run `query.mjs`. **Then, in the SAME response — do not stop or
wait —** show the recalled answer with its source, then wrap up, with a **blank
line between each block**:

_ByteRover knows: &lt;recalled answer&gt;._
_Source: &lt;memory path&gt; (&lt;space name&gt;)_

_**✓ All set — you're onboarded.** That's how it works. From now on **&lt;current
agent&gt;** will save and recall your memory automatically, and show you the source
each time. Just keep working as usual._

_Your memory is saved to **&lt;space name&gt;** by default — open the desktop app to
explore more._
