# Alinag Systems — Corporate Website

Premium, enterprise-grade marketing site for **Alinag Systems**, an IT services
and software development company.
Tagline: *Innovative Software Solutions for Modern Businesses.*

## Stack
- **Next.js 14** (App Router) + **React 18**
- **Tailwind CSS** with a custom "Obsidian & Cobalt" design system
- **Framer Motion** (scroll reveals, page-load orchestration, the signature topology)
- **Lucide React** icons
- **next-themes** for dark / light mode
- SEO metadata, Open Graph, JSON-LD, dynamic `sitemap.xml` + `robots.txt`
- Fully responsive, WCAG-minded (skip link, focus rings, reduced-motion, semantic landmarks)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
```
Build for production:
```bash
npm run build && npm start
```

## Design system
- **Palette:** Obsidian `#0A0C12` / off-white `#F6F8FB`, cobalt `#2E6BFF`,
  iris `#7B61FF`, aqua `#35E0D8` (rare highlight).
- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (labels/data).
- **Signature:** an animated "system topology" (connected nodes on a blueprint
  grid) plus a monospace technical-precision language used throughout.

## Structure
```
app/            App Router pages (home, about, services, contact) + SEO routes
components/
  layout/       navbar, footer, logo
  sections/     hero, services, capabilities, process, testimonials, cta, trust-bar
  ui/           button, reveal, section-heading, page-header, topology, icon
lib/            site content/config + utilities
```

## Editing content
All copy, services, stats, testimonials, and nav live in `lib/site.js` — edit
there and the whole site updates.

## Wiring the contact form
`app/contact/contact-view.jsx` handles submit on the client. Connect it to your
provider (Resend, Formspree, or a route handler at `app/api/contact/route.js`).

## Deploy
Optimized for **Vercel** (`vercel deploy`) or any Node host (`npm run build && npm start`).
