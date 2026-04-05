# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Astro dev server at `localhost:4321`
- `npm run build` — build to `./dist/`
- `npm run preview` — preview built site locally
- `npm run astro check` — type-check `.astro` files (via `@astrojs/check`)

There is no test runner or linter configured.

## Architecture

This repo is a personal site / CV hosted at `https://www.rach.im` (configured in `astro.config.mjs`) and deployed via **GitHub Pages from the `docs/` folder on `main`**.

### Two layers live in this repo

1. **Astro source** (`src/`) — a single-page CV/landing site.
   - `src/pages/index.astro` is the only route. It composes section components from `src/components/` (`LandingPage`, `SeasonedEngineer`, `Experience`, `Education`, `Contact`) inside `src/layouts/Layout.astro`.
   - `astro.config.mjs` sets `build.assets = 'assets'` so hashed assets land in `assets/` (not the default `_astro/`) to keep URLs tidy on GitHub Pages.
   - Astro's default build output is `dist/` (git-ignored). It is **not** wired to output directly into `docs/`.

2. **Published site** (`docs/`) — this is what GitHub Pages actually serves, and it is **committed**. It contains:
   - The built Astro site at the root (`docs/index.html`, `docs/assets/`, plus static files mirrored from `public/` like `CNAME`, `arif.jpg`, `arif-rachim-cv.pdf`, `robots.txt`).
   - Independently-built sub-apps mounted at sub-paths:
     - `docs/huso/` — HUSO (Homeschoolers United Science Olympiad) prep site with its own `dashboard.html`, `lessons/`, `data/`, `lib/`, compiled JS + sourcemaps, and `.d.ts` files. This is a separate TypeScript app that is built elsewhere and its output is dropped in.
     - `docs/stock-watch/` and `docs/todo-list/` — other standalone built apps.

   Because `docs/` is the deploy artifact, editing files directly under `docs/` (outside of `docs/huso`, `docs/stock-watch`, `docs/todo-list` which are their own projects) will be overwritten the next time the Astro site is rebuilt and copied in. Source-of-truth for the CV/landing page is `src/`.

### Publishing flow (implicit)

There is no CI config or script that automates `dist/` → `docs/`. When updating the landing page, run `npm run build` and then sync the contents of `dist/` into `docs/` (preserving the `huso/`, `stock-watch/`, `todo-list/` sub-directories), then commit `docs/`.

### TypeScript

`tsconfig.json` just extends `astro/tsconfigs/strict`. Ambient types live in `src/env.d.ts`. The compiled `.d.ts` / `.js.map` files under `docs/huso/` belong to the HUSO sub-app, not to the Astro site.
