# @byterover/skill-runtime

## 0.2.0

### Minor Changes

Security cleanup of the agent surface. The shape of every destructive
operation flips from "agent calls it directly" to "agent calls a
creative op that bundles the destruction internally." Free-form
deletion now lives only in the ByteRover desktop app.

- **Tighter command surface.** `delete` and `space delete / restore /
  migrate` removed. Three new bundled executors land in their place:
  - `prune <path>...` — atomic multi-path removal, aborts on first
    failure with a partial-progress report.
  - `synthesize <new-path> --html ... --absorb a,b,c` — atomic
    consolidation: writes the new topic, then absorbs the inputs.
  - `move <from> <to>` — atomic rename, with `related=` references
    in every other topic auto-rewritten to follow.

- **Path-leak hygiene.** SKILL docs no longer publish the data-dir
  path, env var names (`BRV_DATA_DIR`, `BRV_API_KEY`,
  `BRV_PROJECTS_ROOT`), the `history.jsonl` registry location, or
  the `--root` escape hatch. The engine resolves the context tree
  from cwd; agents never compute the storage path.

- **Tightened path validation.** `canonicalRel` now rejects absolute
  paths and `..` traversal up front rather than silently
  re-interpreting them. Pinned by 31 path-traversal regression cases
  across `read`, `record`, `prune`, `move`, `merge`, and `synthesize`.

- **Sanitized `record` response.** Topics return the tree-relative
  `path` field instead of the absolute filesystem location.

## 0.1.0

### Minor Changes

- Initial 0.1.0 release. The deterministic context-tree memory engine
  (`@byterover/core` + `@byterover/storage`) and the `byterover` agent skill
  distributed via skills.sh, bundled by `@byterover/skill-runtime`.
