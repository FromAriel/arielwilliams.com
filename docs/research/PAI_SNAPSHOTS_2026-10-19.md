# Practical AI for Lawyers: fixed slide snapshots

## Source and authorization

Ariel approved twelve local snapshot pages with navigation and expanded text transcripts on October 19, 2026. This slice does not authorize staging, committing, pushing, publication, DNS changes, form submission, serving the full site, or a full-site browser session.

- Source: [It Works - Agentic Coding and Legal Technology](https://docs.google.com/presentation/d/1N2vWBWcmy1jNBpQ5_jMleusjXpyNw0qvdKcksXYPOZQ/edit).
- Presentation ID: `1N2vWBWcmy1jNBpQ5_jMleusjXpyNw0qvdKcksXYPOZQ`.
- Source revision: `sXsOr8_K4IXj-A`.
- Capture/read timestamp: `2026-10-19T13:49:45.530Z` (October 19, 2026 in America/Phoenix).
- Provider modification time at capture: `2026-10-19T07:37:36.378Z`.
- Source structure: thirteen slides; twelve numbered footer URLs and one unnumbered inserted video.
- Source was read once at implementation start; footer numbers and native slide IDs were confirmed against the approved mapping. The deck and video were not edited.
- The fixed snapshots do not track later Google Slides edits; a refresh requires an explicit new capture.

## Capture method

The connector exported the native presentation once to PDF (693,521 bytes; thirteen pages at 960 × 540 points). The supplied slide-render helper assumes Unix paths, Perl, and shell commands; the Windows adaptation downloaded the connector's authenticated file reference and rendered it with the installed Poppler `pdftoppm -png -r 144`.

The twelve selected images are complete, lossless 1920 × 1080 PNGs copied byte-for-byte from that render. Each image was visually inspected. The video at presentation position 2 was excluded. Its source media was not downloaded, and it has no website page. The temporary PDF includes the export's video-page placeholder but is outside the repository.

Poppler reported a source-PDF warning, `Badly formatted number`, at byte 43094. Rendering exited successfully, all thirteen pages were produced, and inspection of the twelve selected pages found no apparent rendering omissions. This is evidence about the exported snapshots, not browser acceptance.

The PDF, extracted embedded images, compact connector-derived source data, generation script, and validation script remain in an operating-system temporary directory outside the public bundle. No raw connector response, expiring download URL, speaker notes, or full-deck PDF is included in the website files.

## Exact page mapping

The website number follows the footer, not presentation position. Capitalization of `PBA/PAI/SlideN.html` is preserved.

| Page | Native slide ID | Presentation position | Title |
|---|---|---:|---|
| [Slide1](../../PBA/PAI/Slide1.html) | `p1` | 1 | IT WORKS: AGENTIC CODING |
| [Slide2](../../PBA/PAI/Slide2.html) | `g3fb5d33b04c_2_2` | 3 | Vibe Coding vs. Agentic Coding |
| [Slide3](../../PBA/PAI/Slide3.html) | `p2` | 4 | Agentic Coding: Defined Roles |
| [Slide4](../../PBA/PAI/Slide4.html) | `p3` | 5 | MatterSignal: The Reference Workflow |
| [Slide5](../../PBA/PAI/Slide5.html) | `p4` | 6 | The Reconstruction Experiment |
| [Slide6](../../PBA/PAI/Slide6.html) | `p5` | 7 | A Working Rebuild from Written Plans |
| [Slide7](../../PBA/PAI/Slide7.html) | `p6` | 8 | Real Functionality, Measured Limits |
| [Slide8](../../PBA/PAI/Slide8.html) | `p7` | 9 | The Next Loop: Direct, Repair, Verify |
| [Slide9](../../PBA/PAI/Slide9.html) | `p8` | 10 | What the Plans Successfully Transferred |
| [Slide10](../../PBA/PAI/Slide10.html) | `p9` | 11 | Verified Document Workflow |
| [Slide11](../../PBA/PAI/Slide11.html) | `p10` | 12 | AI in Build vs. Operation |
| [Slide12](../../PBA/PAI/Slide12.html) | `p11` | 13 | IT WORKS. HOW DO YOU KNOW? |

## Transcripts and page behavior

Native text and table cells were extracted directly, arranged in visual reading order, and checked against the rendered slides. Decorative standalone bullets become semantic lists; multi-line table cells retain their line breaks. Titles remain the page's primary heading. Visible citations and the printed footer address are retained. Speaker notes are excluded.

Image text was manually transcribed from the rendered slides and, for the two application screenshots, from embedded source images extracted from the same PDF:

- Slide 1: presentation-series label.
- Slide 2: the complete pictured Karpathy post, attribution, timestamp, and visible engagement counts.
- Slide 4: reference application's visible workspace, draft, source request, original date, edited date, controls, and safety wording.
- Slide 6: reconstruction application's visible synthetic-workspace notice, intake queue, empty state, controls, and local-storage wording.
- Slide 7: assessment images transcribed into their corresponding table cells: Implemented, Partial, Missing, Incorrect.

Transcripts preserve the source claims and qualifications; they are not independent verification of those claims. Short descriptive headings and screenshot field separators provide reading structure without changing the slide text.

Every page includes a fixed image, expanded HTML transcript, two previous/next navigation regions, twelve-slide navigation with the current page marked, a full-resolution image link, a link to its native Google slide, and a homepage link. Slide 1 has no previous link; Slide 12 has no next link. All content is present in HTML without JavaScript. Images, stylesheet, and favicon use local references. The page wrapper uses system fonts; it loads no remote runtime resources.

## Image integrity

Twelve snapshots total **3,068,086 bytes**. Each file is 1920 × 1080 pixels.

| Image | SHA-256 |
|---|---|
| `PBA/PAI/assets/Slide1.png` | `a2daa08f0ef17fa3c6529a28c1c1fa6e582ee392fb1c8417f21663cb0c903584` |
| `PBA/PAI/assets/Slide2.png` | `e202e2da310a71923123d4aa5c0427dbf171828184bd1d95db6b3eb5135560dc` |
| `PBA/PAI/assets/Slide3.png` | `6207ba48256ae39c2e7d517ef5ec94941e202cedc343b2ad0260b53dfeeee915` |
| `PBA/PAI/assets/Slide4.png` | `4a0c3bebab590317d24e51e2d7ce53f947f6cc3934c4b95799855f5a2208f7c8` |
| `PBA/PAI/assets/Slide5.png` | `72f43ee7f8f7921ef720a3a2f6729c2eedb0b2f896d786e90646616addca5681` |
| `PBA/PAI/assets/Slide6.png` | `ed42eb705776ca9743f790c5b3ac76d2fa327a10bb6369eaf56bfbc79ac7104a` |
| `PBA/PAI/assets/Slide7.png` | `85fe2e4bbf2bb4af636d80afd56b674b3d42377644cfd4492275d5c6e581d8e7` |
| `PBA/PAI/assets/Slide8.png` | `a8722a6ec3a3bf40af1afa1b0fb23ca686100849d6c13f384bc618a04651507b` |
| `PBA/PAI/assets/Slide9.png` | `73f629e2f8b825a8eb96325bba7d7467348676b1eb99ef6d409f387037cdd7cb` |
| `PBA/PAI/assets/Slide10.png` | `29768bd7ce1d803fd4d3037a4b0b565d5266579b801de93968aff9d97be236b7` |
| `PBA/PAI/assets/Slide11.png` | `645dcd31b1b849b72b0d085f155532fa9044f047c34d192da1e334971447cf73` |
| `PBA/PAI/assets/Slide12.png` | `5ef4ad4f2660c6ebdfa38060060e20e2664c2ab7e54cddd6a95102676ced7e20` |

## Validation and remaining gates

Passed local checks:

- Twelve exact-case HTML destinations and twelve correct mapped snapshots; explicit omission of the video and verification of numbering after it.
- PNG decoding/integrity, dimensions, SHA-256, and byte-for-byte equality to the selected PDF renders.
- Balanced HTML tags, unique IDs, one primary heading, language, image alternative text, labeled navigation and table regions, semantic table headers, ARIA references, and exact canonical URLs.
- All 308 local asset/navigation/fragment references resolved with case-sensitive path checks.
- Coverage of all 122 nondecorative native text objects, every native table cell, and 51 manually supplied image-text entries; assessment labels and both table shapes checked separately.
- Source-level review of focus visibility, skip link, responsive layout, wide-table scrolling, and print rules.
- Whitespace checks and final Git diff inspection; only the new pages/assets, planning updates, and research documentation are in scope.

This is a zero-build static release bundle. No dependency installation, compilation, or server is required to prepare it.

**Pending:** browser-based responsive, keyboard, screen-reader, and print acceptance; user review; any Git write or publication. The website homepage, original activity assets, CNAME, and hosting settings remain unchanged. Existing domain/deployment gates have not been closed by this work.

## Subsequent publication authorization — 2026-10-19

After local delivery, Ariel requested that the pages be accessible on the existing arielwilliams.com domain. This supersedes the initial local-only stopping point above and authorizes a focused commit/push, existing Pages deployment, and public verification. The original deck, video, homepage, DNS, and form behavior remain outside this change.

Immediately before publication, `git ls-remote` confirmed remote main at the local baseline `9b2925fbdc305b5ac7f41e1d362eb04331fde4f8`. The Pages API reported `main`, `/`, custom domain `www.arielwilliams.com`, status `built`, and `https_enforced: true`. The complete twelve-page static validation suite passed again. Deployment commit and public evidence will be recorded after publishing.

## Continuity correction

Local history establishes PR #1's August 9 merge at `8223d8882278c962e79ba2a363c291a1ce3a9298`. Local HEAD and cached `origin/main` are `9b2925fbdc305b5ac7f41e1d362eb04331fde4f8`. Planning records now distinguish that completed merge from unresolved production deployment acceptance. No remote fetch or live-domain verification was performed.
