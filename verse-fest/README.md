# VERSE — Fest Website

A dark-themed, mono/display-type site for a college tech + cultural fest, built with
**React + Vite + Tailwind CSS**.

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File → Open Folder`).
2. Open the built-in terminal (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

You need **Node.js 18+** installed. Check with `node -v`; if it's missing, get it from
[nodejs.org](https://nodejs.org).

## Project structure

```
src/
  data.js              ← all site content (stats, events, schedule, team, FAQ...) — edit this first
  App.jsx              ← assembles the page from the sections below
  components/
    Navbar.jsx
    Section.jsx        ← shared "01 LABEL" numbered heading wrapper
    About.jsx           (section 01)
    Events.jsx          (section 02 — accordion of flagship tracks)
    Schedule.jsx        (section 03 — 3-day columns)
    Partners.jsx        (section 04 — sponsor tiers + marquee)
    Register.jsx        (section 05 — registration form, client-side only)
    Team.jsx             (section 06 — core committee grid)
    FAQ.jsx               (section 07 — accordion)
    Footer.jsx
```

## Editing content

Almost everything on the page (stats, event tracks, schedule items, sponsors, team members,
FAQ) lives in `src/data.js`. Change the values there and the page updates — no need to touch
component files unless you're changing layout or behavior.

## Wiring up the registration form

`Register.jsx` currently just logs the submitted form to the console and shows a success
state. To actually collect entries, swap the `handleSubmit` function for a call to:
- A form backend like [Formspree](https://formspree.io) or [Getform](https://getform.io) (fastest to set up), or
- Your own API / a service like Supabase or Firebase.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub Pages, or any static host.

## Notes

- Colors, fonts, and spacing tokens live in `tailwind.config.js` (`ink`, `panel`, `line`, `lime`, `dim`).
- The footer map uses an embedded OpenStreetMap iframe — swap the `src` URL/bbox for your actual
  campus coordinates, or replace with a Google Maps embed if you prefer.
- All interactive bits (nav mobile menu, event accordion, FAQ accordion, registration form) are
  plain React state — no extra libraries required.
