# Phase 2: Contact button and form

Priority: P0. Feedback notes 8 and 11.

Depends on: [phase-0-code-map.md](phase-0-code-map.md). Can run right after phase 1. Do not start phase 3 until the unblocked work here is done, because the hero will reuse this submit path.

## Goal

The Contact control on the contact page does something, and the form reads as a message to Alure rather than a newsletter signup. Sending mail from a server stays blocked until a sender is chosen.

## Read first

- `portfolio-app/src/routes/Contact.js`
- `portfolio-app/src/components/AboutContent.js`
- `portfolio-app/src/components/Form.js`
- `portfolio-app/src/components/FormStyles.css`
- `portfolio-app/src/routes/LawnWaitlist.js` (same `Form`)
- `portfolio-app/src/components/Footer.js` (public inbox text only)

## Code facts

- `/contact` already exists and is linked from `Navbar.js`. Do not add a route.
- `AboutContent` is rendered at the top of `Contact.js`. Its button is `<Link to="/contact">`, so on this page it navigates nowhere new. `About.js` also imports `AboutContent`, and that route is not mounted.
- `Form.js` already POSTs JSON to a Google Apps Script hardcoded in the file. On success the modal says "Thank you for joining our newsletter!" unless `successMessage` is passed. `LawnWaitlist.js` passes `fixedSubject` and its own success message. Keep that behavior working.
- Field borders in `FormStyles.css` are `rgba(255, 255, 255, 0.1)` on a dark fill.
- The footer shows `info@alurellc.com`. No code sends mail there.

## Unblocked work (do this now)

1. Give the form element an id such as `contact-form`.
2. Replace the dead Contact control. Preferred: a link or button that scrolls to `#contact-form`. Do not leave a `Link` to `/contact` on the contact page. If `AboutContent` stays shared with the unrouted About page, only render that control when the form id will exist (a prop from `Contact.js` is enough).
3. Default success copy for the general form is a message sent confirmation, not a newsletter confirmation. `LawnWaitlist` keeps the success string it already passes.
4. Client validation before submit: name, email, subject, and message required; email shape checked; message length capped. Show errors on submit, keep the visitor's input, and expose status with `aria-live`. The existing modal can stay if it meets that.
5. Labels stay tied to inputs with `htmlFor`. Borders at least 3:1 against the field background. Focus ring uses the existing lime gradient tokens (`#f5f193` to `#90ee90`), not a new color.
6. Do not add a hidden field that changes the Apps Script payload unless you have confirmed the script ignores unknown keys. Lawn waitlist and the map sighting POST must keep succeeding.

## Email

Do not add a mail sender. Inquiries stay rows in the existing contact sheet. Each row is categorized by where it was submitted and what the inquiry is. `subject` is stored as `Source: inquiry`, and the JSON also includes `source`. Contact uses `Contact`. The lawn waitlist uses `Lawn waitlist`. Phase 3 newsletter signups use `Newsletter`. Map sightings stay on their own sheet.

## Out of scope

- Hero, news, map, and demo.
- Newsletter copy on the hero (phase 3).
- Nav pill styling (phase 8).
- Rewriting safety or product claims in the footer.

## Files you may change

- `portfolio-app/src/components/AboutContent.js`
- `portfolio-app/src/routes/Contact.js`
- `portfolio-app/src/components/Form.js`
- `portfolio-app/src/components/FormStyles.css`
- `portfolio-app/src/components/Modal.js` and `ModalStyles.css` only if the status announcement cannot be done from `Form.js`

## Acceptance

- On `/contact`, activating Contact moves focus or scroll to the form.
- Empty submit shows validation errors and does not POST.
- A valid submit still hits the existing Apps Script. Success text does not say they joined the newsletter.
- `/lawnwaitlist` still submits with its fixed subject and its own success message.
- Input edges are visible on a bright screen. Keyboard focus shows the lime ring.
- No new dependency and no new environment variable.

## Session log

- Date: Oct 20, 2026
- Changed: `AboutContent.js`, `AboutContentStyles.css` (so the text link lays out as the existing button), `Contact.js`, `Form.js`, `FormStyles.css`. Contact scrolls to `#contact-form` and focuses the name field. Empty submit shows field errors and does not POST. A valid submit still posts to the existing Apps Script. Success copy is "Thanks. Your message is on its way to Alure." Lawn waitlist still has no subject field and keeps its own success message. Field borders are `rgba(255, 255, 255, 0.65)` with a `#90ee90` focus ring in CSS. Styles are scoped under `.form` so the map form is unchanged.
- Still blocked: Nothing. Email was dropped. Rows are categorized in the contact sheet as `Source: inquiry`. A labeled test row from the earlier verification can be deleted.
