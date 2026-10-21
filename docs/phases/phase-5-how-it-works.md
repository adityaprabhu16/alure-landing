# Phase 5: How Alure works, and the press heading

Priority: P1. Feedback note 5, adapted.

Depends on: phase 3, so the hero is finished and Home order can change under it. Do not edit Demo copy in this phase. Claims review is phase 7.

## Goal

A first-time visitor sees a short explanation between the hero and the press clips. The press block stops calling 2024 articles "Latest News."

## Read first

- `portfolio-app/src/routes/Home.js` (current order: hero, `News`, `Work`, footer)
- `portfolio-app/src/components/News.js` (heading and the four 2024 cards)
- `portfolio-app/src/routes/News.js` (page hero repeats `Latest News & Updates`)
- `portfolio-app/src/routes/Demo.js` (source wording only)

## Code facts

Home currently goes from the email prompt straight into press. There is no product section on Home.

`News.js` is mounted on Home and on `/news`, so a heading change in that component shows up in both places. The News route also has its own hero in `routes/News.js` with the same heading. Change both so the page does not disagree with itself.

Demo copy to borrow from, and not to strengthen:

- Attract / land idea: "Bait and Kill surfaces" and "baits the bugs and kills them on contact."
- Do not import the `$1,000` line, "harmful pesticides," "kill pollinators," "safe for humans," or any timing ("this summer").
- Step 3 should stay at the strength of the existing Demo sentence about contact kill. Do not add efficacy numbers.

Use `portfolio-app/src/assets/beetle_samples.png` if a product image is needed. It is already on Demo. Alt text should describe the device, not repeat a safety claim.

## In scope

1. Add a `HowItWorks` section and render it on Home after `HeroImg` and before `News`.
2. Heading: `How Alure works`. Three steps in a row, stacked under 768px:
   - `1. Attract` — a dual lure draws Japanese beetles to the net.
   - `2. Land` — beetles settle on the treated netting.
   - `3. Eliminate` — the existing Demo contact-kill wording, nothing stronger.
3. One lazy-loaded product image with alt text, and a text link `See the full demo` to `/demo`.
4. Whole section under about 90 words. Do not paste the Demo page.
5. In `News.js`, change the heading from `Latest News & Updates` to `In the press`. Change the subline from `Stay informed about our progress, field trials, and industry recognition` to `Coverage of Alure and our Minnesota field trials.` Dates stay off the card face until that card is opened. Do not put them back on the closed card.
6. In `routes/News.js`, change the page hero heading and text so they match `In the press` instead of repeating "Latest News & Updates."
7. Press thumbnails: consistent aspect ratio and `object-fit: cover`. If the outlet name is already in the title, a small outlet label is optional. Do not redraw the screenshots.

Use existing spacing, `.gradient-text`, and the dark background. No new dependency.

## Out of scope

- Hero and `NewsletterForm`.
- Removing or moving `Work` (phase 6). Home will still show blog cards under the press block until then.
- Any edit to `Demo.js` copy or media.
- Inventing newer press items.
- Card alignment and justified text (phase 8).

## Files you may change

- `portfolio-app/src/routes/Home.js`
- `portfolio-app/src/components/News.js`
- `portfolio-app/src/components/NewsStyles.css`
- `portfolio-app/src/routes/News.js`
- New `portfolio-app/src/components/HowItWorks.js` and `HowItWorksStyles.css`

## Acceptance

- Home order is hero, How Alure works, In the press, then the existing blog block and footer.
- The new section is readable and stacked at 375px.
- The image does not shift layout when it loads (width, height, or aspect-ratio set).
- `/news` hero and the press section heading agree.
- Demo page text is unchanged.
- Section body is under about 90 words and contains none of the banned claims listed above.

## Session log

- Date: Oct 20, 2026
- Changed: Added `HowItWorks` on Home between the hero and the press block. Renamed the press heading and the `/news` hero to "In the press." Press thumbnails use a fixed aspect ratio and `object-fit: cover`. Dates stay hidden until a card is opened. Demo copy was not edited. The section body is 38 words.
- Still blocked: Nothing in this phase.
