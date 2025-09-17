import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import Review from "@/components/Review";
import SliderComp from "@/components/SliderComp";
import testimonials from "../data/testimonials.json";
import Text from "@/components/Text";

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
      <Review />
    </main>
  );
}


