import HeroSection from "@/components/landingpage/heroSection";
import ScrollingTicker from "@/components/landingpage/scrolling-ticker";
import ServicesSection from "@/components/landingpage/services-section";
import AcademySection from "@/components/landingpage/about";
import TrustSection from "@/components/landingpage/trust";
import TestimonialsSection from "@/components/landingpage/testimony-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ScrollingTicker/>
      <ServicesSection />
      <AcademySection />
      <TrustSection />
      <TestimonialsSection/>
    
    </div>
  );
}
