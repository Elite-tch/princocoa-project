import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import NewsletterSection from "@/components/about/newsletter-section"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      
      <ContactHero />
        <ContactForm />
      <NewsletterSection />
      
    </div>
  )
}
