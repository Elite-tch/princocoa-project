"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const contentServices = [
  {
    title: "Brand Strategy",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg",
    heading: "Bespoke Content System",
    description: "Your digital engine. We align your narrative, visual continuity, and content flow into a scalable ecosystem that supports lead growth and long-term authority.",
    bullets: [
      "Brand Identity Design & Alignment",
      "Content Engine Plug-ins",
      "Revenue Growth Ideation: Leads Growth",
      "Graphic Design Curation",
      "Content Roadmapping & Narrative Alignment"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "CEOs, Founders, and Public Figures building personal authority or scaling online visibility. Ideal for those posting without a system or struggling with narrative clarity."
    }
  },
  {
    title: "Cinematography",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743114/1853EA70-8A63-4F52-9B66-6A68194DF2EB_L0_001-30_03_2023_22_09_47_yae3vc.jpg",
    heading: "Productions",
    description: "Event Recap, Shorts & High-Conversion Media. We capture authority and atmosphere without distraction. Precision visual engineering for executive presence.",
    bullets: [
      "Full Scope Event Coverage",
      "Cinematic Short Films & Campaigns",
      "Podcast & Talk Show Infrastructure",
      "Walkthroughs & BTS Documentaries",
      "Content Calendar Execution"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "Event organisers, corporate brands, and thought leaders who need dynamic brand storytelling that transcends static imagery. High perception, high impact."
    }
  },
  {
    title: "Visual Assets",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743016/FBB6EB18-4B0D-4F8D-BE36-1AD44A345840_L0_001-15_05_2023_20_56_03_zc6td2.jpg",
    heading: "Photography",
    description: "Elite visual assets curated for the premium market. Editorial precision for brands that need their visuals to match their premium pricing.",
    bullets: [
      "Executive & Lifestyle Portraits",
      "Product focus & UGC Content creation",
      "Venue: Restaurants, Offices, & Interiors",
      "Website-ready campaign imagery",
      "Graphic Curation for Social Feeds"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "Luxury brands, product-based businesses, and hospitality experts. If your visuals don't match your high-level pricing, this is for you."
    }
  },
  {
    title: "Digital Presence",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738825/A93DE538-27D3-42D8-BAB2-AE0C18FFB33C_L0_001-18_10_2024_15_46_58_zdzpdg.jpg",
    heading: "Web & Digital Design",
    description: "Your digital headquarters. We rebuild websites that don't convert or don't reflect your authority, establishing a high-performance user journey.",
    bullets: [
      "Webfolios & Landing Pages",
      "Brand Manual & Visual Systems",
      "Newsletter Infrastructure",
      "Logo Animation & Identity Design",
      "Digital Credibility Audits"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "Founders building credibility, creators monetising their audience, and corporate brands refreshing their digital home."
    }
  }
]

export default function ConsultingSection() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="md:py-24 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Services List */}
        <div className="md:space-y-24 space-y-12">
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-6 md:gap-12 justify-center  md:w-[90%] mx-auto items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[500px] w-full rounded overflow-hidden shadow">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4 md:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-4xl font-sans font-bold text-gray-950 uppercase tracking-tight">
                    {service.heading}
                  </h3>
                </div>

                <ul className="md:space-y-6 space-y-3 ">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-800">
                      <span className="mt-2.5 w-1.5 h-1.5  rounded-full bg-[#0a0a0a] shrink-0" />
                      <span className="text-md md:text-xl font-body leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* FAQ Style Dropdown */}
                {service.faq && (
                  <div className="pt-2 border-t border-gray-100">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <span className="md:text-lg text-md font-sans font-bold text-[#0a0a0a] group-hover:opacity-70 transition-opacity uppercase">
                        {service.faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-[#0a0a0a] transition-transform duration-500 ${openFaq === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-600 text-md md:text-lg font-body leading-relaxed max-w-xl">
                        {service.faq.answer}
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
