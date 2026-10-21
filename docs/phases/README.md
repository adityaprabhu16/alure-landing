# Alure site feedback phases

Work these files one session at a time. Each file is the contract for that session. Do not implement the Oct 17 feedback document in one pass, and do not pull work from a later phase into an earlier one.

Source notes live in `Alure Website Feedback Breakdown, Verdicts, Cursor Prompts.md` at the repo root. [phase-0-code-map.md](phase-0-code-map.md) is the code check of those notes. When a prompt in the source doc disagrees with phase 0, follow phase 0.

## Order

| Phase | File | Priority | Start when |
| --- | --- | --- | --- |
| 0 | [phase-0-code-map.md](phase-0-code-map.md) | Context | Already written. Read it. Do not edit site code from it. |
| 1 | [phase-1-mobile-map.md](phase-1-mobile-map.md) | P0 | After reading phase 0. No dependency on later phases. |
| 2 | [phase-2-contact.md](phase-2-contact.md) | P0 | Done. Inquiries are sheet rows categorized as `Source: inquiry`. No email sender. |
| 3 | [phase-3-hero.md](phase-3-hero.md) | P1 | After phase 2, so the hero reuses the contact submit path instead of inventing a second one. |
| 4 | [phase-4-squish.md](phase-4-squish.md) | P3 | After phase 3. The signup form has to exist first. Safe to skip until the rest ships. |
| 5 | [phase-5-how-it-works.md](phase-5-how-it-works.md) | P1 | After phase 3, so Home section order is stable. |
| 6 | [phase-6-news-and-social.md](phase-6-news-and-social.md) | P2 | After phase 5. |
| 7 | [phase-7-demo.md](phase-7-demo.md) | P2 | Claims list can be drafted any time after phase 0. Photo swap and copy edits wait on new images and a review of that list. |
| 8 | [phase-8-polish.md](phase-8-polish.md) | P2 | After phases 1 and 6, so the legend and the cards are not restyled twice. |
| 9 | [phase-9-qa.md](phase-9-qa.md) | QA | After the phases you intend to ship. Fix only high-severity findings. |

Phases 1 and 2 do not depend on each other. Phase 7's inventory does not depend on phases 3–6. Phases 4, 6, and 8 stay behind the dependencies in the table.

## Session rule

Open one phase file. Change only the files it lists. Stop at its acceptance checks. Leave a short note at the bottom of that phase file under `Session log` with the date, what changed, and anything still blocked.
