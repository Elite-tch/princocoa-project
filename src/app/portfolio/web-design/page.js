import VideoHero from "@/components/web-design/web-design-hero"
import VideoGallery from "@/components/web-design/web-design"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"

export default function WebDesignPage() {
  return (
    <div className="min-h-screen">
      <VideoHero />
      <VideoGallery />
      <PortfolioCTA />
      
    </div>
  )
}
