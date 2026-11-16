import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { Rooms } from "@/components/Rooms";
import { Experiences } from "@/components/Experiences";
import { Amenities } from "@/components/Amenities";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";
import { StructuredData } from "@/components/StructuredData";
import { getSite } from "@/content";
import { isLocale } from "@/i18n/config";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const site = getSite(isLocale(locale) ? locale : "fr");
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <Rooms />
        <Experiences />
        <Amenities />
        <Testimonials />
        <Gallery />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
      <StructuredData site={site} />
    </>
  );
}
