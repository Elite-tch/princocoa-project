import BrandIdentityHero from "@/components/brand-identity/brand-identity-hero"
import BrandIdentityGallery from "@/components/brand-identity/brand-identity-gallery"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"

export default function BrandIdentityPage() {
  return (
    <div className="min-h-screen  ">
      <BrandIdentityHero />
     
        <BrandIdentityGallery />
      <PortfolioCTA />
      
    </div>
  )
}
