# Mudassor Ahmed Chowdhury — SQA Portfolio

A fully responsive personal portfolio website for a **Software Quality Assurance (SQA) freelancer** — specializing in manual QA, API testing, and web application testing.

Built with **React + TypeScript + Vite + Tailwind CSS + shadcn/ui**. One continuous scrolling page (no hidden tabs) with a sticky, scroll-spy nav, animated stat counters, skeleton loading states, and a dark/light theme toggle.

> **Live site:** _add your Vercel / Netlify / GitHub Pages URL here_ &nbsp;·&nbsp; **LinkedIn:** [in/mudassor](https://www.linkedin.com/in/mudassor/)

A legacy, dependency-free single-HTML-file version of this site is kept at [`portfolio.html`](portfolio.html) for reference — it's independent of the app described below and isn't part of the build.

---

## ✨ Features

- **One scrolling page, 8 sections** — Overview, About, Skills, Services, Projects (Solo / Contributions filter), Experience & Certifications, Publications, Testimonials
- **Sticky nav with scroll-spy** — the active section highlights as you scroll; nav links and the Overview's teaser cards smooth-scroll to their section (no hidden/tabbed views)
- **Dark / light mode** with saved preference (`localStorage`)
- **Skeleton loading** (shadcn/ui `Skeleton`) — card-shaped placeholders on first mount, plus per-image skeletons that fade to the real photo once it loads
- **Animated stat counters**, triggered once the metrics row scrolls into view
- **Fully responsive** — mobile-first Tailwind layout, no horizontal scroll
- **Consistent card design** — every card (skills, services, projects, publications, testimonials, certification) shares the same title/icon/badge alignment via one shared component

---

## 🛠️ Tech

| Concern | Implementation |
|---|---|
| Framework | React 19 + TypeScript, built with Vite |
| Styling | Tailwind CSS v4 (CSS-variable design tokens for both themes) |
| Components | shadcn/ui (Card, Button, Badge, Skeleton, Tabs, Avatar, Separator) |
| Icons | [lucide-react](https://lucide.dev/) |
| Theme toggle | React context + `localStorage`, class-based Tailwind dark mode |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |

---

## 🚀 Run locally

Requires [Node.js](https://nodejs.org/) 20+.

```bash
npm install       # install dependencies
npm run dev       # start the dev server (with hot reload)
npm run build     # type-check and build for production into dist/
npm run preview   # locally preview the production build
```

---

## ✏️ Customize

All content lives in typed data files under [`src/data/`](src/data/) — edit these instead of the components:

| File | What it holds |
|---|---|
| `nav.ts` | Section ids and nav labels |
| `stats.ts` | The four hero metric tiles |
| `about.ts` | Bio paragraphs, testing philosophy quote, education line, "what I bring" checklist |
| `skills.ts` | Skill groups and their tags |
| `services.ts` | Service cards (icon, title, description) |
| `projects.ts` | Project cards (Solo QA / Contributions) |
| `experience.ts` | Work history timeline + certification |
| `publications.ts` | Publications & guides |
| `testimonials.ts` | Recommendations (quote, name, role, photo) |

Images and documents live in [`public/`](public/) — reference them with a root-relative path (e.g. `/images/testimonials/name.png`).

**Resume:** the hero's "Download résumé" button links to `/resume.pdf`, but no resume file has been added yet — drop a real `resume.pdf` into `public/` to make that link work.

---

## 🌐 Deploy

`npm run build` outputs a static site to `dist/`. That folder deploys with zero extra config to **Vercel** or **Netlify** (both auto-detect Vite). For **GitHub Pages**, you'll additionally need to set a `base` path in `vite.config.ts` matching your repo name (unless deploying to a custom domain / user page).

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/mudassor](https://www.linkedin.com/in/mudassor/)
- **Fiverr:** _add your gig link_
- **Email:** Amudassor@gmail.com

---

## 📄 License

Personal portfolio © Mudassor Ahmed Chowdhury. You're welcome to use the structure as a reference for your own portfolio.
