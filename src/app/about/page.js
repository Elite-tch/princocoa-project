"use client"
import AboutHero from "@/components/about/about-hero"
import MeetFounder from "@/components/about/meet-founder"
import NewsletterSection from "@/components/about/newsletter-section"
import TrustSection from "@/components/landingpage/trust"
//import MeetFounder from "@/components/meet-founder"
//import SeventhHouseMeaning from "@/components/seventh-house-meaning"
//import NewsletterSection from "@/components/newsletter-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      
      <AboutHero />
        <MeetFounder />
        <TrustSection/>
        <NewsletterSection/> 
     
      
    </div>
  )
}
