import { PageHero } from "@/components/sections/PageHero";
import { RoomsList } from "@/components/sections/Rooms";
import { pageMetadata, type LocaleParams } from "../meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params, "chambres");

export default function RoomsPage() {
  return (
    <>
      <PageHero page="chambres" />
      <RoomsList />
    </>
  );
}
