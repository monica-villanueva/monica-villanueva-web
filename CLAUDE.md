# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Vite dev server with HMR
- `npm run build`: production build into `dist/`
- `npm run preview`: serve the built `dist/` locally
- `npm run lint`: ESLint (flat config in `eslint.config.js`, with react-hooks and react-refresh plugins)

There is no test suite and no TypeScript. The source is plain JSX.

## Architecture

This is a personal portfolio site for Monica Villanueva, built with React 19, Vite, and React Router v7. It is a client-side SPA.

- **Routing** (`src/App.jsx`): `BrowserRouter` with one layout route (`components/Layout.jsx`: Navigation + `<Outlet>` + Footer) and three child pages: `/` (Home), `/professional`, `/personal`. To add a page, add a `<Route>` here and a `NavLink` in `components/Navigation.jsx`.
- **Content lives in the page files as data.** Each page defines module-level constant arrays (for example `HISTORY`, `EDUCATION`, `INTERESTS` in `Professional.jsx`, and `TABS`, `BOOKS`, `TRAVEL` in `Personal.jsx`) and maps over them to render cards. Content edits usually mean changing these arrays, not the JSX. The Personal page switches between its Books, Travel, and Volunteering tabs with `useState`.
- **The site is intentionally "ageless"** so it matches Monica's resume and LinkedIn profile. Don't add years-of-experience counts, career-length phrases like "two decades", or dates on `HISTORY` entries. Recent `EDUCATION` years are fine.
- **Icons are inline SVG components, not image files:**
  - `PlaceholderSvg` picks an icon from a `VARIANTS` map by a `variant` key (`code`, `globe`, `cat`, `river`, and others) and colors it through `currentColor` using the `color` prop, which is usually a CSS variable. Most variants use a `0 0 100 100` viewBox. A variant that uses a different one must register it in the `VIEWBOX` map.
  - `CountryFlag` draws flags as SVG, keyed by country name. Those keys must match `TRAVEL[].destination` exactly, for example `'South Korea'` and `'Czech Republic'`.
  - A travel entry can set `image` (a PNG imported from `src/assets/`) and an optional `imageFit`. Entries with an `image` show that image; the rest fall back to `CountryFlag`.
- **Styling:** plain CSS, with one `.css` file next to each page or component, using BEM-style class names (`travel-card__image--2`, `nav__link--active`). Global styles and design tokens are in `src/index.css`:
  - Components should use the semantic tokens (`--color-primary`, `--color-accent`, `--color-text`, and so on), not the raw palette colors.
  - The `.container` class is capped at `--max-width: 1120px`.
  - The mobile breakpoint is `@media (max-width: 768px)`. `Professional.css` also has a 480px breakpoint.
  - `App.css` is empty and kept only as a stub.
- **`index.html`** loads the fonts from Google Fonts and the Google Analytics gtag (`G-9KCPW80HSF`). There are two fonts, set in `index.css`: `--font-sans` (DM Sans) for body text and `--font-heading` (Outfit) for `h1`–`h3` and title classes that aren't heading elements (`.nav__logo`, `.timeline__title`, `.highlight__title`, and so on). A new title class should set `font-family: var(--font-heading)`.
