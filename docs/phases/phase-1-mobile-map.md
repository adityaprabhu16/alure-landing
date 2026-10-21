# Phase 1: Mobile map

Priority: P0. Feedback note 7.

Depends on: [phase-0-code-map.md](phase-0-code-map.md). No other phase.

One session. Do not restyle the legend colors or change heat data. That work is phase 8.

## Goal

On a phone, the map page scrolls, the menu opens above the map, and leaving `/map` leaves no map tiles on the next page. The beetle-count field does not look invalid before the visitor touches it.

## Read first

- `portfolio-app/src/routes/Map.js`
- `portfolio-app/src/components/MapStyles.css`
- `portfolio-app/src/components/NavbarStyles.css` (`.header`, `.nav-menu`, `.hamburger`)
- `portfolio-app/src/components/Navbar.js`

## Code facts

- The map is `MapContainer` in `Map.js`. It unmounts with the route. Still confirm in the browser that `.leaflet-container` is gone after navigation. If a pane survives, remove it in the unmount path. Do not invent a second map instance.
- `.header` is `position: fixed; z-index: 10`. The open mobile menu is `position: absolute; z-index: -3` inside that header.
- Leaflet panes and controls use high z-index values, and `.leaflet-container` does not create an isolated stacking context, so those values compete with the header. `.heat-map-legend` is `z-index: 1000`. Loading and empty states are `z-index: 1500`.
- Under 768px the form sits under the map inside `.form-section` with `max-height` and `overflow-y: auto`. That nested scroller fights the page.
- `select:invalid` in `MapStyles.css` paints `#dc3545` on load. The selector uses `:not([value=""])`, which checks the HTML attribute. The required `<select>` in `Map.js` is a React controlled field and has no such attribute, so the rule matches immediately.

## In scope

1. Diagnose, then fix. Before editing, state which of these are true, with file and line: menu under the map, map node surviving route changes, `100vh` / fixed height ignoring the browser bar, touch scroll trapped in the map, nested form scroll.
2. Put the map wrapper in its own stacking context (`isolation: isolate` on the map section, and a z-index below the header). Header and open mobile menu must paint above map panes, the legend, and Leaflet controls. Raise the mobile menu within the header; `z-index: -3` cannot stay.
3. Under 768px: map on top at about `60dvh`, form below it in normal page flow, no `max-height` scroll container on the form. Legend stays readable and can collapse. Do not change the desktop grid.
4. One-finger drag scrolls the page. Map pan takes a deliberate gesture (two fingers, or a tap-to-activate overlay). Call `invalidateSize` after layout changes if the map draws at the wrong size.
5. Show the red border only after blur or a submit attempt, not on first paint. Keep the required attribute.

## Out of scope

- Desktop layout and the visual design of the page.
- Heat aggregation, radius, blur, and the six-color gradient in `HeatMapLayer`.
- Recoloring the legend. Phase 8 reduces it to four single-hue tiers.
- Hero, news, contact, and demo.
- Moving or hiding the geocoding key. Do not copy it into another file.

## Files you may change

- `portfolio-app/src/routes/Map.js`
- `portfolio-app/src/components/MapStyles.css`
- `portfolio-app/src/components/Navbar.js`
- `portfolio-app/src/components/NavbarStyles.css`

If a fix truly requires another file, say why in the session log before editing it.

## Acceptance

Check at 375px and 414px wide, and once at desktop width to confirm the desktop layout did not move.

- From `/map`, the mobile menu opens above the tiles and the legend.
- Navigate from `/map` to Home, Demo, News, and Contact. No tile pane, attribution bar, or legend remains.
- Navigate back to `/map`. One map, no console error from a double-created map.
- One finger scrolls the page. The sighting form is fully reachable without a nested scroller.
- Number of Beetles has no red border on load. It shows an error after blur or submit when left empty.
- Desktop map and form still sit side by side.

## Session log

- Date: Oct 20, 2026
- Changed: `Map.js`, `MapStyles.css`, `NavbarStyles.css`. Isolated the map section and Leaflet container below the header. Raised the mobile menu to `z-index: 1` and the hamburger to `z-index: 2`, and set the menu height to `100dvh`. Under 768px the map is `60dvh`, the sighting form is in normal page flow, dragging waits for "Move the map", and the legend starts collapsed behind "Show density". The beetle-count select turns red only after blur or a submit attempt. The 480px and 360px breakpoints were included so they do not put the short fixed height and nested scroller back.
- Still blocked: Nothing in this phase. Confirmed in the browser at 375px, 414px, and 1440px. Leaving `/map` removes the Leaflet container. Desktop stays two columns.
