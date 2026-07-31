# creative-portfolio

An interactive editorial portfolio — built to feel like a physical creative
director's archive (taped photographs, folders, contact sheets, handwritten
notes) rather than a template. Next.js 16 (App Router), TypeScript, Tailwind
CSS v4, GSAP + ScrollTrigger, and Lenis for smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything on the site — your name, project details, experience,
about copy, and contact links — lives in one file:

```
data/content.ts
```

Fields commented `EDIT ME` are placeholders you should replace. Every image
is a `{ src?, alt, caption? }` object: leave `src` unset to keep the
art-directed placeholder swatch, or add a file under `public/images/...`
and set `src` to that path to swap in a real photo.

## Structure

- `app/` — routes: the homepage (`page.tsx`) and case-study pages
  (`work/[slug]/page.tsx`)
- `components/sections/` — the homepage sections (intro, desk/archive,
  selected work, collage, about, experience, contact)
- `components/work/` — the six project-format cards (folder, contact
  sheet, magazine spread, mobile stack, clipped document, moodboard)
- `components/casestudy/` — case-study page building blocks
- `components/decor/` — reusable CSS-only physical details (tape, paper
  clips, binder clips, folder tabs, polaroid frames, handwritten notes,
  stamps, contact sheets, paper grain)
- `lib/` — GSAP setup, Lenis smooth-scroll provider, reduced-motion hooks

## Notes

- Respects `prefers-reduced-motion`: scroll-driven and drag animations are
  skipped in favor of the final, static layout.
- Drag interactions are pointer-fine only; touch devices get tap/scroll
  instead.
- Case-study routes are statically generated from `data/content.ts` via
  `generateStaticParams`.
