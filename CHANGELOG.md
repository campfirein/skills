# skill

## 4.0.7

### Patch Changes

- `prune`, `merge`, and `synthesize` now record a `delete-intent` in the space's sync-state dir before each local delete, so the daemon's reconcile cycle force-deletes the matching cloud copy instead of resurrecting it on the next sync. Without this, agent-driven deletions never stuck: the local file disappeared, then reappeared on the next reconcile because the missing-local-but-present-in-cloud topic was treated as "lost data, restore from remote." Mirrors the desktop UI's existing intent-recording pattern; best-effort, never fails the user's command.

## 4.0.6

### Patch Changes

- Capture the raw query text on `query_completed` (truncated at 512 chars), so usefulness dashboards can label "Used for these tasks" rows with the actual query instead of an opaque `task_id`. Field is optional — existing rows stay valid, and a bare `search` with no positionals emits the event without it.

## 4.0.5

### Patch Changes

- Emit a `read_completed` analytics event on direct `brv read` so usefulness dashboards see direct-read activity. The event mirrors `query_completed.read_paths_with_metadata` shape so downstream rollups can union read + query streams without per-event branching. Recall stays uninstrumented as before (system caller).

## 4.0.4

### Patch Changes

- Retrieval citation block now embeds the topic URL into the title as a Markdown link, hiding the long URL behind the clickable title. Adds three per-hit evidence lines beneath the title: a `"snippet"` preview of the matched context (with mid-token-cut sanitization), a `Recalled N×` badge from the second recall onward, and an `Updated by <agent> · <relative>` trailer within a 30-day window.

## 4.0.3

### Patch Changes

- Point the shipped skill's default service URLs at v4-\*.byterover.dev.

## 4.0.2

### Patch Changes

- Resolve `team_id` authoritatively; never fall back to "Personal".
- Batch recall analytics per space.

## 4.0.1

### Patch Changes

- Accept non-v4 UUID space ids (previously only v4 UUIDs were recognized).

## 4.0.0

### Major Changes

- ByteRover 4.0.0 — official release.
