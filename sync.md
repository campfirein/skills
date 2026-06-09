# Cloud sync

Cloud sync runs automatically when the user has configured the workspace for
it through the ByteRover desktop app. `query` and `record` start the
background sync on demand; if sync isn't configured, ByteRover runs
local-only and every command still works. **You don't configure sync from
the agent** — that's a user/desktop concern.

## How it works

- The daemon polls periodically, pushing local edits and pulling remote
  updates.
- It auto-starts on the next `query` or `record` call when the workspace is
  configured for sync.
- Conflicts are resolved via last-writer-wins (newer timestamp wins; remote
  wins on tie).
- Push/pull errors retry automatically on the next poll cycle.

## Checking status (agent-readable)

If sync seems stuck or a user reports cloud issues:

```bash
node scripts/sync.mjs status
```

This prints the daemon's current state. If status reports `auth-expired` or
non-empty `conflicts`, **surface that to the user** — they resolve it through
the desktop UI, not by editing environment or rotating keys from the agent.

For full troubleshooting, see [troubleshooting.md](troubleshooting.md).
