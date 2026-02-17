
import ServicesHero from "@/components/service/serviceHero";
import ServicesTagline from "@/components/service/services-tagline";
import ContentCreationSection from "@/components/service/brand-creation-section";
import ServicesCenterHero from "@/components/service/center-hero";
import ConsultingSection from "@/components/service/content-section";
import VisibilityIntensive from "@/components/service/visibility-intensive";
import NewsletterSection from "@/components/about/newsletter-section";

export default function ServicesPage() {
  return (
    <main className="min-h-screen ">
      <ServicesHero />
      <ServicesTagline />
      <ConsultingSection />
      <VisibilityIntensive />
      <NewsletterSection />
    </main>
  )
}
