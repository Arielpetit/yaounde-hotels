# Hôtel Mo'o Sa'a — website

Premium multi-page website for **Hôtel Mo'o Sa'a**, nouvelle route de Nkolbisson (opposite Collège Excellence), Yaoundé (Cameroon).

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

- Palette taken from the hotel's logo: warm gold roof lines on white with a black wordmark.
- Playfair Display (display, echoing the logo's serif) with Montserrat for text; restrained type scale; square corners.
- Signature: a gently pitched roof outline, after the logo, frames one featured image per page.
- Light mode by default, warm charcoal dark mode; choice saved per visitor with no flash on load.
- Quiet motion only: fade-in on scroll, slow photo zoom on headers and hover.
- Motion: smooth inertial scrolling (Lenis), page transitions, word-by-word headings, curtain image reveals with light parallax,
  staggered cards, animated figures, header that hides on scroll with a reading-progress line. Respects reduced motion.
- Contact page with a validated form that opens a ready-to-send WhatsApp or e-mail message (no server needed).
- Real photo of the building (facade section) and a practical-info grid on the hotel and rooms pages.
- Fully responsive with a call/WhatsApp bar on phones; keyboard-accessible menus, gallery lightbox and FAQ.
- schema.org Hotel data, per-page titles and `hreflang` alternates for SEO.

## Content sources and things to confirm with the hotel

Facts come from the hotel's own website (hotelmoosaapalace.com, archived May 2024, now offline), its Facebook page,
and the Ayila'a and PNBooking listings: location, four room categories with sizes and capacities (Classique,
Moyen Confort 55 m², Grand Confort 70 m², Mini Suite 120 m²), 39 air-conditioned rooms on two levels, restaurant-bar
(traditional and exotic cuisine), party hall, catering, furnished apartments, airport drop-off and pick-up, free Wi-Fi,
flat-screen cable TV, phone numbers and e-mail.

Please confirm before going live:

- **Photos**: `facade.jpg` (the hotel at night), `real-hall.jpg` and `real-decor.jpg` (the party hall) are the hotel's own photos,
  published on its Ayila'a listing. The other images are illustrative stock photos (Unsplash licence); replace them with the hotel's photography.
- **Prices** are shown as indicative, from PNBooking: Classique 15 000, Moyen Confort 20 000, Grand Confort 25 000 and Mini Suite
  40 000 FCFA per night. Ayila'a lists "from 30 000 FCFA", so confirm the current rates with the hotel.
- The **WhatsApp** button uses +237 696 87 70 45 (main number on the official site and Facebook). The site also listed +237 222 23 41 47 and +237 343 69 43 23.
- No verifiable guest reviews were found online, so the testimonials section is disabled.

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.your-hotel.com`) to the public URL before building:
share links use it to build the absolute address of the preview image. On Vercel it falls back to the project's production domain.

### Share previews (WhatsApp, Facebook, X, LinkedIn)

Each language has a 1200×630 image in `public/` (`og-fr.jpg`, `og-en.jpg`: the hotel's building photo, logo mark, name, tagline and phone).
Titles and descriptions come from `src/content/fr.ts` and `src/content/en.ts` (`name`, `tagline`, `description`, and each page's `intro`).
Keep `description` under about 160 characters so previews are not cut off. Test a link with the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) after deploying; WhatsApp caches previews, so use a new URL query to refresh.
