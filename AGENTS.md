# Repository agent instructions

Ariel has dysgraphia and may transpose letters, especially across hand changes, or unintentionally insert synonyms and homonyms. Interpret likely intent carefully and confirm only when an ambiguity would materially change the result.

## Planning authority

- `docs/planning/PLAN.md` is the primary planning reference and source of truth.
- `docs/planning/CHECKLIST.md` is the stepwise execution companion to `PLAN.md`.
- Phase-specific planning documents under `docs/planning/` may refine the active slice but never replace `PLAN.md`.
- The current source audit lives under `docs/research/`; begin with `docs/research/README.md`.
- Keep this `AGENTS.md` at the repository root.
- Update `PLAN.md` and `CHECKLIST.md` after each implementation turn, including ad-hoc edits.

## Critical safety rules

- Zeroth Rule: If an edit deletes, corrupts, or severely damages a file, stop immediately, report what happened and what was being done, and offer restoration from a backup, selective reconstruction, or user direction.
- Before modifying any existing file, create a `.bak` copy using the environment's standard file-copy operation. Increment the suffix when necessary.
- Prefer `apply_patch` for small and moderate manual edits.
- Keep patches and shell payloads comfortably below command-size limits. Split large work into small patches or a focused file-backed/script-backed operation.
- A short, deterministic script may be used for a broad mechanical change when it is safer and less noisy than many manual patches.
- Generated files and tool-managed outputs do not require pre-edit backups.
- At the end of a successful edit turn, safely remove temporary `.bak` files. If safe deletion is unavailable, move them into a root `.bak` directory.

## Editing and validation

- Read `PLAN.md`, `CHECKLIST.md`, and the relevant research material before implementation.
- Keep approved work narrowly scoped and preserve explicit review gates.
- After code edits, run appropriate format, lint, syntax, accessibility, and deployment checks. Scope checks to edited paths where practical.
- After checks pass, run the production/release build when the project has one. This site is currently a zero-build static bundle, so the committed source is the release artifact.
- Docs-only and inquiry-only turns may skip code checks.
- If a check fails, diagnose and fix it, then rerun until clean or report the honest blocker.
- Do not start or serve the full site unless the user explicitly authorizes it.
- File locks can be transient. Diagnose ownership and liveness; use bounded retries only when evidence supports them.

## Git and publishing

- Git is read-only by default: status, diff, log, and show.
- Do not pull, push, reset, restore, or rewrite history unless Ariel specifically authorizes the operation.
- Never use destructive Git commands such as `git reset --hard` or `git checkout --` without explicit authorization.
- Stage only intended files and keep commits focused.
- Record the exact deployed source, commit, validation evidence, and domain state in the planning documents.

## Coding and design conventions

- Favor modularity, clear separation of concerns, and small focused functions/modules.
- Preserve progressive enhancement, keyboard access, reduced-motion behavior, and privacy boundaries.
- Add future placeholders only when they are part of the approved plan, and label them with focused TODOs.
- Comment only where necessary.
- Avoid unexplained magic numbers. Prefer structured sidecar configuration for tunable values; otherwise use descriptive scoped constants with units/ranges and rationale.
- Refactor before a file becomes an unmanageable god class (roughly 3,000 or more lines).
- Follow deterministic, reproducible formatting and outputs.
- Treat public claims, contact details, form destinations, canonical URLs, DNS values, and deployment provenance as release-sensitive data.

Repository-local instructions take precedence over general defaults when they conflict.
