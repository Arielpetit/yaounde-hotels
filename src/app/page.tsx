import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Marquee } from "@/components/Marquee";
import { Rooms } from "@/components/Rooms";
import { Experiences } from "@/components/Experiences";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
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
        <Gallery />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
