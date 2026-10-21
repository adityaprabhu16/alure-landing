# Phase 4: Beetle squish on signup success

Priority: P3. Feedback note 9. Safe to skip until phases 1–3 and 5–8 have shipped.

Depends on: phase 3. `NewsletterForm` must already exist.

## Goal

After a newsletter signup succeeds, a small beetle mark squishes and fades, then the success text shows. Failure shows no animation.

## Read first

- The `NewsletterForm` added in phase 3
- `portfolio-app/src/components/BeetleAnimation.js`
- `portfolio-app/src/components/BeetleAnimationStyles.css`

## Code facts

`BeetleAnimation` is a first-visit overlay on Home: fixed, `z-index: 1000`, about five seconds, `localStorage` key `hasVisitedBefore`. It is not a confirmation. Do not hook the squish to it, and do not change that overlay in this phase.

## In scope

1. Add `SquishBeetle` as an inline SVG in the brand green (`#90ee90` or the existing gradient stops). No image, GIF, video, or animation library.
2. Play it only after the subscribe request resolves successfully. Never on click, and never on error.
3. Motion is scale-Y down with a short bounce, then fade. Total time under 900ms. CSS keyframes or the Web Animations API.
4. `prefers-reduced-motion: reduce` skips the animation and shows the success text immediately.
5. The success sentence from phase 3 always appears. The animation is decoration.
6. Reserve the space so the row does not jump. A failed submit can be retried; the animation must not leave the button disabled.

No sound.

## Out of scope

- Changing signup request logic, copy, or the hero layout beyond the reserved animation slot.
- `BeetleAnimation.js` and its CSS.
- Map, contact, news, and demo.

## Files you may change

- `portfolio-app/src/components/NewsletterForm.js` and its CSS
- New `portfolio-app/src/components/SquishBeetle.js` (styles may live in the newsletter CSS)

## Acceptance

- Success: squish plays, then the success sentence is visible.
- Error: no squish, input preserved, submit can be tried again.
- With reduced motion enabled: no squish, success sentence shows immediately.
- Console shows no new warning from the animation.
- Home still shows the first-visit overlay once for a new visitor, unchanged.

## Session log

- Date: 2026-10-20
- Changed: `SquishBeetle` is an inline SVG in the newsletter form. It plays only after `submitInquiry` resolves, for 800ms, then the existing success sentence shows. Reduced motion skips it and shows that sentence immediately. Errors leave the email in place and re-enable the button. The first-visit overlay was not changed.
- Still blocked: Nothing in this phase.
