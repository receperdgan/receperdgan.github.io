# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at http://localhost:5173.
- `npm run build` — `tsc -b` (project-references build of `tsconfig.app.json` + `tsconfig.node.json`) then `vite build`. Type errors fail the build.
- `npm run lint` — ESLint flat config (`eslint.config.js`).
- `npm run preview` — Serve the built `dist/` for local verification.
- No test runner is configured.

## Deployment

GitHub Pages serves this as a user site (`receperdog.github.io`) from the `/docs` folder of `main`. Two deploy paths exist and they conflict — use the README path:

1. `npm run build` → produces `dist/`.
2. `cp -r dist/* docs/` → overwrite the served folder.
3. Commit `docs/` and push to `main`.

`package.json` also defines `npm run deploy` (`gh-pages -d dist`), which would publish from a `gh-pages` branch. Don't mix the two: the Pages setting currently points at `/docs` on `main`, so `gh-pages -d dist` won't take effect and will leave orphan state.

After every build copy, verify `docs/` contains: `index.html`, `favicon.svg`, `.nojekyll` (via `public/`), `assets/`, `images/`, and `404.html` (see SPA routing below). No `files/` — the CV PDF was deliberately removed (personal phone number).

## Architecture

Single-page editorial site — `App.tsx` renders `<Nav />`, then `<Masthead />`, `<Work />`, `<Writing />`, `<Projects />`, `<Contact />`, `<Footer />` stacked in one `<main>`. Nav links (`#work`, `#writing`, `#projects`, `#contact`) are anchor scrolls, not routes. There is no router.

- **Theming**: `useTheme` hook (`src/hooks/useTheme.ts`) owns `theme` state, toggles the `dark` class on `document.documentElement`, and persists to `localStorage`. Initial read prefers saved value, then falls back to `prefers-color-scheme`. Tailwind `darkMode: 'class'` relies on this class.
- **Content lives in data modules** under `src/data/` (`experience.ts`, `projects.ts`, `writing.ts`), not in component bodies. Updating the site means editing those files — TSX components are purely presentational.
- **Design system**: Inter + JetBrains Mono variable fonts (self-hosted via `@fontsource-variable`). Single accent color (`accent` → emerald `#10b981`) in `tailwind.config.js`. Max page width `max-w-page` (56rem) and reading width `max-w-prose` (68ch) are custom tokens.
- **GitHub Pages SPA hack**: `index.html` contains the spa-github-pages redirect script, and a `404.html` mirrors the SPA entry so direct deep links work. If you regenerate `docs/`, make sure `404.html` is present — the build doesn't produce it automatically; it has to be carried over (historically via commit `d42c366`).
- **Vite base**: `base: '/'` in `vite.config.ts` is required for a user site (`<username>.github.io`). Do not change to a subpath unless this becomes a project site.

### Folder conventions

- `src/components/<Component>.tsx` — flat section components (`Nav`, `Masthead`, `Work`, `Writing`, `Projects`, `Contact`, `Footer`, plus the shared `Section` wrapper). No nested page/subcomponent hierarchy.
- `src/data/*.ts` — typed, `as const` data arrays. This is where all content (experience, projects, article list) is authored.
- `src/hooks/*.ts` — custom hooks (`useTheme`).
- `public/` — static assets served at the site root (`favicon.svg`, `.nojekyll`, `images/`).

## Conventions

- TypeScript strict mode is on with `noUnusedLocals` and `noUnusedParameters` — dead code fails `tsc -b`. Data modules use `readonly` arrays and `as const`.
- React 19, functional components only, `StrictMode` enabled in `main.tsx`.
- Styling: Tailwind utility classes inline. Dark-mode variants via `dark:` prefix. Mono/sans font swap via `font-sans` / `font-mono` utilities.
- Named exports for all components and data modules; `App` is the only default export.
- Accent color usage is sparing by design — one emphasized phrase in the masthead, link hover state, and scattered rule-lines. Don't sprinkle green more broadly.
