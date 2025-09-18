import PageTemplate from "@/components/PageTemplate";
import ContactForm from "@/components/ContactForm";
import Text from "@/components/Text";

export default function Contact() {
  return (
    <PageTemplate
      heroTitle="Get in Touch"
      heroSubtitle="We would love to hear from you!"
      heroBgImg="tempHeroBg.jpg"
      components={[
        <ContactForm
          key={"contact-form"}
          title="CONTACT US "
        />,
        <Text 
          key={"contact-text"}
        />
      ]}
    />
  );
}
