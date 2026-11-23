import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";

const PAGES = ["", "/hotel", "/chambres", "/services", "/galerie", "/contact"];

/** Every page in both languages, each pointing at its translation. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return PAGES.flatMap((p) =>
    locales.map((l) => ({
      url: `${base}/${l}${p}`,
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : p === "/contact" || p === "/chambres" ? 0.8 : 0.6,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${base}/${x}${p}`])) },
    })),
  );
}
