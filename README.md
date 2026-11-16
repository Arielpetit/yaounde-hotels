# Hôtel Mo'o Sa'a — website

Premium one-page website for **Hôtel Mo'o Sa'a**, nouvelle route de Nkolbisson (opposite Collège Excellence), Yaoundé (Cameroon).

Built with Next.js 15 (App Router), Tailwind CSS v4, Framer Motion and Lenis smooth scrolling.

## Branches

This repository hosts three hotel sites that share one component system:

| Branch | Hotel | Location |
| --- | --- | --- |
| `main` | La Cave Simson Hôtel | Route de Nkolbisson, carrefour MEEC, Yaoundé VII |
| `massao-palace` | Massao Palace Hôtel | 160 rue Nana Tchakounté, Tsinga, Yaoundé |
| `moosaa` | Hôtel Mo'o Sa'a | Nkolbisson, nouvelle route, Yaoundé |

Each branch changes only the brand layer: `src/config/site.ts` (content), `src/config/theme.css` (colours),
`src/config/fonts.ts` (typography), `src/components/ui/Logo.tsx` (mark) and `public/images`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Features

- Brand preloader, mask-reveal headlines, parallax hero with Ken Burns zoom
- Scroll-linked word reveal, count-up stats, infinite marquee
- Pinned horizontal room gallery (desktop) with room detail dialog
- Sticky image stack for experiences, amenity grid, masonry gallery with keyboard lightbox
- Click-to-load Google Map, directions link
- Reservation form that prepares an e-mail or WhatsApp message for the front desk (no backend needed)
- Real guest testimonials, practical-info FAQ, sticky mobile booking bar, schema.org Hotel data for SEO
- Fully responsive, respects `prefers-reduced-motion`, keyboard accessible dialogs

## Content sources and things to confirm with the hotel

Facts come from the hotel's own website (hotelmoosaapalace.com, archived May 2024, now offline), its Facebook page,
and the Ayila'a and PNBooking listings: location, four room categories with sizes and capacities (Classique,
Moyen Confort 55 m², Grand Confort 70 m², Mini Suite 120 m²), 39 air-conditioned rooms on two levels, restaurant-bar
(traditional and exotic cuisine), party hall, catering, furnished apartments, airport drop-off and pick-up, free Wi-Fi,
flat-screen cable TV, phone numbers and e-mail.

Please confirm before going live:

- **Photos** in `public/images` are illustrative stock photos (Unsplash licence). Replace them with the hotel's own photography and logo.
- **Prices**: listings disagree (from 15 000 FCFA on PNBooking, from 30 000 FCFA on Ayila'a), so rooms show "Tarif sur demande".
- **WhatsApp** reservations go to +237 696 87 70 45 (main number on the official site and Facebook). The site also listed +237 222 23 41 47 and +237 343 69 43 23.
- No verifiable guest reviews were found online, so the testimonials section is disabled.

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` to the public URL for correct social previews.
