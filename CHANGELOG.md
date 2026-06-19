# @byterover/skill-runtime

## 0.7.0

### Minor Changes

- Release skill 0.7.0.

## 0.6.3

### Patch Changes

- Accept UUIDv7 space IDs in the sync daemon and context-tree metadata handling.
- Ship the push-bundle/cold-sync runtime path: bounded cold-sync concurrency,
  runtime env reads, safer bundle tar handling, shared-space sync hardening, and
  bundle upload fallback behavior.

## 0.6.2

### Patch Changes

- Refine the onboarding guide copy for first-memory setup and recall: prompt for
  more useful memory examples, show the recalled source, and describe the default
  private-space behavior more clearly.

## 0.6.1

### Patch Changes

- Add the daemon sync-now sentinel watcher, reset sync baselines on
  disclosure-layer downgrades, keep cloud-bound local caches usable when auth is
  expired, and drop the dev-app citation fallback.
- Ship the fast-sync event-driven catch-up and delta path with safer cursor
  advancement, dirty/LWW guards, prevRev validation, adaptive polling, and
  poll-scoped backpressure.

## 0.6.0

### Minor Changes

- 5ea64d2: Add a production-visible desktop sync status bar with honest progress.

  The sync engine now emits structured runtime facts (sanitized file basename,
  action-count progress, per-space health, and a recent-completion summary) and a
  `completion` event after non-zero reconcile batches. `@byterover/sync` exports a
  shared `normalizeDaemonStatus` parser plus `sanitizeDisplayBasename`, and the
  multi-space daemon writes enriched, sanitized status (team/space metadata,
  per-space health, progress kind, and a heartbeat-preserved `recentCompletion`).

  The desktop app maps normalized daemon state into a discriminated `statusDetail`
  IPC contract; the renderer resolves `teamId -> Team.name` via app-layer
  composition and renders a segmented status bar (file truncates first) with coarse,
  privacy-preserving accessibility text. The status bar is now visible by default
  (hidden only with `RENDERER_VITE_HIDE_DAEMON_STATUS_BAR=true`).

### Patch Changes

- fcfac7e: Redesign the sign-in / device-auth experience and force provider OAuth on the
  desktop handoff.

  The desktop login screen is restyled to the new Figma (shared AuthScreenShell
  chrome, spacing, muted text, one-line legal footer). "Continue with
  Google/GitHub" now passes `selectAccount`, so the browser handoff always lands
  on the chosen provider and account picker instead of silently reusing a
  persisted `/desktop/authorize` web session.

  The web device-authorization approval screen (`/device`) — where the skill's
  `auth.mjs` device-grant flow sends the user — is moved onto the same dark card
  system: serif heading, pill Approve/Deny buttons, a device-detail panel, and
  status badges for the terminal states. The screen now shows the signed-in
  account with a "Switch account" control (server-side sign-out that returns to
  the device code), and the Approve/Deny buttons were split into two forms to
  remove a server-action hydration mismatch.

- 63af6a5: Fix slow / never-completing sync at scale (~150+ memories).

  The reconcile data plane processed every file's HTTP round-trip strictly
  serially and had no request timeout, so a large space was O(n)·RTT slow and a
  single stalled request could wedge a reconcile indefinitely. The engine now:
  - reconciles per-file actions with bounded concurrency (`syncConcurrency`,
    default 8) instead of serially;
  - applies a per-request fetch timeout (`requestTimeoutMs`, default 30000) plus
    bounded retry with backoff for transient network/5xx failures (`maxRetries`,
    default 2) — a dead request now fails fast instead of hanging;
  - fetches the manifest once per reconcile during move-intent completion instead
    of re-fetching it for every intent, and reads move-identity probes
    concurrently;
  - caches each local file's md5 by (mtime,size) so unchanged files are not
    re-read and re-hashed on every poll;
  - lets bootstrap finish (and `bootstrapReady` flip true) when only individual
    files are permanently rejected (e.g. a redacted member's 403), surfacing them
    via `status.rejected` instead of blocking the whole space forever.

## 0.5.0

### Minor Changes

- d522419: Phase 4 — selective-disclosure model. Topics can mark sensitive content and be
  projected down to disclosure layers (the deterministic model + local preview;
  server-side enforcement is Phase 5).
  - `@byterover/core`: `disclosure` (on `<bv-fact>`) and `visibility` (on
    `<bv-topic>`) attributes, **fail-closed** — a typo'd or absent value coerces to
    `restricted` (never silently public, never a write error). `visibility` is
    excluded from the canonical hash (an access label, not content, so it never
    invalidates a Phase 3 signature). New `materializeLayer(html, layer)`:
    `full` / `redacted` (strip every non-public fact, then project every kept
    element's attributes — root **and** descendants — down to a **deny-by-default
    allow-list** so only structural/identity attrs survive: nothing — a smuggled
    `data-secret`, a public fact's free-text `subject`/`value`, a wrapper's
    `title`, leaky root metadata, or the full topic's `sig`/`kid` — can ride along
    in an attribute, even though the full topic's signature is valid) /
    `metadata` (deny-by-default allow-list: `id`/`type`/timestamps only — NOT the
    human `path`, which leaks; the opaque id is the handle).
  - `@byterover/skill-runtime`: a signed **disclosure manifest** binding
    `{ fullTopicHash, layerHash, layer, policyVersion, redactionAlgorithm,
sourcePath, sourceTopicId }` (proves a layer faithfully derives from a specific
    full topic), and the `brv space disclose <topic> --layer
full|redacted|metadata [--manifest]` command.

- fab5f70: Add `brv space identity`: each space now has a TOFU Ed25519 cryptographic
  identity — a fingerprint (base64url SHA-256 of the SPKI DER), public key, and
  RFC 7638 JWK thumbprint — generated on first use and persisted as a sibling of
  `context-tree/` so the **private key never syncs to the cloud**. Custody is
  hybrid: a `0600` plaintext PEM by default, or AES-256-GCM encrypted when
  `BRV_KEY_PASSPHRASE` is set. Phase 2 of the cross-agent identity +
  selective-disclosure design; consumes `@byterover/signing`.
- 72504b8: Phase 3 — topic signing. Topics are now signed on write with the space's
  Ed25519 key (when an identity exists) and verifiable via
  `brv space verify <topic-path>`.
  - `@byterover/core` gains a crypto-free **`signer` seam** on the writer
    (`HtmlWriteOptions.signer` / the `TopicSigner` type): when provided, the writer
    hashes the stamped topic, calls the injected signer, and stamps `sig`/`kid`
    before the single atomic write. `sig`/`kid` are added to the canonical-hash
    exclusion set, so signing never perturbs diff/dedup — **no `CANON_VERSION`
    bump** (a no-op on legacy topics).
  - `@byterover/skill-runtime` auto-signs in `record` (fail-open: unsigned if the
    space has no identity), adds the `space verify` command, and ships
    `verifyHtmlTopic`. Consumes `@byterover/signing` + the Phase 2 space identity.

### Patch Changes

- b8653e5: Add an atomic active-team registry projection helper.
- c4b6a2a: Phase 5 S1 foundation — server-side selective-disclosure enforcement primitives.
  - New **`@byterover/disclosure`** package over `{core, signing}`: hosts
    `verifyHtmlTopic` (the single source, now shared with the backend) and
    re-exports core's `materializeLayer` (the single redaction-allow-list source).
  - **`@byterover/auth`**: a per-membership `disclosureLayer` enum claim
    (`full` | `redacted` | `metadata`), **fail-closed** — optional with no default,
    so an absent layer is treated as the most-private (`metadata`) by the
    authorizer, never `full`.
  - **`@byterover/skill-runtime`**: re-exports `verifyHtmlTopic` from
    `@byterover/disclosure` (back-compat; same behavior).

- 689f4ac: Harden the selective-disclosure redaction transform against a full-layer insider
  who can write + sign topic bytes. A topic's signature authenticates the FULL
  bytes; it does NOT certify that a down-projection is a sound subset, so
  `materializeLayer` is what must enforce the subset. Three soundness gaps closed
  (`POLICY_VERSION`/`REDACTION_ALGORITHM` bumped to `v2`):
  - **Attribute VALUE validation (`@byterover/core`).** A deny-by-default allow-list
    of attribute _names_ let allow-listed attributes pass arbitrary author-controlled
    _values_ to a redacted reader (`<bv-fact category="SECRET">`,
    `<bv-bug id="SECRET">`). Every kept attribute is now validated fail-closed:
    closed enums for `disclosure`/`category`/`severity`/`type`/`visibility`; the
    opaque `tpc_…+32hex` topic-id pattern for `id` (author cross-ref handles never
    match and are dropped); strict ISO-8601 for `createdat`/`updatedat`. New export
    `TOPIC_ID_REGEX`.
  - **`visibility` default is fail-closed.** `visibility` is excluded from the signed
    canonical hash, so honoring it as the per-fact disclosure default let a full-layer
    author append `visibility="public"` to an already-signed topic (verification still
    passes) and silently disclose every UNMARKED fact. The served projection no longer
    consults the `visibility` default — a fact discloses ONLY by its own
    `disclosure="public"`. **Semantic change:** a "public topic" no longer
    auto-discloses unmarked facts; authors must mark each disclosable fact
    `disclosure="public"` explicitly.
  - **Non-fact text is public-by-contract.** Made explicit (docs + tests):
    `<bv-fact disclosure>` is the SOLE unit of restriction; the root `title` and all
    non-`<bv-fact>` text are public-by-design and survive into the redacted layer.
    Authors must put secrets in a `<bv-fact disclosure="restricted">`, never in prose
    or the title.
  - **Single authoritative root.** `materializeLayer` now requires exactly one
    top-level `<bv-topic>`, reusing canonical.ts's check (new export `findRootTopic`),
    so the projected root can't diverge from the hashed/signed root via a
    first-of-many or leading-decoy element.
  - **Element allow-list (deny-by-default) — fixes a critical over-disclosure.**
    parse5 parses a raw-text/RCDATA element's content (`<script>`/`<style>`/
    `<noscript>`/`<xmp>`/`<iframe>`/`<textarea>`/`<title>`/…) as an opaque text node
    and reparents foreign content (`<svg>`/`<math>`/`<template>`), so a restricted
    `<bv-fact>` hidden inside one survived redaction as live markup (and `<template>`
    threw in the serializer). The redacted projection now drops any element not on a
    curated safe allow-list (the `<bv-*>` vocabulary + structural/inline prose HTML)
    whole, subtree included.

  `@byterover/disclosure` re-exports `materializeLayer`, so its redacted/metadata
  projections inherit all of the above.

- e850c70: Fix a topic-signature verification desync where a leading HTML comment could
  flip a genuinely-valid signed topic to `invalid-sig` (an integrity/availability
  DoS on its redacted view).

  `verifyHtmlTopic` read `sig`/`kid` with a byte-level scanner that does not
  understand HTML comments, while `canonicalTopicHash` parses with parse5 (which
  drops comments). A space member who can write a topic's bytes could prepend a
  decoy such as `<!-- <bv-topic sig="forged" kid="x"> -->` before the real
  `<bv-topic>`: the scanner read the commented `sig`/`kid` while parse5 hashed the
  real topic, so verification failed and the redacted projection denied the topic
  (404). It is **fail-closed** — it never leaks and cannot forge a passing
  signature (that needs the space private key) — but it is a real robustness bug
  in the trust path.
  - `@byterover/core`: new **`readCanonicalRootAttribute(html, name)`** — reads a
    root attribute off the SAME parse5 element `canonicalTopicHash` hashes, so the
    attribute and the hashed content can never disagree about which `<bv-topic>`
    is authoritative (immune to standard `<!-- -->` and bogus `<! >` comments).
    Also hardens the shared `readTopicRootAttribute` byte scanner — used by the
    id / snapshot / writer-surgery paths — to skip `<!-- -->` comments so it
    agrees with parse5's comment-dropping view.
  - `@byterover/disclosure`: `verifyHtmlTopic` now reads `sig`/`kid` via
    `readCanonicalRootAttribute`, binding the verified attributes and the hashed
    content to the one authoritative root.

## 0.4.0

### Minor Changes

- 8e241bb: Forward-compat: roles are now an open set on the wire. The daemon no longer
  invalidates a mint response or file-sync JWT because the server introduced a
  role it doesn't know (e.g. the upcoming VIEWER) — behavior derives exclusively
  from `scopes` + `sync_state`, which is unchanged. Blank/non-string roles are
  still rejected. Also adds a daemon-level test that an unfamiliar read-only
  role's space constructs AND starts its sync engine in pull-only mode
  (engine-level push suppression was already covered in @byterover/sync).
- 8658d09: Non-blocking device-code auth: `auth.mjs` returns immediately with the
  verification URL + code while a detached background poller waits for browser
  approval; the new `auth.mjs status` confirms with one live token poll.
  Re-running `auth.mjs` reuses a still-fresh pending code. The blocking flow
  remains as `auth.mjs --wait`; `--key-file` / API-key paths are unchanged.

### Patch Changes

- 1843bba: Harden the pending device flow against credential races: logout, API-key
  auth (before validation, even if it fails), and a fresh `--wait` flow now
  abort any pending browser flow, so a late approval can never re-authenticate
  after cancellation. The background poller and `auth.mjs status` both
  re-verify flow ownership after an approved poll before writing the session.
  Shipped docs (sync.md, troubleshooting.md) updated to the non-blocking
  auth choreography.

## 0.3.0

### Minor Changes

Space lifecycle moves to the cloud-authoritative model. The backend
owns space identity; the desktop materializes it on disk; the agent
just operates on what's already there. Three verbs change shape to
match.

- **`move` is now a cross-space transfer.** The previous semantics
  (intra-space rename + reconciler-aware ref rewriting) didn't match
  the product intent — topics should be able to live in a different
  space than the one they were authored in. New shape:

  ```
  move <topic-path> --from-space <name-or-id> --to-space <name-or-id>
                                              [--overwrite]
  ```

  Both flags are required; same-space rejected. The response carries
  a `dangling_refs[]` list of sibling topics in the source space whose
  `related="@..."` references no longer resolve (cross-space refs are
  not supported by design). Manifest + index regenerate in BOTH spaces.

- **`space create` removed.** Spaces are provisioned in the desktop
  via the cloud API; the agent never mints one. A `create` invocation
  falls through to the unknown-subcommand handler. Agents that
  surface a "create a space for this" request should hand it off to
  the user.

- **`init` removed.** Default-space bootstrap is the backend's job at
  signup; the desktop materializes it on disk. Project history
  registration moves to the desktop. The agent surface has no verb
  that creates state — it operates on a tree the desktop already set
  up, period.

### Other changes

- **`sync` docs split by host.** Desktop-paired hosts continue to read
  status only; the desktop manages start / stop / auth. Headless
  hosts (VPS, server, CI runner) get explicit guidance that the agent
  owns the daemon lifecycle (`sync.mjs start / status / stop`). No
  CLI surface change — the verbs already existed; the docs just
  weren't pointing at them for the headless case.

### Breaking changes summary

| Verb                                       | 0.2.0                     | 0.3.0                                            |
| ------------------------------------------ | ------------------------- | ------------------------------------------------ |
| `move <from> <to>`                         | intra-space rename        | **removed** — replaced by cross-space form below |
| `move <topic> --from-space X --to-space Y` | n/a                       | cross-space transfer (new)                       |
| `space create <name>`                      | mints a new space locally | **removed** — unknown subcommand                 |
| `init [dir]`, `init --space <name>`        | bootstrap + marker        | **removed** — unknown command                    |

Agents pinned at a specific skill version: no migration is needed
in agent code, but prompts that name these verbs (`init`,
`space create`, intra-space rename via `move`) won't work against
0.3.0+ and should be updated.

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
