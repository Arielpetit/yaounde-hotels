import type { Metadata } from "next";
import type { PageKey } from "@/config/types";
import { getSite } from "@/content";
import { isLocale } from "@/i18n/config";

export type LocaleParams = Promise<{ locale: string }>;

/** Per-page title, description and language alternates. */
export async function pageMetadata(params: LocaleParams, page?: PageKey): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const site = getSite(locale);
  const path = page ? `/${page}` : "";
  const head = page ? site.pages[page] : null;
  return {
    ...(head ? { title: head.nav, description: head.intro } : {}),
    alternates: { canonical: `/${locale}${path}`, languages: { fr: `/fr${path}`, en: `/en${path}` } },
    ...(head ? { openGraph: { title: `${head.title}`, description: head.intro, images: [head.image] } } : {}),
  };
}
