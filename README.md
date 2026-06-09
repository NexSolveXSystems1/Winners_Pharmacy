# Winner Pharmaceuticals — Official Website

A modern, mobile-first marketing site for **Winner Pharmaceuticals**, a fully Liberian-owned pharmaceutical importer and distributor serving hospitals, clinics, pharmacies, and healthcare institutions across Liberia since **2005**.

Built with React and Vite. Fast, responsive, and easy to update — all business content lives in one data file.

---

## Overview

Winner Pharmaceuticals is **LMHRA-licensed** and operates **7 pharmacy branches** nationwide, with international supply partnerships and a weekly distribution scale of approximately **US $70,000**. This website presents the company story, services, branch network, product gallery, founders, and contact channels in a clean, professional experience.

**Developed by:** [NexSolveX Systems](https://github.com/NexSolveX)

---

## Features

| Feature | Description |
| --- | --- |
| **Single-page layout** | Smooth-scroll sections with active nav highlighting |
| **Light & dark mode** | Theme toggle with system preference support and persistence |
| **Founders section** | Photo and story of Mr. Victor Peah & Mrs. Fannie Peah |
| **Services showcase** | Importation, wholesale, retail, and supply chain |
| **Branch locator** | Seven locations with HQ flagging and contact details |
| **Filterable gallery** | Masonry grid with categories, lightbox, and mobile captions |
| **Partners** | International supplier spotlight (Laborate Pharmaceuticals India Ltd) |
| **WhatsApp contact** | Form opens a pre-filled WhatsApp message — no third-party email API |
| **Social links** | Facebook and WhatsApp in the footer |
| **Scroll animations** | Fade-in on scroll for a polished feel |
| **Fully responsive** | Optimized for mobile, tablet, and desktop |

---

## Tech Stack

- **React 18** — UI components
- **Vite 7** — dev server and production build
- **Lucide React** — icons throughout the site
- **CSS custom properties** — design system with light/dark themes
- **Google Fonts** — Plus Jakarta Sans & Inter

No backend required. The site builds to static files and can be hosted anywhere.

---

## Project Structure

```
winner-web/
└── winner-frontend/
    ├── public/              # Static assets (logo, gallery images, Founder.jpeg)
    ├── src/
    │   ├── components/      # Page sections & UI
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Founders.jsx
    │   │   ├── Services.jsx
    │   │   ├── Branches.jsx
    │   │   ├── Gallery.jsx
    │   │   ├── Partners.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── hooks/           # Theme, scroll spy, in-view animations
    │   ├── data.js          # ⭐ All editable business content
    │   ├── styles.css       # Global design system
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (comes with Node)

### Install & run locally

```bash
cd winner-frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```bash
cd winner-frontend
npm run build
```

Output goes to `winner-frontend/dist/` — upload this folder to your host.

### Preview the production build locally

```bash
npm run preview
```

---

## Updating Content

Most site copy, contact info, branches, gallery items, and social links are centralized in:

```
winner-frontend/src/data.js
```

### Common edits

| What to change | Where in `data.js` |
| --- | --- |
| Phone number | `PHONE` |
| Email, address, hours | `CONTACT_INFO` |
| Facebook / WhatsApp | `SOCIAL_LINKS` |
| Navigation sections | `NAV_LINKS` |
| Founders photo & bio | `FOUNDERS` |
| Branch list | `BRANCHES` |
| Services | `SERVICES` |
| Company timeline | `TIMELINE` |
| Gallery images | `GALLERY` + files in `public/` |

### Adding gallery images

1. Place the image in `winner-frontend/public/`
2. Add an entry to the `GALLERY` array in `data.js`:

```js
{
  id: "g22",
  src: "/your-image.jpeg",
  alt: "Descriptive alt text",
  caption: "Caption shown on hover / mobile",
  category: "Events", // Events | Products | Facilities
},
```

### Updating the Facebook link

```js
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/your-page",
  whatsapp: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
};
```

WhatsApp is automatically synced to `PHONE`.

---

## Contact Form (WhatsApp)

The contact form does **not** use EmailJS or a backend. When a visitor submits:

1. Name, email, and message are validated
2. WhatsApp opens with a pre-filled message to the business number
3. The visitor taps **Send** in WhatsApp to deliver it

This fits Liberia’s mobile-first market and requires zero API keys or monthly fees.

To change the message format, edit `buildWhatsAppContactUrl()` in `data.js`.

---

## Brand Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Navy | `#22577A` | Headings, brand depth |
| Teal | `#38A3A5` | Accents, links, CTAs |
| Green | `#57CC99` | Highlights, gradients |
| Light green | `#80ED99` | Badges, hero accents |
| Base | `#C7F9CC` | Soft backgrounds |

Defined in `styles.css` under `:root`.

---

## Deployment

This is a **static SPA**. After `npm run build`, deploy the contents of `dist/` to any static host:

- **Netlify** — drag & drop `dist/` or connect Git repo, build command `npm run build`, publish directory `dist`
- **Vercel** — same settings, root directory `winner-frontend`
- **GitHub Pages** — use `base` in `vite.config.js` if serving from a subpath
- **cPanel / shared hosting** — upload `dist/` contents to `public_html`

Ensure the host is configured for **SPA fallback** (all routes → `index.html`) if you add client-side routing later.

---

## Browser Support

Modern evergreen browsers: Chrome, Firefox, Safari, Edge. Mobile Safari and Chrome on Android are first-class targets.

---

## License

Proprietary — © Winner Pharmaceuticals. All rights reserved.

---

## Contact

| | |
| --- | --- |
| **Headquarters** | Kakata-Highway, Monrovia, Liberia |
| **Phone / WhatsApp** | +231 770 128 959 |
| **Email** | winnerspharm@gmail.com |
| **Hours** | Mon–Sat: 8:00 AM – 6:00 PM |
