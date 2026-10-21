# Phase 8: Cards, legend, fields, nav

Priority: P2 polish. Do this after the map and the cards have settled, so those files are not restyled twice.

Depends on: phase 1 (map layout and stacking) and phase 6 (blog cards live on `/news`, social cards exist). If phase 4 has not shipped, leave the squish alone.

## Goal

Cards line up, the density legend is readable without a red-green scale, form fields share one visible style, and the nav shows where you are.

## Read first

- `portfolio-app/src/components/WorkCard.js`
- `portfolio-app/src/components/WorkCardStyles.css` (`text-align: justify`, `align-items: center`, image heights set twice)
- `portfolio-app/src/components/NewsStyles.css`
- `portfolio-app/src/routes/Map.js` (`HeatMapLayer` gradient and the legend markup)
- `portfolio-app/src/components/MapStyles.css` (legend rules touched in phase 1)
- `portfolio-app/src/components/FormStyles.css`
- `portfolio-app/src/components/Navbar.js`
- `portfolio-app/src/components/NavbarStyles.css` (`.btn` gradient)

## In scope

1. Blog cards (`WorkCard` on `/news`) and press cards (`News.js`): consistent image heights, content top-aligned, text left-aligned, no `text-align: justify`. Titles clamp to three lines. The action sits at the bottom of the card (`flex-direction: column` and `margin-top: auto`). Image alt text comes from the card title, not the literal `project1`.
2. Social cards from phase 6 already specify equal height and left alignment. If they drifted, match them to this same card rule. Do not restyle them into a new layout.
3. Map legend: four tiers, one hue from light to dark, distinguishable without red versus green. Collapsible behavior added in phase 1 stays. Update the `gradient` in `HeatMapLayer` to the same ramp. Do not change aggregation, grid size, beetle-count estimates, radius, or blur.
4. Form controls site-wide (contact `Form`, hero `NewsletterForm` if present, sighting form): border at least 3:1 against the background, lime focus ring, labels above the fields, consistent height. Phase 2 may already have done the contact form. Extend that pattern; do not invent a second palette.
5. Nav: visible active state for the current route (`NavLink` or `useLocation`). Style the Contact item as a pill using the existing `.btn` gradient. On the contact route the pill should still read as active.

Keep the dark page and the brand gradient. No new dependencies.

## Out of scope

- Heat data math and sighting submit behavior.
- Mobile stacking and scroll-trap fixes from phase 1. Do not regress them.
- Rewriting claims, press headlines, or blog titles.
- Adding social embed scripts.
- The first-visit beetle overlay.

## Files you may change

- `portfolio-app/src/components/WorkCard.js`
- `portfolio-app/src/components/WorkCardStyles.css`
- `portfolio-app/src/components/News.js` only if a class hook is required for alignment
- `portfolio-app/src/components/NewsStyles.css`
- `portfolio-app/src/components/SocialCard.js` and its CSS, if present
- `portfolio-app/src/routes/Map.js` (legend markup and heat gradient only)
- `portfolio-app/src/components/MapStyles.css`
- `portfolio-app/src/components/FormStyles.css`
- `portfolio-app/src/components/Navbar.js`
- `portfolio-app/src/components/NavbarStyles.css`
- Newsletter form CSS if the shared field style cannot apply otherwise

## Acceptance

At 1440px and 375px:

- Press cards and blog cards in a row share image height, left-aligned text, and bottom-aligned actions.
- Legend shows four steps of one hue and still collapses on a small screen if phase 1 added that.
- The heat colors follow that ramp. Density values on the map are unchanged.
- Contact, newsletter, and sighting fields show a visible border and a lime focus ring.
- Each nav route highlights the matching item. Contact looks like the gradient pill and still goes to `/contact`.
- Map menu still opens above the tiles (phase 1).

## Session log

- Date: 2026-10-20
- Changed: Blog and press cards top-align, left-align, clamp titles to three lines, and pin the action to the bottom. Blog image alt uses the post title. Map legend and heat gradient are four steps of one green ramp (`#e4f0c8` to `#243d12`); collapse toggle unchanged. Contact, newsletter, and sighting fields share a light border, 48px minimum height, and a lime focus ring. Newsletter label sits above the field. Nav uses `NavLink` active state; Contact is the brand-gradient pill and keeps a white outline on `/contact`.
- Still blocked: Phase 4 squish was left alone. Real social post assets are still placeholders from phase 6.
