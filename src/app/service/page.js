
import ServicesHero from "@/components/service/serviceHero";
import ServicesTagline from "@/components/service/services-tagline";
import ContentCreationSection from "@/components/service/brand-creation-section";
import ServicesCenterHero from "@/components/service/center-hero";
import ConsultingSection from "@/components/service/content-section";
import BrandBlueprintSection from "@/components/service/brand-blueprint-section";
import NewsletterSection from "@/components/about/newsletter-section";
import ProcessSection from "@/components/service/process-section";
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      
      <ServicesHero />
      <ServicesTagline />
        <ContentCreationSection />
        <ServicesCenterHero />
        <ConsultingSection />
        <BrandBlueprintSection />
        <ProcessSection/>
        <NewsletterSection />

    
    </main>
  )
}
