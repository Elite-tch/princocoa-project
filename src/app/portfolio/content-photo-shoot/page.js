import VideoGallery from "@/components/content-photo-shoot/video-gallery"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"
import VideoHero from "@/components/content-photo-shoot/video-hero"

export default function VideoExamplesPage() {
  return (
    <div className="min-h-screen ">
      <VideoHero />
      <VideoGallery />
      <PortfolioCTA />
      
    </div>
  )
}
