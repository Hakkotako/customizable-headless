import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import Review from "@/components/Review";
import SliderComp from "@/components/SliderComp";
import testimonials from "../data/testimonials.json";


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
      <SliderComp testimonials={testimonials}/>
      <Review />
    </main>
  );
}


