import OtherProjectsHero from "@/components/other-projects/others-hero"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"
import OtherGallery from "@/components/other-projects/others-gallery"

export default function OtherProjectsPage() {
  return (
    <div className="min-h-screen  bg-[#F5F1E8]">
      <OtherProjectsHero />
      <OtherGallery />
      <PortfolioCTA />
    </div>
  )
}
