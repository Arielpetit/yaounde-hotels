import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/sections/Gallery";
import { pageMetadata, type LocaleParams } from "../meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params, "galerie");

export default function GalleryPage() {
  return (
    <>
      <PageHero page="galerie" />
      <GalleryGrid />
    </>
  );
}
