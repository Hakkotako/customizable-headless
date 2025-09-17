import PageTemplate from "@/components/PageTemplate";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <PageTemplate
      heroTitle="Get in Touch"
      heroSubtitle="We would love to hear from you!"
      heroBgColor="linear-gradient(135deg, #274b63ff 0%, #814812ff 100%)"
      components={[
        <ContactForm
          key={"contact-form"}
          title="CONTACT US NOW"
        />,
        
      ]}
    />
  );
}
