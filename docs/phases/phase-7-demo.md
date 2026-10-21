# Phase 7: Demo claims list and photos

Priority: P2 for photos (feedback note 10). The claims list is higher stakes than the photos and can be written any time after phase 0.

Depends on: nothing structural. Do not wait on phases 3–6 to write the list. Do not change wording in the same session that produces the list.

## Goal

This session produces a claims table and stops. Photo replacement waits until image files are in the repo. Copy changes wait until someone reviews the table. This file is not legal advice.

## Read first

Search the app for: `$1,000`, `harmful`, `pollinator`, `eco-friendly`, `environmentally safe`, `safe for`, `pesticide`, `kills them`, `efficacy`. Start from the rows below and add anything the search finds. Record file and line.

## Starter list (verify lines; do not edit yet)

| Claim | File |
| --- | --- |
| costing the average vineyard, orchard, or commercial grower over $1,000 an acre | `portfolio-app/src/routes/Demo.js` |
| the only way to manage them is through harmful pestcides that kill pollinators and sterilize the environment | `portfolio-app/src/routes/Demo.js` |
| baits the bugs and kills them on contact | `portfolio-app/src/routes/Demo.js` |
| The product is safe for humans and pet | `portfolio-app/src/routes/Demo.js` |
| Same bait-and-kill and "safe for humans and pet" paragraph | `portfolio-app/src/components/Info.js` (imported only by unrouted `routes/Project.js`) |
| eco-friendly in titles and excerpts, including "environmentally safe" | `portfolio-app/src/components/News.js` |
| eco-friendly approach | `portfolio-app/src/components/BlogContent.js` |
| attracts the bugs and kills them on contact | `portfolio-app/src/components/Footer.js` |

Press excerpts quote coverage. Note that in the table so a reviewer can tell original site copy from a quoted headline. Do not rewrite quotes in this phase.

## In scope this session

1. Finish the table: claim, file, line, and whether it is original copy or a press excerpt.
2. Add a TODO comment next to the `$1,000` figure in `Demo.js` asking for a source and confirming the unit (the sentence already says "an acre"; the TODO should ask whether that unit is the one to stand behind). Do not otherwise change the sentence.
3. Write the finished table into the session log below.

That comment is the only code edit allowed this session.

## Photo swap (later session, after files exist)

Demo is not a four-image gallery. `Demo.js` renders `portfolio-app/src/assets/beetle_samples.png` plus `portfolio-app/src/assets/demos/AlureDemo.mov` and `AlureRender.mov`.

When new stills are added under `portfolio-app/src/assets/`:

- Keep the rounded image treatment already on the product image.
- One aspect ratio, `object-fit: cover`, lazy-load below the fold.
- Meaningful alt text. Optional caption field for location and date, left empty until provided.
- Keep two or three beetle-on-net shots only if those files are actually supplied. Do not invent replacements.
- Do not redesign the page. Do not swap the videos unless those files are also provided.

If the image folder is empty of new files, skip this section and say so in the session log.

## Copy edits (a later session, after review)

Do not change claim wording until the table has been reviewed outside this repo. When that review comes back, edit only the lines it approves, and keep Demo and any Home "How Alure works" text from phase 5 in agreement. Phase 5 was told not to strengthen Demo's claims; if Demo is softened later, update How Alure works in that same session so the two pages do not diverge.

## Out of scope

- Layout redesign of Demo.
- New marketing claims, numbers, or timings.
- Deleting `Info.js` or wiring `Project.js` into the router.
- Hero, map, contact, and the social strip.

## Files you may change this session

- `portfolio-app/src/routes/Demo.js` for the single TODO comment
- This file's session log, for the table

## Acceptance

- The session log contains the claims table with line numbers.
- The only product-code diff is the `$1,000` TODO comment.
- No photo paths changed unless new image files were already in the repo at the start of the session.

## Session log

- Date: 2026-10-20
- Claims table: This file is not legal advice. "Original" means site copy. "Press headline" or "Press excerpt" means the News cards, which quote or paraphrase coverage and link out. Do not rewrite those quotes from this table.

| Claim | File | Line | Kind |
| --- | --- | --- | --- |
| costing the average vineyard, orchard, or commercial grower over $1,000 an acre to manage | `portfolio-app/src/routes/Demo.js` | 23 | Original. TODO on this figure asks for a source and whether "an acre" is the unit to stand behind. |
| the only way to manage them is through harmful pestcides that kill pollinators and sterilize the environment | `portfolio-app/src/routes/Demo.js` | 23 | Original. Spelling in the source is "pestcides". |
| pouring harmful pesticides … endangering both pollinators and the health of your produce | `portfolio-app/src/routes/Demo.js` | 28 | Original |
| baits the bugs and kills them on contact | `portfolio-app/src/routes/Demo.js` | 28 | Original |
| The product is safe for humans and pet | `portfolio-app/src/routes/Demo.js` | 28 | Original |
| Same $1,000 an acre sentence as Demo | `portfolio-app/src/components/Info.js` | 9 | Original duplicate. Imported only by unrouted `routes/Project.js`. |
| Same "only way … harmful pestcides … pollinators" sentence as Demo | `portfolio-app/src/components/Info.js` | 9 | Original duplicate. Unrouted. |
| Same harmful-pesticides / pollinators sentence as Demo | `portfolio-app/src/components/Info.js` | 14 | Original duplicate. Unrouted. |
| Same "baits the bugs and kills them on contact" sentence as Demo | `portfolio-app/src/components/Info.js` | 14 | Original duplicate. Unrouted. |
| Same "safe for humans and pet" sentence as Demo | `portfolio-app/src/components/Info.js` | 14 | Original duplicate. Unrouted. |
| The surface baits the bugs and kills them on contact. | `portfolio-app/src/components/HowItWorks.js` | 17 | Original. Home "How Alure works" step 3. Keep this in agreement with Demo if Demo is softened later. |
| attracts the bugs and kills them on contact | `portfolio-app/src/components/Footer.js` | 33 | Original |
| hands-free, eco-friendly Japanese beetle prevention product | `portfolio-app/src/components/News.js` | 8 | Press headline (KSTP) |
| hands-free, eco-friendly solution to the invasive Japanese beetles | `portfolio-app/src/components/News.js` | 9 | Press excerpt |
| eco-friendly solution | `portfolio-app/src/components/News.js` | 16 | Press headline (University of Minnesota CSE) |
| environmentally safe | `portfolio-app/src/components/News.js` | 17 | Press excerpt |
| eco-friendly approach to pest management | `portfolio-app/src/components/News.js` | 25 | Press excerpt (Morning Ag Clips card) |
| Thousands of $'s spent on harmful spray. | `portfolio-app/src/components/BlogContent.js` | 22 | Original blog post `newsletter-april-recap` |
| a 90% kill rate under one minute, and a 30-foot range | `portfolio-app/src/components/BlogContent.js` | 30 | Original blog post. Same post as the efficacy line below; the search term `efficacy` did not hit this line, and the number is listed so it is not missed in review. |
| high-efficacy, passive, non-toxic beetle control | `portfolio-app/src/components/BlogContent.js` | 37 | Original blog post |
| no gimmicks, no pesticides, no maintenance | `portfolio-app/src/components/BlogContent.js` | 43 | Original blog post |
| featured for its effective and eco-friendly approach | `portfolio-app/src/components/BlogContent.js` | 51 | Original blog copy describing Star Tribune and Poets & Quants coverage, not a quoted headline |
- Photos: Skipped. No new stills were supplied. Demo still uses `beetle_samples.png`, `AlureDemo.mov`, and `AlureRender.mov`.
- Still blocked: Copy edits wait until this table is reviewed outside the repo. Photo replacement waits on new image files.
