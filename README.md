# Aziz Khemiri — Portfolio

A minimal, dual-mode portfolio built with Next.js. Visitors choose between
**`~/projects`** (personal & open-source work) and **`~/hire-me`** (professional
experience, skills, certifications, contact).

Design direction: warm cream / charcoal theme with a single terracotta accent,
serif headings paired with a monospace "terminal" motif for labels — a nod to
the CLI tools and networking background behind the CV.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (theme tokens as CSS variables in `app/globals.css`)
- **next-themes** for the light/dark toggle
- **lucide-react** for icons
- Content lives in plain TypeScript files under `data/` — no CMS

## Structure

```
app/
  layout.tsx        Root shell: fonts, theme provider, header/footer
  page.tsx           Landing page — intro + mode picker
  projects/page.tsx  "My Projects" mode
  hire-me/page.tsx   "Hire Me" mode

components/          UI building blocks (Header, Hero, ProjectCard, etc.)
data/                Content: profile, experience, projects, skills, certifications
lib/                 Shared helpers (audience filtering)
```

## Editing content

All CV content is in `data/*.ts`. Each experience/project entry has an
`audience` field:

- `"business"` — only shown on `/hire-me`
- `"personal"` — only shown on `/projects`
- `"both"` — shown on both

Add, remove, or edit entries there; no component changes needed.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero
config needed, it's a standard Next.js app.
