import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { displayFont, bodyFont } from "@/config/fonts";
import { brand } from "@/config/brand";
import { getSite } from "@/content";
import { isLocale, locales } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteProvider } from "@/components/SiteContext";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const site = getSite(locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    alternates: { canonical: `/${locale}`, languages: { fr: "/fr", en: "/en" } },
    openGraph: {
      title: site.name,
      description: site.description,
      images: [site.hero.image],
      locale: locale === "fr" ? "fr_CM" : "en_GB",
      type: "website",
    },
  };
}

/** Applies the saved (or brand default) theme before first paint to avoid a flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t='${brand.defaultTheme}';var d=document.documentElement;d.dataset.theme=t;var c=${JSON.stringify(
  brand.themeColor,
)};var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',c[t]);}catch(e){}})();`;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSite(locale);

  return (
    <html
      lang={locale}
      data-theme={brand.defaultTheme}
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content={brand.themeColor[brand.defaultTheme]} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain">
        <SiteProvider value={{ site, ui: ui[locale], locale }}>
          <SmoothScroll>{children}</SmoothScroll>
        </SiteProvider>
      </body>
    </html>
  );
}
