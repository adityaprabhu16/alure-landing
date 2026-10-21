# Phase 6: Blog on News, social strip on Home

Priority: P2. Feedback note 6, adapted. Curated cards, not live embeds.

Depends on: phase 5, so Home order is hero, How Alure works, press, then whatever replaces the blog block.

## Goal

Blog posts live on `/news`. Home shows a short "From the field" strip that links out to real posts, with no third-party embed scripts.

## Read first

- `portfolio-app/src/components/Work.js`
- `portfolio-app/src/components/WorkCard.js`
- `portfolio-app/src/components/WorkCardData.js`
- `portfolio-app/src/routes/Home.js`
- `portfolio-app/src/routes/Demo.js` (renders `Work` at the bottom)
- `portfolio-app/src/routes/News.js`
- `portfolio-app/src/components/Footer.js` (account URLs)
- `portfolio-app/src/components/Navbar.js` (News link already exists)

## Code facts

`WorkCardData.js` has four posts, not three:

- How We Scaled Our Newsletter to 1,100 Subscribers… → `/blog/newsletter-april-recap`
- Summer 2024 Research Recap → `/blog/summer-2023-research-recap`
- Top 5 Lessons from MN Cup → `/blog/top-5-lessons-mn-cup`
- Product Manufacturing Research Underway! → `/blog/product-manufacturing-underway`

`Work` is rendered on Home and at the bottom of Demo. `/news` renders only the press `News` component. `Navbar` already links to `/news`. Do not add a second News link. Active-route styling is phase 8.

`WorkCard` navigates with `myData.path`. The `view` YouTube URLs in the data file are unused. Keep the in-site blog paths working.

Footer account URLs to reuse for Follow links:

- Instagram: `https://www.instagram.com/alure_llc/`
- LinkedIn: `https://www.linkedin.com/company/alure-llc/` (drop the `viewAsMember=true` query from the footer href when copying it)

No post URLs or social images are stored in the repo. Seed placeholders. Do not scrape Instagram or LinkedIn.

## In scope

1. On `/news`, render the existing `Work` block under the press section. Keep the four cards and their `/blog/:slug` links.
2. Remove `Work` from Home and from Demo.
3. On Home, where the blog block was, add a "From the field" section: up to four `SocialCard`s and a Follow row for the Instagram and LinkedIn URLs above.
4. `SocialCard` is our markup, not an iframe. Data lives in `portfolio-app/src/data/social.js` with fields `platform`, `postUrl`, `imageUrl`, `caption` (max 120 characters), and `date`. Seed three entries marked `TODO` in the caption or a `placeholder: true` flag. Cards open `postUrl` in a new tab with `rel="noopener noreferrer"`. Show a small platform icon (react-icons is already a dependency) and the date.
5. In `social.js`, add a short comment that embed scripts and iframes are intentionally unused: they cannot take the black theme, they load heavy third-party scripts, ad blockers drop them, and they shift layout. LinkedIn has no feed embed, only per-post embeds.
6. Cards: equal height, image on top with a fixed aspect ratio (4:5 or 1:1), left-aligned text, no justified text, action pinned to the bottom with a column flex and `margin-top: auto`.

## Out of scope

- Hero, How Alure works, and press heading copy.
- Restyling `WorkCard` alignment (phase 8). Move the component; do not redesign it here.
- Nav active state and the Contact pill (phase 8).
- New press articles or rewritten blog posts.
- Loading Instagram or LinkedIn scripts.

## Files you may change

- `portfolio-app/src/routes/Home.js`
- `portfolio-app/src/routes/News.js`
- `portfolio-app/src/routes/Demo.js` (remove the `Work` import and the `<Work />` at the bottom only)
- New `portfolio-app/src/data/social.js`
- New `portfolio-app/src/components/SocialStrip.js` (and a CSS file)
- New `portfolio-app/src/components/SocialCard.js` if the strip is clearer split in two

Do not edit `WorkCardData.js` except to fix a broken path you discover while moving the section.

## Acceptance

- The four blog posts appear on `/news` under the press block, and their View buttons still open the blog routes.
- Home has no "Latest Blog Posts & News" section. It shows From the field instead.
- Demo no longer repeats the blog cards.
- Follow links open the existing Instagram and LinkedIn profiles.
- Placeholder cards are visibly TODO and do not pretend to be real posts.
- View source or the network panel: no `instagram.com/embed` or `linkedin.com` embed script.
- At 375px the strip stacks without horizontal scroll.

## Session log

- Date: 2026-10-20
- Changed: Blog `Work` block moved to `/news` under press. Removed from Home and Demo. Home now renders `SocialStrip` (`From the field`) from `src/data/social.js` with three placeholder cards and Instagram/LinkedIn follow links. No embed scripts.
- Still blocked: Real post URLs, captions, and images. Placeholders stay until those exist. `Project.js` still renders `Work`; the brief only required Home and Demo.
