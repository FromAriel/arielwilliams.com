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
- [x] Commit and push `agent/refresh-codex-usage` at `04576aa1c88f09b2c4686d1406f559d579ecdf34`.
- [x] Open draft pull request `#1` to `main`.
- [x] Confirm PR #1 merged at `8223d8882278c962e79ba2a363c291a1ce3a9298` (local history verified October 19).
- [ ] Confirm the production Pages deployment separately; the merge alone does not establish live acceptance.

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

## Local presentation snapshots — 2026-10-19

- [x] Confirm the current source revision and all twelve numbered footer paths; exclude the inserted video.
- [x] Capture and visually inspect twelve complete 1920 × 1080 PNG snapshots.
- [x] Create twelve exact-case footer pages with expanded transcripts and no JavaScript dependency.
- [x] Include native table contents, image-based assessment labels, the quoted post, and application screenshot text.
- [x] Add previous/next navigation, a current-page-marked all-slide list, source links, and full-resolution image links.
- [x] Add shared responsive, keyboard-focus, overflow-table, and print styles.
- [x] Complete static HTML, case-sensitive references, navigation, transcript coverage, PNG integrity, and whitespace checks (12 pages; 308 local references; 122 native text objects; 51 image-text entries).
- [x] Record final checks and image hashes in the research snapshot note.
- [ ] Perform authorized browser-based responsive, keyboard, and print acceptance.
- [x] Obtain separate publication authorization before any Git write or deployment (Ariel's October 19 follow-up).

## Presentation publication — 2026-10-19

- [x] Verify remote main still matches the local baseline and rerun snapshot static checks.
- [x] Confirm GitHub Pages main/root source, canonical domain, and HTTPS enforcement.
- [ ] Commit and push only the prepared snapshot bundle and intended documentation.
- [ ] Confirm GitHub Pages deployment for the publication commit.
- [ ] Verify all twelve public HTML pages, twelve PNGs, and the shared stylesheet.
- [ ] Verify apex-to-www behavior and a normal public browser load.
- [ ] Record exact publication commit and deployment evidence.
