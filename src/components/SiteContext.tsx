"use client";

import { createContext, useContext } from "react";
import type { HotelConfig } from "@/config/types";
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
