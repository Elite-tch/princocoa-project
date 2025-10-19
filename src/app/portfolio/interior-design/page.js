import InteriorDesignHero from "@/components/interior-design/interior-design-hero"
import InteriorGallery from "@/components/interior-design/interior-gallery"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen  bg-[#F5F1E8]">
      <InteriorDesignHero />
      <InteriorGallery />
      <PortfolioCTA />
      
    </div>
  )
}
