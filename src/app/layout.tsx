import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { displayFont, bodyFont } from "@/config/fonts";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookingProvider } from "@/components/BookingContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: [site.hero.image],
    locale: site.locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="grain">
        <BookingProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </BookingProvider>
      </body>
    </html>
  );
}
