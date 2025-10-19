import VideoGallery from "@/components/video/video-gallery"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"
import VideoHero from "@/components/video/video-hero"

export default function VideoExamplesPage() {
  return (
    <div className="min-h-screen ">
      <VideoHero />
      <VideoGallery />
      <PortfolioCTA />
      
    </div>
  )
}
