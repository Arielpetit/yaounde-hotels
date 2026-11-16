# La Cave Simson Hôtel — website

Premium one-page website for **La Cave Simson Hôtel**, Nkolbisson, Yaoundé VII (Cameroon).

Built with Next.js 15 (App Router), Tailwind CSS v4, Framer Motion and Lenis smooth scrolling.

## Branches

This repository hosts three hotel sites that share one component system:

| Branch | Hotel | Location |
| --- | --- | --- |
| `main` | La Cave Simson Hôtel | Route de Nkolbisson, carrefour MEEC, Yaoundé VII |
| `massao-palace` | Massao Palace Hôtel | 160 rue Nana Tchakounté, Tsinga, Yaoundé |
| `moosaa` | Hôtel Mo'o Sa'a | Nkolbisson, nouvelle route, Yaoundé |

Each branch changes only the brand layer: `src/content/fr.ts` and `src/content/en.ts` (content in French and English),
`src/config/theme.css` (light and dark palettes), `src/config/brand.ts` (default theme), `src/config/fonts.ts` (typography),
`src/components/ui/Logo.tsx` (mark) and `public/images`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/fr`). The English site is at `/en`.

## Features

- Presentation site in **French and English** (`/fr`, `/en`) with a language switch and `hreflang` alternates
- **Light and dark mode** toggle, remembered per visitor, applied before first paint (no flash)
- Brand preloader, mask-reveal headlines, parallax hero with Ken Burns zoom
- Scroll-linked word reveal, count-up stats, infinite marquee
- Pinned horizontal room gallery (desktop) with room detail dialog
- Sticky image stack for experiences, amenity grid, masonry gallery with keyboard lightbox
- Real guest testimonials, practical-info FAQ, click-to-load Google Map with directions
- Contact section with WhatsApp, phone and e-mail; sticky call/WhatsApp bar on mobile
- schema.org Hotel data for SEO; fully responsive; respects `prefers-reduced-motion`

## Content sources and things to confirm with the hotel

Facts come from the hotel's own website (lacavesimsonhotel.com, archived November 2023), public map listings and
18 public guest reviews on Africabz (2018–2023): address, phone numbers, e-mail, PO box, room categories, banquet hall
(300+ guests), modular meeting room, local-cuisine restaurant and snack bar, wheelchair access, security equipment.
The five testimonials on the page are real quotes from those reviews, with first name, date and source.

Please confirm before going live:

- **Photos** in `public/images` are illustrative stock photos (Unsplash licence). Replace them with the hotel's own photography.
- **Room prices** are shown as "Tarif sur demande". Add `price` to each room in `src/config/site.ts` if the hotel wants them public.
- The e-mail address `contact@lacavesimsonhotel.com` dates from the 2015 website and the domain currently returns an error.
- The WhatsApp button uses **+237 657 39 01 12** (number listed on Africabz). Confirm the hotel uses WhatsApp on it.
- A 2022 review mentions a "VIP" night at 20 000 FCFA; prices are left as "sur demande" until confirmed.
- Bar and restaurant wording is intentionally general; adjust to the real menu and opening hours.

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` to the public URL for correct social previews.
