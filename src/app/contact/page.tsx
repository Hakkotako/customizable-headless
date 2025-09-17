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
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "message", label: "Message", type: "textarea", required: true },
          ]}
        />,
      ]}
    />
  );
}
