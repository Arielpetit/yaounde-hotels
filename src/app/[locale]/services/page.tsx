import { PageHero } from "@/components/sections/PageHero";
import { ExperiencesList } from "@/components/sections/Experiences";
import { Amenities } from "@/components/sections/HotelSections";
import { pageMetadata, type LocaleParams } from "../meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params, "services");

export default function ServicesPage() {
  return (
    <>
      <PageHero page="services" />
      <ExperiencesList />
      <Amenities />
    </>
  );
}
