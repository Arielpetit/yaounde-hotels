import { HomeHero } from "@/components/sections/HomeHero";
import { IntroSplit } from "@/components/sections/IntroSplit";
import { RoomsPreview } from "@/components/sections/Rooms";
import { Facade } from "@/components/sections/Facade";
import { ExperiencesPreview } from "@/components/sections/Experiences";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/Gallery";
import { pageMetadata, type LocaleParams } from "./meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSplit />
      <RoomsPreview />
      <Facade />
      <ExperiencesPreview />
      <Testimonials />
      <GalleryPreview />
    </>
  );
}
