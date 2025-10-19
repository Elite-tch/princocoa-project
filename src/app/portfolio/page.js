import PortfolioHero from "@/components/portfolio/portfolio-hero"
import PortfolioWork from "@/components/portfolio/portfolio-work"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"


export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
     
      <PortfolioHero />
      <PortfolioWork />
      <PortfolioCTA />
      
    </main>
  )
}
