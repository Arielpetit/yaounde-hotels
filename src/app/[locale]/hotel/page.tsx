import { PageHero } from "@/components/sections/PageHero";
import { Story, Amenities } from "@/components/sections/HotelSections";
import { Facade } from "@/components/sections/Facade";
import { Practical } from "@/components/sections/Practical";
import { Testimonials } from "@/components/sections/Testimonials";
import { pageMetadata, type LocaleParams } from "../meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params, "hotel");

export default function HotelPage() {
  return (
    <>
      <PageHero page="hotel" />
      <Story />
      <Facade />
      <Practical tone="soft" />
      <Amenities />
      <Testimonials />
    </>
  );
}
