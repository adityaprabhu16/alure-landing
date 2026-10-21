# Phase 9: Regression and mobile QA

Depends on: whichever phases you intend to ship. Run it last. Default assumption is phases 1 through 8, with phase 4 optional and phase 7's photo swap optional.

## Goal

Review the site at phone and desktop widths. Fix only high-severity breaks. Record everything else.

## Do not

- Add features.
- Restyle cards, the legend, or the nav beyond a high-severity bug.
- Rewrite claims.
- Add an email vendor if phase 2's blocked section is still blocked. Record "contact does not send mail" as a known limit, not as a bug to invent a fix for.

## Viewports

375px, 414px, 768px, and 1440px.

## Routes

`/`, `/map`, `/demo`, `/news`, `/contact`, one `/blog/:blogSlug` post, `/lawnwaitlist`.

`/lawnwaitlist` matters because it shares `Form` with contact.

## Checks

On every route and viewport:

- No horizontal scroll, clipped text, or overlapping elements.
- Mobile menu opens above all content, including the map, and closes when a link navigates (each page mounts its own `Navbar`, so this should fall out of navigation).
- Leaving `/map` leaves no Leaflet pane, legend, or attribution bar.
- Newsletter form, if phase 3 shipped: invalid, valid, success, error.
- Contact form: validation, success, error. Honeypot only if the blocked email work was actually built.
- Lawn waitlist still submits with its own success message.
- Every link and button goes somewhere. List dead ones.
- Images have alt text. Images do not shift layout when they load.
- Console errors on each route.
- Keyboard: tab order, visible focus, both forms usable without a mouse.

Lighthouse mobile on `/` and `/map`: record performance, accessibility, and best-practices scores in the session log. Do not chase a score unless the failure is a high-severity bug in the list below.

## Severity

- High: cannot complete a task, content covered, map survives navigation, form submits the wrong thing, page scrolls sideways, or keyboard users cannot reach a control.
- Medium: misalignment, weak contrast that is still readable, missing alt on a decorative image.
- Low: copy nits, optional animation, placeholder social cards that are still marked TODO.

## Fix rule

Fix high-severity issues only. For each fix, name the file in the session log. Leave medium and low as rows in the table so a later session can pick them up.

## Output

Fill this table in the session log.

| Route | Viewport | Problem | Severity | File | Fixed? |
| --- | --- | --- | --- | --- | --- |

## Files you may change

Only files required to fix a high-severity row. Say which acceptance check from an earlier phase regressed before editing.

## Session log

- Date: 2026-10-20
- Lighthouse Home (mobile): performance 61, accessibility 91, best practices 100. The performance score was not chased. It is not a broken task.
- Lighthouse Map (mobile): performance 44, accessibility 94, best practices 96. The performance score was not chased. Map tiles and the Leaflet library account for the weight.
- Checked `/`, `/map`, `/demo`, `/news`, `/contact`, `/blog/newsletter-april-recap`, `/blog/summer-2023-research-recap`, and `/lawnwaitlist` at 375, 414, 768, and 1440. No horizontal scroll. Leaving `/map` removed the Leaflet pane, legend, and attribution. The mobile menu opens over the map and a new page mounts a closed menu. Newsletter invalid and error show no squish and keep the email; success shows "You're in. Watch your inbox for field updates." Contact validation, error, and success keep the Contact source. Lawn waitlist success uses its own sentence and `source: "Lawn waitlist"`. Those form checks used a stand-in response, so nothing was written to the sheet. Known limit: contact does not send mail. Inquiries are sheet rows.
- Table:

| Route | Viewport | Problem | Severity | File | Fixed? |
| --- | --- | --- | --- | --- | --- |
| All | 375–1040 | The menu control is a `div`, so it is not in the tab order. The nav links stay focusable while they sit off-screen. Keyboard users can still activate those links. | Medium | `portfolio-app/src/components/Navbar.js` | No |
| All | All | Footer social icons are links with no accessible name. | Medium | `portfolio-app/src/components/Footer.js` | No |
| `/`, `/news` | All | Press and logo images have no width and height, so they can shift when they load. | Medium | `portfolio-app/src/components/News.js`, `portfolio-app/src/components/Navbar.js` | No |
| `/demo` | All | Join Newsletter is a button nested inside a link to `/contact`. It does navigate. | Medium | `portfolio-app/src/routes/Demo.js` | No |
| `/news` | All | "In the press" is shown twice, once in the page hero and once in the press section. | Low | `portfolio-app/src/routes/News.js`, `portfolio-app/src/components/News.js` | No |
| `/` | All | From the field cards are still placeholders marked TODO. | Low | `portfolio-app/src/data/social.js` | No |
| `/lawnwaitlist` | All | Fixed subject is spelled "Lawn Maintainence Signup". | Low | `portfolio-app/src/routes/LawnWaitlist.js` | No |

- High-severity fixes: None. No task was blocked, nothing stayed covered, the map did not survive navigation, forms submitted the labeled source, and pages did not scroll sideways.
