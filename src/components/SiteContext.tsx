"use client";

import { createContext, useContext } from "react";
import type { HotelConfig, PageKey } from "@/config/types";
import type { Locale } from "@/i18n/config";
import type { UiStrings } from "@/i18n/ui";

interface SiteState {
  site: HotelConfig;
  ui: UiStrings;
  locale: Locale;
}

const Ctx = createContext<SiteState | null>(null);

export function SiteProvider({ value, children }: { value: SiteState; children: React.ReactNode }) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSite() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSite must be used inside SiteProvider");
  return v;
}

/** Builds a locale-prefixed path: href("chambres") -> "/fr/chambres", href() -> "/fr". */
export function useHref() {
  const { locale } = useSite();
  return (page?: PageKey | "") => (page ? `/${locale}/${page}` : `/${locale}`);
}

export function whatsappHref(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** "237657390112" -> "+237 657 39 01 12" */
export function formatIntl(number: string) {
  return `+${number.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5")}`;
}
