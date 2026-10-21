# Phase 0: Code map

No code changes. This file is the check of the Oct 17 feedback against the repo. Later phases cite it so they do not re-audit.

## Stack

- App: Create React App in `portfolio-app/` (React 19, React Router 7, `react-scripts`).
- Styling: plain CSS. Outfit is loaded from `portfolio-app/src/components/NavbarStyles.css`. The lime gradient (`linear-gradient(45deg, #f5f193, #90ee90)`) is on `.btn` in that file and on `.gradient-text` in `portfolio-app/src/index.css`.
- `NavbarStyles.css` is global. It resets `margin` and `padding` and sets the body font because `Navbar` imports it on every page.
- Maps: `leaflet`, `react-leaflet`, `leaflet.heat`.
- Hosting hint: `portfolio-app/public/_redirects` is a Netlify-style SPA fallback (`/* /index.html 200`). There is no `netlify.toml`, no `vercel.json`, and no serverless function in the repo.
- No email SDK and no newsletter vendor in `portfolio-app/package.json`.

## Routes

Defined in `portfolio-app/src/App.js`.

| Path | File | What it renders |
| --- | --- | --- |
| `/` | `portfolio-app/src/routes/Home.js` | `BeetleAnimation`, `Navbar`, `HeroImg`, `News` (press), `Work` (blog cards), `Footer` |
| `/map` | `portfolio-app/src/routes/Map.js` | `Navbar`, Leaflet heat map, density legend, sighting form, `Footer` |
| `/demo` | `portfolio-app/src/routes/Demo.js` | `Navbar`, product copy, one product image, two `.mov` videos, a Join Newsletter link, `Work`, `Footer` |
| `/news` | `portfolio-app/src/routes/News.js` | `Navbar`, page hero, `News` (the same press component as Home), `Footer` |
| `/contact` | `portfolio-app/src/routes/Contact.js` | `Navbar`, "Who are we?" (`AboutContent`), `Form`, `Footer` |
| `/blog/:blogSlug` | `portfolio-app/src/components/Blog.js` | Individual post via `BlogContent` |
| `/lawnwaitlist`, `/lawn-waitlist` | `portfolio-app/src/routes/LawnWaitlist.js` | Lawn copy plus the shared `Form` with a fixed subject |
| `*` | `portfolio-app/src/routes/NotFound.js` | 404 |

`portfolio-app/src/routes/About.js` and `portfolio-app/src/routes/Project.js` exist and are not mounted. `Project.js` is the only importer of `portfolio-app/src/components/Info.js`.

Home does not contain "Who are we?" or the contact form. Both already live on `/contact`.

## Feedback checked against the code

### Hero (notes 1, 2, 3)

`portfolio-app/src/components/HeroImg.js` is a vineyard video, the headline `Eliminate Japanese Beetles.`, the subline `Follow Alure LLC for more.`, a filled `Learn More` link to `/demo`, and an outline `Join Newsletter` link to `/contact`. There is no email input and no "Enter your email here" string anywhere under `portfolio-app/src`.

`LLC` in that subline is marketing copy. The footer and copyright in `portfolio-app/src/components/Footer.js` also say Alure LLC and should keep it.

### Logo period (note 4)

Confirmed in text, not in the beetle image. `portfolio-app/src/components/Navbar.js` renders `<h1>Alure.</h1>` next to `portfolio-app/src/assets/beetle.png`.

### What Alure is, press, and blog (notes 5 and 6)

Press is `portfolio-app/src/components/News.js`. Four cards, dates January–March 2024, heading `Latest News & Updates`. The same component is mounted on Home and on `/news`. The News route hero in `portfolio-app/src/routes/News.js` repeats that heading.

Blog cards are `portfolio-app/src/components/Work.js` plus `WorkCard.js` and `WorkCardData.js`. Four posts, not three. They render on Home and again at the bottom of Demo. Card body copy is `text-align: justify` in `WorkCardStyles.css`. Titles and buttons are centered because `.project-card` uses `align-items: center`. Posts link to `/blog/:blogSlug`.

There is no social embed. Account URLs already exist in `Footer.js`: Instagram `https://www.instagram.com/alure_llc/`, LinkedIn `https://www.linkedin.com/company/alure-llc/`, plus Facebook and YouTube. Specific post URLs and images do not exist in the repo.

### Map (note 7)

`Map.js` creates the map with `MapContainer` from react-leaflet. The component unmounts when the route changes, which should destroy the map. Confirm that in phase 1 rather than assuming a leaked instance.

The stacking bug is visible in CSS:

- `NavbarStyles.css`: `.header` is `position: fixed; z-index: 10`. The mobile `.nav-menu` is `position: absolute; z-index: -3` inside that header.
- Leaflet panes are `position: absolute` with z-index in the hundreds, and Leaflet controls default to `z-index: 1000`. `.leaflet-container` does not isolate them, so those z-index values compete with the header.
- `MapStyles.css`: `.heat-map-legend` is `z-index: 1000`. Loading and empty states are `z-index: 1500`. The sighting submit overlay passes `zIndex={2000}`.

A menu or a following page that sits at z-index 10 will paint under the map panes and the legend. That matches "the map stays on screen when navigating" more closely than a missing `map.remove()`, and both still need a check.

Mobile layout in `MapStyles.css` (max-width 768px and 480px) stacks the form under the map, then locks the form in a nested scroller (`max-height` 300–400px). Map height is a fixed 300–350px, not `dvh`. Page scroll can still be captured by the map.

The red beetle-count border is in `MapStyles.css`: `select:invalid` turns the border `#dc3545`, and `:not([value=""])` looks at the HTML attribute. The required `<select>` in `Map.js` is controlled by React state and has no `value=""` attribute, so the rule matches on load.

Heat colors are a six-stop green-to-red gradient in `HeatMapLayer` and a matching six-row legend. Leave both alone until phase 8. Leave the aggregation math alone entirely.

The sighting form and the contact form both POST to Google Apps Script URLs hardcoded in client code. Do not copy those URLs into new files. `Map.js` also has a geocoding API key in source. Do not duplicate it into docs or new modules.

### Contact (notes 8 and 11)

`/contact` already exists and is in the nav.

`AboutContent.js` wraps `<button className="btn">Contact</button>` in `<Link to="/contact">`. That section is rendered by `Contact.js`, so the control navigates to the page the visitor is already on. `About.js` also imports `AboutContent`, but that route is not mounted.

`Form.js` already submits. It POSTs JSON to a Google Apps Script and, on success, shows a modal that says the visitor joined the newsletter, even for a general message. `LawnWaitlist.js` reuses `Form` with `fixedSubject` and a custom success message. Any change to `Form.js` has to keep that page working.

Inputs in `FormStyles.css` use `border-color: rgba(255, 255, 255, 0.1)` on a near-black field. That fails a 3:1 edge.

The public inbox printed in the footer is `info@alurellc.com`. Nothing in the repo sends mail to it. There is no server function to add a key to.

### Squish (note 9)

`BeetleAnimation.js` is a first-visit full-screen overlay on Home only (`position: fixed; z-index: 1000`, about 5 seconds, `localStorage` key `hasVisitedBefore`). It is not a signup confirmation. Phase 4 adds a separate small SVG. Do not retarget this overlay.

### Demo photos and claims (note 10, plus trust findings)

Demo is not a four-photo gallery of 2024 nets. `Demo.js` shows `portfolio-app/src/assets/beetle_samples.png` and two videos, `AlureDemo.mov` and `AlureRender.mov`.

Claims to inventory in phase 7, without rewriting them in that same session:

- `Demo.js`: `$1,000 an acre`, "harmful pestcides that kill pollinators", "safe for humans and pet", "baits the bugs and kills them on contact".
- `Info.js`: the same safety wording, on an unrouted page.
- `News.js` excerpts: "eco-friendly", "environmentally safe".
- `BlogContent.js`: "eco-friendly".
- `Footer.js`: "attracts the bugs and kills them on contact".

Press dates and blog titles are from 2024. Renaming the press heading is in phase 5. Inventing newer articles is not in any phase.

### Nav

`Navbar.js` uses `Link`, not `NavLink`. There is no active route style. Contact is a text link, same as the others. The hamburger does not need to close itself across routes, because each page renders its own `Navbar` and navigation remounts it.

## What later phases must not assume

- Do not create `/contact`. It exists.
- Do not look for an email field in the hero. It does not exist.
- Do not edit the beetle logo image to remove a period.
- Do not add Instagram or LinkedIn iframes or embed scripts.
- Do not add a new email vendor, API key, or `.env` value until phase 2's blocked section is explicitly unblocked.
- Do not change heat-map aggregation.
- Do not rewrite pesticide, safety, or cost claims while doing layout work.
