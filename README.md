# Massao Palace Hôtel — website

Premium one-page website for **Massao Palace Hôtel**, 160 rue Nana Tchakounté, Tsinga, Yaoundé (Cameroon).

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
- Practical-info FAQ, sticky mobile booking bar, schema.org Hotel data for SEO
- Fully responsive, respects `prefers-reduced-motion`, keyboard accessible dialogs

## Content sources and things to confirm with the hotel

Facts come from the hotel's website (massaopalacehotel.com, via search index), its Facebook page and booking listings
(Trip.com, Ease Travel, Exploreo): address, 27 rooms, room types and prices (Double Standard 30 000 FCFA,
Mini Suite 45 000 FCFA), balconies and mountain views, restaurant, bar, terrace, massage room, barbecue, airport shuttle,
free parking and Wi-Fi, conference room, 24-hour reception, French and English spoken.

Please confirm before going live:

- **Photos** in `public/images` are illustrative stock photos (Unsplash licence). Replace them with the hotel's own photography.
- **WhatsApp number** for reservations (`booking.whatsapp` in `src/config/site.ts`) is set to +237 677 81 28 81, the number listed on Trip.com. Listings also show +237 699 28 35 29 and +237 692 37 54 80.
- **E-mail** `sohisti@yahoo.fr` comes from the hotel's Facebook page.
- The "Chambre Double" category and its price are not confirmed; booking sites list single- and double-bed options.
- Breakfast and check-in times differ between listings and are left out on purpose.
- No verifiable guest reviews were found online, so the testimonials section is disabled (add `testimonials` in `src/config/site.ts` to enable it).

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` to the public URL for correct social previews.
