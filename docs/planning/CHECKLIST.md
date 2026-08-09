# Ariel Williams website checklist

This checklist implements `PLAN.md`. A checked item means current evidence exists; it does not imply later DNS or release gates are complete.

## Repository bootstrap

- [x] Confirm GitHub CLI authentication as `FromAriel`.
- [x] Confirm `FromAriel/arielwilliams.com` does not already exist.
- [x] Pin production source commit `245ac078195304c5bf18c93c36abc5eafd77acba`.
- [x] Copy the current production site files into a new repository root.
- [x] Add root `AGENTS.md`.
- [x] Add `PLAN.md`, `CHECKLIST.md`, and the research entry point.
- [x] Add the intended `CNAME` value, `www.arielwilliams.com`.
- [x] Verify copied source parity and static integrity checks.
- [x] Initialize the local Git repository on `main`.
- [x] Review the complete initial diff and staged scope.
- [x] Create the public GitHub repository.
- [x] Commit and push the initial `main` branch.

## GitHub Pages

- [x] Enable Pages from `main` and `/ (root)`.
- [x] Confirm the Pages build reaches `built` status.
- [x] Confirm the default project Pages URL redirects to the custom hostname and validate the forced GitHub origin response.
- [x] Attach `www.arielwilliams.com` as the GitHub custom domain.
- [x] Record current baseline Pages build `1141068199` and deployment commit `3f4ba62cd79a758f249247997b77de21fe15aab6`.
- [x] Confirm during bootstrap that the existing Squarespace forwarding rule still served the prior site.

## Codex usage refresh — 2026-08-09

- [x] Audit the local `Get-CodexUsage.ps1` and pin SHA-256 `87E79065BF95248518D3A565CAB280908E13973B5A2E56AA299FA56381CE899B`.
- [x] Retrieve the authenticated account response through August 9 for diagnostics.
- [x] Select August 8 as the stable completed-day publication cutoff.
- [x] Preserve exact integer token counts for 332 returned daily buckets.
- [x] Represent 12 dates without a returned bucket as `null`, not zero.
- [x] Extend the calendar from 317 to 344 days and add 27 dates.
- [x] Update derived summary, accessible table, tooltip semantics, legend, and static HTML fallbacks.
- [x] Document retrieval, transformation, historical corrections, and privacy boundaries.
- [x] Run the complete data, JavaScript, HTML, reference, and whitespace validation suite.
- [x] Review the exact diff and confirm no raw account response or sensitive data is staged.
- [ ] Commit and push `agent/refresh-codex-usage`.
- [ ] Open a draft pull request to `main`.
- [ ] Merge after review and confirm the production Pages deployment.

## Squarespace DNS cutover and acceptance

- [x] Capture the final pre-change forwarding and DNS records.
- [x] Preserve `_domainconnect` and the Google verification CNAME.
- [x] Remove the Squarespace Domain Forwarding rule/preset.
- [x] Remove any restored or remaining conflicting Squarespace apex/`www` records.
- [x] Add `CNAME www -> fromariel.github.io`.
- [x] Add the four GitHub Pages apex `A` records.
- [ ] Optionally add GitHub Pages `AAAA` records.
- [x] Verify public DNS resolution through Google and Cloudflare resolvers.
- [x] Verify `arielwilliams.com` redirects to `www.arielwilliams.com` over HTTP.
- [x] Verify `www.arielwilliams.com` remains the final HTTP address.
- [ ] Enable and verify GitHub Pages HTTPS.
- [ ] Verify production assets and primary interactions.
- [ ] Run an explicitly authorized Formspree test submission.

## Deferred quality work

- [x] Document Codex activity data provenance and refresh procedure.
- [x] Decide whether the activity end date should be refreshed.
- [ ] Review public credential wording and outbound links.
- [ ] Align privacy wording with Formspree data handling.
- [ ] Add repeatable HTML, link, accessibility, and responsive-release checks.
