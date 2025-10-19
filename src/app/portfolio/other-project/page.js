import OtherProjectsHero from "@/components/other-projects/others-hero"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"
import OtherGallery from "@/components/other-projects/others-gallery"

export default function OtherProjectsPage() {
  return (
    <div className="min-h-screen  ">
      <OtherProjectsHero />
      <OtherGallery />
      <PortfolioCTA />
    </div>
  )
}
