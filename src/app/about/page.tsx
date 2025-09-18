import PageTemplate from "@/components/PageTemplate";
import Text from "@/components/Text";

export default function About() {
  return (
    <PageTemplate
      heroTitle="Learn More About Us"
      heroSubtitle="We are dedicated to providing the best service."
      heroBgImg="tempHeroBg.jpg"
      components={[
        <Text key={"about-text"} />
      ]}
    />
  );
}