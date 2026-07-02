# Aziz Khemiri — Portfolio

Portfolio built with Next.js. Visitors choose between
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


## Editing content

All CV content is in `data/*.ts`. Each experience/project entry has an
`audience` field:

- `"business"` — only shown on `/hire-me`
- `"personal"` — only shown on `/projects`
- `"both"` — shown on both

Add, remove, or edit entries there; no component changes needed.

