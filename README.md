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
- Motion: smooth inertial scrolling (Lenis), page transitions, word-by-word headings, curtain image reveals with light parallax,
  staggered cards, animated figures, header that hides on scroll with a reading-progress line. Respects reduced motion.
- Contact page with a validated form that opens a ready-to-send WhatsApp or e-mail message (no server needed).
- Real photo of the building (facade section) and a practical-info grid on the hotel and rooms pages.
- Fully responsive with a call/WhatsApp bar on phones; keyboard-accessible menus, gallery lightbox and FAQ.
- schema.org Hotel data, per-page titles and `hreflang` alternates for SEO.

## Content sources and things to confirm with the hotel

Facts come from the hotel's own website (lacavesimsonhotel.com, archived November 2023), public map listings and
18 public guest reviews on Africabz (2018–2023): address, phone numbers, e-mail, PO box, room categories, banquet hall
(300+ guests), modular meeting room, local-cuisine restaurant and snack bar, wheelchair access, security equipment.
The five testimonials on the page are real quotes from those reviews, with first name, date and source.

Please confirm before going live:

- **Photos**: `public/images/facade.jpg` is the hotel's own photo (from its 2015 website). Its other published photos are too low
  quality to use, so the remaining images are illustrative stock photos (Unsplash licence). Replace them with new photography.
- **Room prices** are shown as "Tarif sur demande". Add `price` to each room in `src/config/site.ts` if the hotel wants them public.
- The e-mail address `contact@lacavesimsonhotel.com` dates from the 2015 website and the domain currently returns an error.
- The WhatsApp button uses **+237 657 39 01 12** (number listed on Africabz). Confirm the hotel uses WhatsApp on it.
- A 2022 review mentions a "VIP" night at 20 000 FCFA; prices are left as "sur demande" until confirmed.
- Bar and restaurant wording is intentionally general; adjust to the real menu and opening hours.

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.your-hotel.com`) to the public URL before building:
share links use it to build the absolute address of the preview image. On Vercel it falls back to the project's production domain.

### Logo, favicon and app icons

The hotel's official logo is used as an emblem in the header and footer (`public/logo-mark.png`, plus `logo-mark-dark.png` when the
emblem has black parts), sized in `src/config/brand.ts`. Icons are generated from the same emblem:
`src/app/favicon.ico`, `icon.png`, `apple-icon.png`, and `public/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`
(installable web app, see `src/app/manifest.ts`). `robots.txt` and `sitemap.xml` (both languages with `hreflang`) are generated at build time.
The emblems were cut from low-resolution logo images; replace the files above with vector or high-resolution exports when available.

### Share previews (WhatsApp, Facebook, X, LinkedIn)

Each language has a 1200×630 image in `public/` (`og-fr.jpg`, `og-en.jpg`: the hotel's building photo, logo mark, name, tagline and phone).
Titles and descriptions come from `src/content/fr.ts` and `src/content/en.ts` (`name`, `tagline`, `description`, and each page's `intro`).
Keep `description` under about 160 characters so previews are not cut off. Test a link with the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) after deploying; WhatsApp caches previews, so use a new URL query to refresh.
