import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { fr } from "@/content/fr";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: fr.name,
    short_name: fr.shortName,
    description: fr.description,
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    lang: "fr",
    background_color: brand.manifest.background,
    theme_color: brand.manifest.theme,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
