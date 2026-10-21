# Alure Website Feedback: Breakdown, Verdicts, Cursor Prompts

Oct 17, 2026 · @Aditya

## Bottom line

Eight of the eleven notes are right as written and three need adapting. The two that are outright bugs, the mobile map and the dead Contact button, should ship first.

| # | Feedback | Verdict | Priority |
| --- | --- | --- | --- |
| 7 | Map page is buggy on mobile | Adopt, fix first | P0 |
| 11 | Contact button does nothing | Adopt, fix first | P0 |
| 1 | Replace "Learn More" with a Join Newsletter button in the same style | Adopt | P1 |
| 2 | Add an email field aligned with the button | Adopt | P1 |
| 3 | Remove "LLC" and the period from the hero subline | Adopt | P1 |
| 4 | Remove the period after "Alure" in the logo | Adopt, confirm it exists | P1 |
| 5 | Add a "what Alure is" section above the news | Adapt: short version, not a copy of Demo | P1 |
| 8 | Turn the form into a Contact Us page that emails Alure | Adopt | P1 |
| 6 | Swap blog cards for Instagram or LinkedIn embeds, move blog to News | Adapt: move the blog yes, curated cards instead of live embeds | P2 |
| 10 | Refresh the Demo photos | Adopt, needs your new photos | P2 |
| 9 | Beetle squish animation on the newsletter button | Adapt: keep it, but on success only and small | P3 |

P0 means broken, P1 conversion and clarity, P2 content refresh, P3 polish.

Two issues the feedback did not cover matter as much as any item above. The "Latest" sections are all dated 2024, and the Demo copy makes claims that could cause trouble before EPA registration. Both are covered in the current-state assessment.

## What the screenshots show

The site is a dark, single-brand marketing site with five nav items (Home, Map, Demo, News, Contact), so I read it as five routes. I can only see images, not code, so anything marked "inferred" should be confirmed in the repo first.

| Route | Section (screenshot) | Components | What is there today |
| --- | --- | --- | --- |
| Global | Header (1) | NavBar, Logo (beetle mark + "Alure" wordmark) | Five text links, no visible active state, no mobile menu seen |
| Home `/` | Hero (1) | HeroSection, H1 with lime accent, subline, filled gradient button "Learn More", outlined button "Join Newsletter", "Enter your email here" text | Newsletter is the secondary action. The email prompt is large text with no visible field box, and it is not aligned with the button |
| Home `/` | Latest News & Updates (2) | PressSection, three horizontal PressCards (thumbnail, date, headline, excerpt, "Read More") | Local press from Feb and Mar 2024. Thumbnails are screenshots of the articles |
| Home `/` | Latest Blog Posts & News (3) | BlogSection, three vertical BlogCards (image, title, excerpt, "View" button) | MN Cup photo, Summer 2024 recap, Top 5 lessons. Card content is not aligned across the three |
| Map `/map` (inferred) | Heat map (4) | MapSection (Leaflet or similar with OpenStreetMap tiles, heat layer), DensityLegend with six tiers | Heat blob over Minnesota and Wisconsin. Legend overlays the map |
| Map `/map` | Report a Sighting (4) | SightingForm in a scrollable side panel: privacy note, Location (autocomplete), Number of Beetles (select), Plant Type (text) | Number of Beetles shows a red error border before any input |
| Demo `/demo` (inferred) | Problem and product (5) | DemoHero image band, ProblemCopy, "Sustainable, Simple, Aesthetic." PhotoGallery of four rounded images | Photos show white nets with beetles from the 2024 pilot. Part of the copy was hidden by a sticky note |
| Contact `/contact` or bottom of Home (inferred) | Who are we (6) | AboutHero ("A boundless passion."), WhoAreWe copy, CTA button "Contact", team photo plus trap photo | The Contact button does nothing |
| Contact `/contact` or bottom of Home (inferred) | Form (7) | ContactForm: Name, Email, Subject, Message, Submit | Unclear whether Submit is wired to anything |

Visual system, as far as the images show: black page, near-black cards, a lime-to-green gradient on primary buttons and accent words, a geometric sans that looks like Outfit, and real photography of vineyards and the team. It is consistent and distinctive, which is worth protecting while making the changes below.

One structural point: the sticky notes treat "Demo" as both a page and a section, and note 8 says the form should become its own page "due to the home page changes." That suggests the form and "Who are we" currently sit at the bottom of Home. Prompt 0 in the Cursor section has Cursor confirm this before anything is changed.

## Feedback, item by item

### Hero (notes 1, 2, 3, 4, 9)

**1. Replace "Learn More" with Join Newsletter, styled like Learn More. Adopt.** Today the primary, filled button is the weakest action: "Learn More" has nowhere better to go than the Demo page, which is already in the nav. Newsletter growth is the one conversion you can measure now (your own blog post cites 1,100 subscribers in eight weeks), so it should own the hero. Change: remove the Learn More button, give Join Newsletter the filled gradient style.

**2. Add an email field aligned with the button. Adopt.** The current "Enter your email here" is large text with no visible box, so it does not read as a field and sits off the button's baseline. Change: one row, an input and a button of equal height, stacked on mobile. Use a real `<label>` or an accessible name, since a placeholder alone disappears when typing.

**3. Remove "LLC" and the period from "Follow Alure LLC for more." Adopt.** "LLC" is a legal suffix and belongs in the footer and contracts, not in marketing copy. The period on a short subline is fine to drop. I would go one step further: "Follow Alure for more" says nothing about the product, and with Learn More gone this line is the only explanation in the hero. Suggested replacement, your call: "Hands-free Japanese beetle control. Get field updates and launch news." Keep the headline's period, since it matches the packaging tagline.

**4. Remove the period after "Alure" in the logo. Adopt, but confirm.** In the screenshot the mark sits on the end of the wordmark and I cannot tell if a period is really there. If it is in the logo image, it needs a new asset. If it is text, it is a one-line change.

**9. Beetle squish animation on Join Newsletter. Adapt, lowest priority.** It is on-brand and cheap delight, so keep it, but with limits. Trigger it on a successful signup, not on click, so people are not told they subscribed before the request succeeds. Keep it under one second, in CSS or SVG rather than a heavy animation library, and turn it off for people who set "reduce motion." Always show a plain text confirmation as well. The risk of doing it carelessly is a gimmick that sits awkwardly with grower and investor visitors.

### Home content (notes 5, 6)

**5. Add a "what Alure is" section before Latest News. Adopt, adapted.** This is the best note in the set. A first-time visitor currently goes from a headline and an email prompt straight to press clippings, with no explanation of how the product works. The adaptation: do not duplicate the Demo page. Build a short three-step section (attract, land, eliminate) with one product image and a link to Demo for depth. Duplicate content on two pages drifts out of sync and competes with itself in search.

**6. Replace the blog cards with Instagram or LinkedIn embeds, and put blog posts on News. Adapt.** Two parts, and they get different answers.

- Move the blog posts to the News page: adopt. Right now there are two sections called, in effect, "Latest News," and visitors cannot tell the difference between them.
- Live social embeds on Home: push back. Instagram and LinkedIn embeds are white third-party cards that cannot be themed to a black site, they load heavy scripts that slow the page, they are blocked entirely by some browsers and ad blockers, and they shift the layout as they load. You flagged mobile problems already. LinkedIn only offers per-post embeds, not a feed. The better version: a "From the field" strip of your own cards (image, first line, platform icon) that link out to the real posts, with a Follow link. You keep the freshness signal without the cost. If you still want true embeds, use one platform, lazy-load them, and reserve their height.

### Map (note 7)

**7. The map page is buggy on mobile, and the map stays on screen when navigating. Adopt, fix first.** This is a functional failure, not a preference, and the symptom is specific. A map that survives navigation usually means one of three things: the map container is positioned outside the page's normal flow, the map is not destroyed when the route changes, or its stacking order sits above the mobile menu. I cannot tell which from a screenshot, so Prompt 1 asks Cursor to diagnose before fixing. Expect to also fix the usual mobile map problems: the page scrolling getting trapped by the map, a viewport height that ignores the mobile browser bar, and the side panel needing to stack below the map.

### Demo (note 10)

**10. Update the Demo photos. Adopt.** The four photos show the 2024 net-and-beetle pilot. The product has moved on (conical device, new packaging), so the page currently shows a prototype. This needs your new photos; I cannot supply them. Keep two or three of the beetle-on-net shots as proof, add a caption with where and when, and give every image alt text.

### Contact (notes 8, 11)

**8. Make it a Contact Us page that sends to the Alure email. Adopt.** A page that sends messages to a monitored inbox is what a pilot-seeking grower expects. It must be sent from a server function, not from the browser, so no email credentials are exposed, and it needs spam protection and visible success and error states.

**11. The Contact button does nothing. Adopt, fix first.** A dead button on the page that exists to generate leads is the most costly bug on the site. Once the form has its own page, this button should simply link to it.

## Current state beyond the feedback

The site has a strong identity and a clear headline. The issues below are mostly about trust, clarity and consistency rather than looks.

| Finding | Why it matters | Severity |
| --- | --- | --- |
| Every "Latest" item is dated Feb to Mar 2024 or summer 2024 | As of October 2026 this reads as a company that went quiet two and a half years ago, which hurts with investors and growers checking you out | High |
| Demo copy says growers' only option is "harmful pesticides that kill pollinators" | Alure's own product uses alpha-cypermethrin, which is toxic to bees and fish (your own label says to keep it away from water). A skeptical grower, reviewer or regulator can turn this line against you | High |
| Press excerpts use "eco-friendly" and "environmentally safe" | EPA treats safety and harmlessness claims on pesticide products and their advertising as potentially misleading, and the product is not registered yet. This is not legal advice, but have Tim Dotson review site copy before newsletter traffic grows | High |
| "Costing the average vineyard, orchard, or commercial grower over $1,000" has no source or unit | An unsourced cost claim is the first thing a grower or investor will question. Cite it or soften it | Medium |
| Two sections with near-identical names ("Latest News & Updates", "Latest Blog Posts & News") | Visitors cannot tell them apart. Rename the press one "In the press" so old dates stop reading as stale | Medium |
| Blog cards are misaligned: image tops differ, the third title is centered while the others are left-aligned, the third paragraph is justified, "View" buttons sit at three heights | Looks unfinished and the justified text leaves uneven gaps | Medium |
| Press thumbnails are small screenshots of articles with unreadable text | Use the outlet name or logo and a clean crop | Low |
| Contact form fields are near-black on black with faint borders | Fails the 3:1 contrast guideline for input edges, hard to see on bright phone screens in a vineyard | Medium |
| Map: red error border shows before the user has touched the field | Validate on blur or submit, not on page load | Medium |
| Map legend has six tiers running green to red | Hard to tell apart and unreadable for red-green color blindness. Four tiers with a single-hue ramp is cleaner | Low |
| No obvious path for growers, who are the revenue side (pilots, LOIs) | The newsletter-first hero serves homeowners. Add a quiet "Growers: request a pilot" link under the form and style Contact in the nav as a button | Medium |
| Only the map was reported as buggy on mobile, but all screenshots are desktop | Test every route at 375px wide before assuming the rest is fine | Medium |

What is working and should stay: the headline, the lime accent and consistent gradient buttons, real team photography, and the "Privacy First" note beside the sighting form. The crowdsourced map is also a real asset for the investor story, since it builds a dataset nobody else has. One cheap tie-in: after a sighting is submitted, offer "Get alerts for your area" as a newsletter signup.

## Resulting component changes and build order

Run the prompts in this order. Each one is a separate Cursor session or commit, so a regression is easy to trace.

| Step | Change | Components touched | Needs from you first |
| --- | --- | --- | --- |
| 0 | Read-only repo map | None | Nothing |
| 1 | Fix mobile map bugs | MapSection, SightingForm, NavBar mobile menu, layout CSS | Nothing |
| 2 | Contact Us page and working email form, fix dead button | ContactForm, new server function, WhoAreWe CTA, nav | Destination inbox and an email-sending account |
| 3 | New hero with one newsletter row | HeroSection, new NewsletterForm, Logo, hero copy | Newsletter provider name; confirm logo period |
| 4 | Squish animation on successful signup | NewsletterForm, new SquishBeetle | Step 3 done |
| 5 | "What Alure is" section, rename press section | New HowItWorks, PressSection, Home layout | Approval of the three-step wording |
| 6 | Move blog to News, add "From the field" social strip | News page, BlogSection, new SocialStrip | Which accounts, 3 to 6 post links and images |
| 7 | Demo photos and copy cleanup | PhotoGallery, ProblemCopy | New photos; a source for the $1,000 figure |
| 8 | Card and form polish | BlogCard, PressCard, form inputs, map legend | Nothing |
| 9 | Mobile and regression QA | All routes | Nothing |

Steps 1 and 2 have no dependencies on the design changes, so they can go out the same day as step 0 finishes.

## Cursor prompts

Paste each into Cursor in order. Every prompt tells Cursor to inspect the repo first, because I have only seen screenshots. Where a prompt has a bracketed placeholder, fill it in before sending.

### Prompt 0: Map the repo (no changes)

```text
Do not modify any files. Inspect this repository and report back:

1. Framework, router, styling system, and hosting setup (Next.js, Vite, Netlify, Vercel, etc.).
2. Every route/page and the file that renders it. I expect: Home, Map, Demo, News, Contact. Tell me if any are missing or if some content lives in a different place than I expect.
3. For each page, the list of sections/components it renders, in order. Specifically locate: the hero (headline "Eliminate Japanese Beetles.", "Learn More" button, "Join Newsletter" button, "Enter your email here" text); the "Latest News & Updates" press cards; the "Latest Blog Posts & News" blog cards; the Map page with heat map, density legend and "Report a Sighting" form; the Demo page photo gallery; the "Who are we?" section with a "Contact" button; the contact form (Name, Email, Subject, Message, Submit).
4. Where the Join Newsletter action currently sends the email (which provider or endpoint), and where the contact form submits to, if anywhere.
5. The map library used, where the map instance is created and destroyed, and any z-index, position: fixed, or 100vh usage that could affect stacking or mobile layout.
6. Where the nav and the mobile menu are defined.
7. Where design tokens live (colors, gradient, fonts) so later changes reuse them.

Output a short markdown report with file paths. Flag anything that contradicts my assumptions above.
```

### Prompt 1: Fix the mobile map page (note 7)

```text
Problem: on mobile, the Map page is buggy. The reported symptom: the map does not disappear when navigating to a different page. There may be other mobile issues.

Step 1, diagnose before changing anything. Check these likely causes and tell me which apply, with file and line:
- The map container is position: fixed/absolute or appended outside the normal page flow.
- The map instance is not destroyed on route change (missing cleanup such as map.remove() in the unmount/cleanup function), or is created twice.
- The map or its controls have a z-index higher than the mobile nav menu or page content, so the menu opens beneath the map.
- Height uses 100vh, which ignores the mobile browser address bar. Use 100dvh or a fixed responsive height instead.
- The map captures page scroll on touch, trapping the user.
- The Report a Sighting panel does not stack under the map on narrow screens, or is a nested scroll area that fights the page scroll.

Step 2, fix:
- Ensure the map is fully torn down on route change and cannot render on other routes.
- Establish a clear z-index scale: nav and mobile menu above map controls. Use an isolated stacking context on the map wrapper (isolation: isolate) so map internals cannot overlap the nav.
- On screens under 768px: stack the layout (map on top at about 60vh, form below, no nested scrolling), make the legend collapsible or smaller, and use one-finger page scroll with two-finger map pan (or a tap-to-activate overlay).
- Call the map's size-invalidate method after layout changes if the map library needs it.
- Form validation: do not show the red error border on page load. Validate on blur and on submit only.

Constraints: do not change desktop layout or the visual design. Do not change the heat map data logic. Keep changes minimal and list every file touched.

Acceptance: at 375px and 414px wide, opening the mobile menu from the Map page shows the menu above the map; navigating from Map to any other page shows no map remnants; the page scrolls normally with one finger; the form is fully usable; navigating back to Map re-creates it once with no console errors.
```

### Prompt 2: Working Contact Us page and fix the dead Contact button (notes 8, 11)

```text
Goal: make a working Contact Us page that emails the Alure inbox, and fix the "Contact" button in the "Who are we?" section that currently does nothing.

First, find the existing contact form (fields: Your Name, Email, Subject, Message, Submit) and the "Who are we?" section with the "Contact" button. Tell me where each lives and whether the form currently sends anything.

Build:
1. A dedicated /contact route titled "Contact Us", reachable from the nav Contact link. Move the form there (if it currently sits at the bottom of Home, remove it from Home). Keep the existing visual style.
2. The form posts to a server-side endpoint using this project's idiomatic approach (Next.js route handler, Vercel or Netlify function, etc.). Never send email directly from client code and never expose API keys in the browser.
3. The endpoint sends the message to [DESTINATION EMAIL, e.g. info@alurellc.com] using [EMAIL SERVICE, e.g. Resend]. Read the API key from an environment variable and add it to .env.example with a comment. Set Reply-To to the visitor's email. Subject format: "[Alure site] <their subject>".
4. Validation on client and server: required name, valid email, subject, message with a max length. Add a hidden honeypot field and a simple rate limit per IP to cut spam. Escape all user input in the email body.
5. UI states: submitting (button disabled, spinner or text), success (clear confirmation message and form reset), error (friendly message, keep the user's input). Announce status to screen readers with aria-live.
6. Fix the "Contact" button in the "Who are we?" section so it links to /contact (use the router's Link component). If that section sits on the Contact page itself, remove the button instead of leaving a dead control.
7. Form accessibility and contrast: visible labels linked to inputs, input borders at least 3:1 contrast against the background, and a clearly visible focus ring in the lime accent color.

Constraints: no new heavy dependencies; reuse existing button and input styles. Do not touch the hero, news, or map code. List every file changed and every environment variable I need to set.

Acceptance: submitting the form on /contact delivers an email to the destination inbox with the correct Reply-To; the empty form shows validation errors; the honeypot blocks bot posts; the Contact button navigates to /contact.
```

### Prompt 3: New hero with a single newsletter row (notes 1, 2, 3, 4)

```text
Goal: rework the Home hero so the newsletter signup is the one primary action.

First locate the hero component and the existing newsletter logic (what provider or endpoint the "Join Newsletter" button uses today). Reuse that provider; do not switch providers. If the current setup is only a link to an external page, tell me and propose the smallest inline-form approach that provider supports.

Changes:
1. Remove the "Learn More" button.
2. Create a reusable NewsletterForm component: one row with a labeled email input and a "Join Newsletter" submit button. The button uses the filled lime-to-green gradient style currently used by "Learn More" (reuse the existing button class or tokens, do not copy styles). Input and button have the same height and are vertically aligned; on screens under 640px they stack, full width. The input needs a visible 3:1 border, visible focus ring, an accessible label (visually hidden is fine) plus a placeholder of "Enter your email".
3. States: validating (inline message for invalid email), submitting, success (replace the row with "You're in. Watch your inbox for field updates."), error (friendly message, input preserved). Use aria-live for status messages. Fire an analytics event "newsletter_signup" if analytics exists in the project; otherwise skip.
4. Hero subline: change "FOLLOW ALURE LLC FOR MORE." to "HANDS-FREE JAPANESE BEETLE CONTROL. GET FIELD UPDATES AND LAUNCH NEWS.", with no "LLC" and no trailing period. Keep the headline "Eliminate Japanese Beetles." exactly as is, including its period.
5. Under the form add a small text link: "Growers: request a pilot" linking to /contact. Keep it visually quiet.
6. Logo: if the wordmark "Alure" has a trailing period in the text or SVG, remove it. If it is baked into an image asset, tell me which file so I can supply a new one, and do not edit the image.
7. Keep "LLC" in the footer and legal text. Only remove it from marketing copy in the hero.

Constraints: keep the hero background photo and overlay, the headline styling, and the nav as they are. Make sure the overlay keeps text contrast at least 4.5:1. Do not touch other sections.

Acceptance: at desktop and 375px widths the hero shows headline, subline, a single aligned email-and-button row, and the small grower link; Learn More no longer exists anywhere on Home; submitting a valid email subscribes through the existing provider and shows the success message.
```

### Prompt 4: Beetle squish on successful signup (note 9)

```text
Prerequisite: the NewsletterForm from the hero rework exists.

Add a small, playful confirmation animation to NewsletterForm: when a signup succeeds, a stylized beetle (inline SVG in the brand's green) appears on the button, gets squished (scale-Y down with a quick bounce), and fades, then the success message appears.

Rules:
- Trigger only after the subscribe request succeeds, never on click, so users are not told they subscribed before it worked.
- Total duration under 900ms. Use CSS keyframes or the Web Animations API on an inline SVG component named SquishBeetle. No animation libraries and no video or GIF files.
- Respect prefers-reduced-motion: skip the animation and show the success text immediately.
- The text success message must always appear, so the animation is decoration only.
- It must not shift the layout (reserve the space) and must not block a second submission attempt after an error.
- No sound.

Acceptance: success shows the squish then the message; error shows no animation; with reduced motion enabled there is no animation; Lighthouse and console show no new warnings.
```

### Prompt 5: "What Alure is" section and press section rename (note 5)

```text
Goal: add a short product explanation to Home, between the hero and the press section, and clean up the press section naming.

1. Create a HowItWorks section component placed directly after the hero and before the press section. Content: a heading "How Alure works", then three steps in a row (stacked on mobile): "1. Attract" (a dual lure draws Japanese beetles to the net), "2. Land" (beetles settle on the treated netting), "3. Eliminate" (use the exact wording already on the Demo page, and nothing stronger, since efficacy claims need regulatory review). Pull wording and any facts from the existing Demo page so the two never disagree; do not invent new claims, numbers, or timings. Add one product image from the existing Demo images (lazy-loaded, with alt text) and a text link "See the full demo" to /demo.
2. Do not copy the Demo page's copy wholesale. This section must stay under about 90 words.
3. Rename the press section heading "Latest News & Updates" to "In the press" and its subline to "Coverage of Alure and our Minnesota field trials." Keep the dates on each card.
4. Press card thumbnails: show the outlet's name as a small label if available; keep the images, but use object-fit: cover with a consistent aspect ratio so they align.
5. Use existing design tokens, spacing and the gradient accent. Keep the dark theme.

Constraints: do not touch the hero, blog section, or Demo page. No new dependencies.

Acceptance: Home order is hero, How Alure works, In the press, then the remaining sections. The new section is readable and stacked at 375px width. No layout shift on image load.
```

### Prompt 6: Move blog to News and add a "From the field" social strip (note 6)

```text
Goal: the three blog posts ("How We Scaled Our Newsletter to 1,100 Subscribers...", "Summer 2024 Research Recap", "Top 5 Lessons from MN Cup") move to the News page, and Home gets a lightweight social strip instead of the blog cards.

1. News page: render the blog posts there, below any press content that belongs on that page. Reuse the existing BlogCard. Keep their links working.
2. Home: remove the "Latest Blog Posts & News" section. Replace it with a "From the field" section: a row of up to 4 SocialCards plus a "Follow us" link row for [INSTAGRAM URL] and [LINKEDIN URL].
3. SocialCard is our own component, not an iframe embed. Data comes from a typed local file (src/data/social.ts or similar) with fields: platform, postUrl, imageUrl, caption (max 120 chars), date. I will fill the data; seed it with 3 placeholder entries clearly marked TODO. Cards open the real post in a new tab with rel="noopener noreferrer". Show a small platform icon and the date.
4. Do not load Instagram or LinkedIn embed scripts or iframes. Add a short code comment explaining why (theming, page speed, blocked scripts, layout shift).
5. Cards: equal height, image on top with a fixed aspect ratio (4:5 or 1:1), left-aligned text, no justified text, action pinned to the bottom.
6. Add a News link target in the nav if it is not already there, with an active state for the current route.

Constraints: do not alter the hero or the new HowItWorks section.

Acceptance: blog posts appear on /news and nowhere else on Home; Home shows the From the field strip with working outbound links; no third-party scripts added; passes at 375px.
```

### Prompt 7: Demo photos and copy cleanup (note 10)

```text
Goal: refresh the Demo page gallery and tighten the copy.

1. Replace the four gallery images with the new ones I will drop into [IMAGE FOLDER PATH]. Keep the rounded-card style, use object-fit: cover with one aspect ratio, serve optimized sizes (next/image or srcset), lazy-load below the fold, and give each image meaningful alt text. Add an optional caption field (location and date), left empty for now.
2. Copy: in the "Japanese Beetle Prevention, Reinvented." paragraph, do NOT change the wording yet, but list for me every claim that includes: a dollar figure, "harmful pesticides", "kill pollinators", "eco-friendly", "environmentally safe", "safe", or any efficacy number or timing. Output a table: claim, file, line. I will have our regulatory consultant review them before they change.
3. Mark the "$1,000" figure with a TODO comment asking for a source and a unit (per acre, per season, etc.).

Constraints: only the Demo page and gallery component. No layout redesign.

Acceptance: new photos render crisp on desktop and mobile with no layout shift; the claims table is delivered in your reply.
```

### Prompt 8: Card, legend and form polish

```text
Goal: visual consistency fixes with no behavior changes.

1. BlogCard (now on /news) and PressCard: consistent image heights, top-aligned content, left-aligned text everywhere (remove text-align: justify), titles clamped to 3 lines, action button pinned to the card bottom using flex column and margin-top: auto. Same left alignment for all three cards.
2. Map density legend: reduce from six tiers to four, using one hue ramp (light to dark) that is distinguishable for red-green color blindness. Keep it readable on mobile, collapsible on small screens. Update the heat layer gradient to match. Do not change the underlying data.
3. All form inputs site-wide: border at least 3:1 contrast against the background, lime focus ring, labels above fields, consistent height.
4. Nav: add a visible active-route state. Style the Contact link as a pill button using the existing gradient token.

Constraints: no new dependencies; keep the dark theme and brand gradient.

Acceptance: screenshots at 1440px and 375px show aligned cards, a readable four-tier legend, visible form borders, and an active nav state.
```

### Prompt 9: Regression and mobile QA

```text
Do not change features. Review the whole site at 375px, 414px, 768px and 1440px widths and report problems.

Check on every route (Home, Map, Demo, News, Contact):
- Horizontal scroll, clipped text, overlapping elements.
- Mobile menu opens above all content including the map; closes on navigation.
- Navigating between all routes leaves no stray elements (especially the map).
- Newsletter form: valid, invalid, success, error states.
- Contact form: validation, success, error, honeypot.
- Every link and button goes somewhere; list any dead ones.
- Images have alt text; no layout shift when images load.
- Console errors and warnings on each route.
- Keyboard: tab order, visible focus, form usable without a mouse.
- Run Lighthouse (mobile) on Home and Map and report performance, accessibility and best-practices scores.

Output a table: route, viewport, problem, severity, file suspected. Fix only issues rated high severity and list what you changed.
```

## Assumptions and open questions

- Routes: I assumed /, /map, /demo, /news, /contact from the nav. Prompt 0 verifies this.
- Where "Who are we?" and the contact form live: unclear from the images. Prompt 2 handles either case.
- Newsletter provider: which one holds your subscribers today (Substack, Beehiiv, Mailchimp, other)? Prompt 3 reuses it, but the inline form approach depends on the answer.
- Contact destination and sender: which inbox, and which email service should send from the site?
- Logo period: is there really one after "Alure"? If it is in an image file, you will need a new logo asset.
- Social accounts: which Instagram and LinkedIn pages, and which 3 to 6 posts to feature first?
- Subscriber count: the blog title says 1,100. If the current number is higher, a "Join 1,100+ growers and gardeners" line near the signup is worth adding, once confirmed.
- Demo photos: I need the new images, plus a source for the "$1,000" cost claim.
- Claims review: I flagged safety and pollinator wording because it could conflict with an unregistered pesticide product. Please run the claims table from Prompt 7 past Tim Dotson. I am not giving legal or regulatory advice.
