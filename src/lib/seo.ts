import type { Metadata } from "next";
import type { HotelConfig } from "@/config/types";
import type { Locale } from "@/i18n/config";

/** Public origin used for absolute URLs (share image, sitemap): set NEXT_PUBLIC_SITE_URL, or deploy on Vercel. */
export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

/** Share image per language, 1200x630, in /public (og-fr.jpg, og-en.jpg). */
export const OG_SIZE = { width: 1200, height: 630 } as const;

export function ogImagePath(locale: Locale) {
  return `/og-${locale}.jpg`;
}

/** Open Graph + Twitter tags for a page, always using the hotel's branded share image. */
export function socialMeta(opts: { locale: Locale; site: HotelConfig; title: string; description: string; path: string }): Pick<Metadata, "openGraph" | "twitter"> {
  const { locale, site, title, description, path } = opts;
  const image = { url: ogImagePath(locale), ...OG_SIZE, alt: `${site.name} — ${site.tagline}`, type: "image/jpeg" };
  return {
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: `/${locale}${path}`,
      locale: locale === "fr" ? "fr_CM" : "en_GB",
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_CM"],
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
