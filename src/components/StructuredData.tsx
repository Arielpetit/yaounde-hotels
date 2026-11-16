import { site } from "@/config/site";

/** schema.org Hotel data so search engines can show address, phone and amenities. */
export function StructuredData() {
  const { seo } = site;
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    description: site.description,
    slogan: site.tagline,
    image: site.hero.image,
    telephone: seo.telephone,
    email: site.contact.email,
    priceRange: seo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: seo.streetAddress,
      addressLocality: seo.locality,
      addressRegion: seo.region,
      addressCountry: seo.country,
    },
    ...(seo.lat && seo.lng ? { geo: { "@type": "GeoCoordinates", latitude: seo.lat, longitude: seo.lng } } : {}),
    amenityFeature: seo.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    sameAs: site.contact.socials.map((s) => s.href),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
