# Phase 3: Hero newsletter row

Priority: P1. Feedback notes 1, 2, 3, and 4.

Depends on: phase 2 unblocked work. The hero must reuse the submit path phase 2 left in place. Do not add a newsletter vendor.

## Goal

The home hero has one primary action: an email field and a filled Join Newsletter button. Learn More is gone. The subline no longer says LLC. The wordmark has no period.

## Read first

- `portfolio-app/src/components/HeroImg.js`
- `portfolio-app/src/components/HeroImgStyles.css` (the subline is uppercased in CSS)
- `portfolio-app/src/components/Navbar.js` (wordmark)
- `portfolio-app/src/components/Form.js` (existing POST)
- `portfolio-app/src/components/NavbarStyles.css` (`.btn` gradient)

## Code facts

- Learn More is `<Link to="/demo" className="btn">`. Join Newsletter is `<Link to="/contact" className="btn-light">`. Neither submits an email.
- There is no newsletter provider in `package.json`. Subscribers today are whatever the Google Apps Script stores when someone completes `/contact`.
- The subline `Follow Alure LLC for more.` is the only product sentence in the hero. `.hero .content p` sets `text-transform: uppercase`, so write the new sentence in normal case and let CSS uppercase it.
- The logo period is the characters `Alure.` in `Navbar.js`, beside `beetle.png`. Do not edit the image.
- Footer and copyright keep "Alure LLC".
- Headline stays `Eliminate Japanese Beetles.` including the period. Background stays the vineyard video and the dark overlay.

## In scope

1. Remove the Learn More link from the hero. Demo remains in the nav.
2. Add a `NewsletterForm` used by the hero: one row, email input and a submit button of equal height, vertically aligned. Under 640px they stack full width. The button uses the existing `.btn` class (the filled gradient), not a copied gradient.
3. The input has a visible label (visually hidden is fine), placeholder `Enter your email`, a border that meets 3:1 against the hero overlay, and the lime focus ring from phase 2.
4. States: invalid email inline, submitting (button disabled), success replaces the row with "You're in. Watch your inbox for field updates.", error keeps the typed email. Status uses `aria-live`.
5. Submit through the same Apps Script path as `Form.js`. Prefer one shared helper so the script URL is not pasted into a second file. Set `source` to `Newsletter` and the stored subject to `Newsletter: Newsletter signup`, matching the contact sheet categories. Do not show name, subject, or message fields in the hero. If a test POST shows the script rejects a payload without name or message, stop and record that in the session log instead of inventing fields the visitor never sees. Do not add an email sender.
6. Replace the subline with `Hands-free Japanese beetle control. Get field updates and launch news.` No `LLC`. No extra trailing period.
7. Under the form, a quiet text link: `Growers: request a pilot` to `/contact` (the form id from phase 2 if it exists).
8. Change the wordmark text from `Alure.` to `Alure`.

There is no analytics module in the repo. Do not add one, and do not fire a `newsletter_signup` event.

## Out of scope

- The squish animation (phase 4).
- How Alure works, press, and blog sections.
- Demo page copy, including its separate Join Newsletter button.
- The first-visit `BeetleAnimation` overlay.
- A new email or newsletter vendor.

## Files you may change

- `portfolio-app/src/components/HeroImg.js`
- `portfolio-app/src/components/HeroImgStyles.css`
- `portfolio-app/src/components/Navbar.js`
- `portfolio-app/src/components/Form.js` only to share the existing submit helper
- New files: `portfolio-app/src/components/NewsletterForm.js` and a small CSS file next to it

## Acceptance

At desktop width and at 375px:

- Hero shows headline, the new subline, one email-and-button row, and the grower link.
- Learn More does not appear on Home.
- Button and input align on one row at desktop and stack on a narrow screen.
- A valid email follows the existing script path and then shows the success sentence.
- An invalid email does not submit.
- The nav wordmark reads `Alure` with no period. Footer still says Alure LLC.
- Overlay contrast on the headline stays readable (the overlay is `opacity: 0.8` black in `HeroImgStyles.css`). Do not lighten it enough to drop the white text below 4.5:1.

## Session log

- Date: 2026-10-20
- Changed: Hero uses NewsletterForm. Learn More is gone. Subline no longer says LLC. Wordmark is Alure with no period. Signup posts through submitInquiry with source Newsletter.
- Still blocked: Nothing in this phase.
