import PortfolioHero from "@/components/portfolio/portfolio-hero"
import PortfolioWork from "@/components/portfolio/portfolio-work"
import PortfolioCTA from "@/components/portfolio/portfolio-cta"
import NewsletterSection from "@/components/about/newsletter-section"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen ">
     
      <PortfolioHero />
      <PortfolioWork />
      <NewsletterSection/>
      
    </main>
  )
}
