# Coding Brigade BVRIT — Website

Official website of **Coding Brigade BVRIT (CBB)**, the student-driven coding club at BVR Institute of Technology, Narsapur.

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **React Router 7** — client-side routing, code-split per route
- **framer-motion** — UI animation
- **GSAP** — the "What We Do" card stack (`CardSwap`)
- **OGL** — the WebGL gallery on the home page (`CircularGallery`)
- **EmailJS** — contact form delivery
- Event content is static, defined in `src/data/` (previously pulled from a Google Sheet)

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
npm run lint       # eslint
```

## Project layout

```
public/            static assets served as-is (images, fonts, video, posters)
src/
  App.jsx          route definitions (lazy-loaded pages)
  main.jsx         app entry
  index.css        Tailwind entry + global styles / keyframes
  pages/           Home, About, Team, Events, Contact
  components/      shared UI (navbar, footer, cards, gallery, timeline, …)
  hooks/           useMediaQuery, useCountdown
  data/            static content (team roster, about copy, past events)
  utils/           fetchEvents (Google Sheet), formatDate
```

## Editing content

- **Team roster** — `src/data/team.js`
- **About page copy, mentors, activity cards** — `src/data/about.js`
- **Past events timeline** — `src/data/pastEvents.js`
- **Featured event, sub-events, schedule, registration steps** — `src/data/techsurge.js`

## Deployment

Configured for **Vercel** (`vercel.json` — SPA rewrite + asset cache headers).
`public/_redirects` provides the equivalent SPA fallback for Netlify / Cloudflare Pages.
