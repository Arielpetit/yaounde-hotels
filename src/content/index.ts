import type { HotelConfig } from "@/config/types";
import type { Locale } from "@/i18n/config";
import { fr } from "./fr";
import { en } from "./en";

const content: Record<Locale, HotelConfig> = { fr, en };

export function getSite(locale: Locale): HotelConfig {
  return content[locale];
}
