import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails, Faq } from "@/components/sections/Contact";
import { ContactForm } from "@/components/sections/ContactForm";
import { pageMetadata, type LocaleParams } from "../meta";

export const generateMetadata = ({ params }: { params: LocaleParams }) => pageMetadata(params, "contact");

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />
      <ContactForm />
      <ContactDetails />
      <Faq />
    </>
  );
}
