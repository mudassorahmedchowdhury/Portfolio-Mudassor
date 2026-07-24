# Mudassor Ahmed Chowdhury — SQA Portfolio

A fast, fully responsive personal portfolio website for a **Software Quality Assurance (SQA) freelancer** — specializing in manual QA, API testing, and web application testing.

Built as a single, self-contained HTML file. No build step, no dependencies — just open and host.

> **Live site:** _add your GitHub Pages / Netlify URL here_ &nbsp;·&nbsp; **LinkedIn:** [in/mudassor](https://www.linkedin.com/in/mudassor/)

---

## ✨ Features

- **Fully responsive** — works from 320px mobile up to ultrawide desktops, no horizontal scroll
- **Dark / light mode** with system detection and saved preference
- **Smooth animations** — scroll reveals, typing role text, animated counters (respects reduced-motion)
- **Complete sections** — Hero, About, Skills, Services, Projects (with Solo / Contributions filter), Testing Process, Work Experience timeline, Certifications, Publications, Testimonials, FAQ, Contact
- **Working contact form** with client-side validation (opens the visitor's email app; upgradeable to Formspree)
- **SEO-ready** — meta tags, Open Graph, Twitter cards, and Schema.org Person JSON-LD
- **Accessible** — semantic HTML, keyboard focus states, ARIA labels, alt text

---

## 🛠️ Tech

Intentionally dependency-free. Everything lives in one file:

| Concern | Implementation |
|---|---|
| Structure & interactivity | HTML + vanilla JavaScript |
| Styling | Hand-written CSS with design tokens (CSS variables) |
| Icons | Inline SVG |
| Animations | CSS + IntersectionObserver |
| Theme toggle | `localStorage` + `data-theme` attribute |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |

No frameworks, no npm install, no build — which makes it trivial to host anywhere.

---

## 🚀 Run locally

**Option 1 — Live Server (recommended)**
1. Open the folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. Edit and save — the browser auto-refreshes

**Option 2 — Just open it**
Double-click `index.html` to open it in any browser. (Live Server is nicer for editing because of auto-refresh.)

---

## ✏️ Customize

Search the file for `[EDIT:...]` markers to jump to each editable area:

| Marker | What to change |
|---|---|
| `[EDIT:LINKS]` | Email, Fiverr, GitHub, live URL |
| `[EDIT:HERO]` | Name, tagline, intro, photo |
| `[EDIT:STATS]` | Achievement counters |
| `[EDIT:EXPERIENCE]` | Work history timeline |
| `[EDIT:PROJECTS]` | Project cards (set `data-cat="solo"` or `"contrib"`) |
| `[EDIT:CERTS]` | Vendor certifications |
| `[EDIT:PUBS]` | Publications & guides |
| `[EDIT:TESTIMONIALS]` | Real client reviews (samples included — replace before publishing) |
| `[EDIT:CONTACT]` | Where the contact form sends |

### Adding images
Keep images in an `images/` folder next to `index.html`, then reference them like:
```html
<img src="images/profile.png" alt="Mudassor Ahmed Chowdhury">
```
Filenames are **case-sensitive** when hosted. Compress large images (e.g. via tinypng.com) to keep the site fast.

---

## 🌐 Deploy

**GitHub Pages**
1. Push this repo to GitHub
2. **Settings → Pages → Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Your site goes live at `https://<username>.github.io/<repo>/`

Make sure the main file is named exactly **`index.html`** in the repo root.

**Netlify**
Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant URL.

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/mudassor](https://www.linkedin.com/in/mudassor/)
- **Fiverr:** _add your gig link_
- **Email:** _add your email_

---

## 📄 License

Personal portfolio © Mudassor Ahmed Chowdhury. You're welcome to use the structure as a reference for your own portfolio.