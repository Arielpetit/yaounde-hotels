# Massao Palace Hôtel — website

Premium multi-page website for **Massao Palace Hôtel**, 160 rue Nana Tchakounté, Tsinga, Yaoundé (Cameroon).

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

- Palette taken from the building itself: white facade, green arched windows and the deep red carpet of the corridors.
- Cormorant Garamond (display) with Jost for text; restrained type scale.
- Signature: round-topped arches, after the facade's windows, frame one featured image per page; the logo draws three arched windows.
- Light mode by default, deep garden-green dark mode; choice saved per visitor with no flash on load.
- Quiet motion only: fade-in on scroll, slow photo zoom on headers and hover.
- Motion: smooth inertial scrolling (Lenis), page transitions, word-by-word headings, curtain image reveals with light parallax,
  staggered cards, animated figures, header that hides on scroll with a reading-progress line. Respects reduced motion.
- Contact page with a validated form that opens a ready-to-send WhatsApp or e-mail message (no server needed).
- Real photo of the building (facade section) and a practical-info grid on the hotel and rooms pages.
- Fully responsive with a call/WhatsApp bar on phones; keyboard-accessible menus, gallery lightbox and FAQ.
- schema.org Hotel data, per-page titles and `hreflang` alternates for SEO.

## Content sources and things to confirm with the hotel

Facts come from the hotel's website (massaopalacehotel.com, via search index), its Facebook page and booking listings
(Trip.com, Ease Travel, Exploreo): address, 27 rooms, room types and prices (Double Standard 30 000 FCFA,
Mini Suite 45 000 FCFA), balconies and mountain views, restaurant, bar, terrace, massage room, barbecue, airport shuttle,
free parking and Wi-Fi, conference room, 24-hour reception, French and English spoken.

Please confirm before going live:

- **Photos**: `facade.jpg`, `real-suite.jpg`, `real-twin.jpg` and `real-double.jpg` are the hotel's own photos (published on booking
  listings). The other images are illustrative stock photos (Unsplash licence); replace them with the hotel's photography.
- **Party hall**: 350+ seated guests, from 700,000 FCFA with place settings (figures quoted from the hotel's website via search results).
- **Suite 60 m², Standard Double 15 m²**: sizes from the LngBooking listing.
- **WhatsApp number** (`contact.whatsapp` in `src/content/fr.ts`) is set to +237 677 81 28 81, the number listed on Trip.com. Listings also show +237 699 28 35 29 and +237 692 37 54 80.
- **E-mail** `sohisti@yahoo.fr` comes from the hotel's Facebook page.
- The "Chambre Double" category and its price are not confirmed; booking sites list single- and double-bed options.
- Breakfast and check-in times differ between listings and are left out on purpose.
- No verifiable guest reviews were found online, so the testimonials section is disabled (add `testimonials` in `src/content/fr.ts` and `en.ts` to enable it).

## Deploy

Works on Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.your-hotel.com`) to the public URL before building:
share links use it to build the absolute address of the preview image. On Vercel it falls back to the project's production domain.

### Share previews (WhatsApp, Facebook, X, LinkedIn)

Each language has a 1200×630 image in `public/` (`og-fr.jpg`, `og-en.jpg`: the hotel's building photo, logo mark, name, tagline and phone).
Titles and descriptions come from `src/content/fr.ts` and `src/content/en.ts` (`name`, `tagline`, `description`, and each page's `intro`).
Keep `description` under about 160 characters so previews are not cut off. Test a link with the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) after deploying; WhatsApp caches previews, so use a new URL query to refresh.
