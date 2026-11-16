# La Cave Simson Hôtel — website

Premium one-page website for **La Cave Simson Hôtel**, Nkolbisson, Yaoundé VII (Cameroon).

Built with Next.js 15 (App Router), Tailwind CSS v4, Framer Motion and Lenis smooth scrolling.

## Branches

This repository hosts three hotel sites that share one design system:

| Branch | Hotel | Location |
| --- | --- | --- |
| `main` | La Cave Simson Hôtel | Route de Nkolbisson, carrefour MEEC, Yaoundé VII |
| `massao-palace` | Massao Palace Hôtel | 160 rue Nana Tchakounté, Tsinga, Yaoundé |
| `moosaa` | Hôtel Mo'o Sa'a | Nkolbisson, nouvelle route, Yaoundé |

Each branch changes only the brand layer: `src/content/fr.ts` and `src/content/en.ts` (content),
`src/config/theme.css` (light and dark palettes plus the brand's signature frame), `src/config/brand.ts` (default theme),
`src/config/fonts.ts` (typography), `src/components/ui/Logo.tsx` and `src/components/ui/Ornament.tsx` (marks) and `public/images`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/fr`). The English site is at `/en`.

## Pages

| Page | French | English |
| --- | --- | --- |
| Home | `/fr` | `/en` |
| The hotel (story, amenities, reviews) | `/fr/hotel` | `/en/hotel` |
| Rooms | `/fr/chambres` | `/en/chambres` |
| Services (restaurant, bar, events…) | `/fr/services` | `/en/services` |
| Gallery | `/fr/galerie` | `/en/galerie` |
| Contact & directions, FAQ | `/fr/contact` | `/en/contact` |

## Design

- Palette taken from the hotel's real branding: the "CsH" logo is sage green and silver, the banquet hall green and ivory.
- Marcellus (display, echoing the logo's classical capitals) with DM Sans for text; restrained type scale.
- Signature: the oval of the CsH medallion frames one featured image per page.
- Light mode by default, deep-moss dark mode; choice saved per visitor with no flash on load.
- Quiet motion only: fade-in on scroll, slow photo zoom on headers and hover.
- Fully responsive with a call/WhatsApp bar on phones; keyboard-accessible menus, gallery lightbox and FAQ.
- schema.org Hotel data, per-page titles and `hreflang` alternates for SEO.

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
