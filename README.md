# Aziz Khemiri — Portfolio

Portfolio built with Next.js. Visitors choose between
**`~/projects`** (personal & open-source work) and **`~/hire-me`** (professional
experience, skills, certifications, contact).

Design direction: warm cream / charcoal theme with a single terracotta accent,
serif headings paired with a monospace "terminal" motif for labels — a nod to
the CLI tools and networking background behind the CV.

## Getting started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Oussemasahbeni/portfolio-Oussema-Sahbeni

   ```

2. Install dependencies:
   ```cd your-portfolio
   npm install
   ```
3. Run the development mode:
   ```
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:3000/ to view the portfolio.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (theme tokens as CSS variables in `app/globals.css`)
- **next-themes** for the light/dark toggle
- **lucide-react** for icons
- Content lives in plain TypeScript files under `data/` — no CMS
- **Vercel Analytics:** Integrating Vercel Analytics to gain insights into user behavior, track page views, and measure the overall performance of the portfolio.

## Deployment

This portfolio is deployed using Vercel, ensuring seamless and reliable hosting. Check it out live at [https://aziz-engineer.vercel.app/](https://aziz-engineer.vercel.app/).


## Editing content

All CV content is in `data/*.ts`. Each experience/project entry has an
`audience` field.





