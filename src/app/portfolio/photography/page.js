import PhotoExamplesIntro from "@/components/photo/photo-intro"
import ProfessionalGallery from "@/components/photo/professional-gallery"
import LifestyleGallery from "@/components/photo/lifestyle-gallery"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"

export default function PhotographyPage() {
  return (
    <div className="min-h-screen ">
      
      <PhotoExamplesIntro />
      <ProfessionalGallery />
      <LifestyleGallery />
      <PortfolioCTA />
      
    </div>
  )
}
