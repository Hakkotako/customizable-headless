import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import SliderComp from "@/components/SliderComp";
import testimonials from "../data/testimonials.json";
import Text from "@/components/Text";
import ServiceGrid from "@/components/ServiceGrid";
import serviceData from "@/data/servicesDummy.json";


export default function Home() {
  return (
    <main>
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
        backgroundImage={heroData.backgroundImage}
      />
      <Text />
      <SliderComp testimonials={testimonials} title="What People Say About Us" cardPic="/Skull.png" bgPic="/tattooBG.jpg"/>
      <ServiceGrid services={serviceData} title="Our Services" />
    </main>
  );
}


