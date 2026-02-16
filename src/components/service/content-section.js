"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const contentServices = [
  {
    title: "Content Strategy",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg",
    heading: "Brand Management Consulting",
    description: "We develop strategies that align your content with your audience’s needs. Our goal is to keep your messaging authentic and engaging across all platforms.",
    bullets: [
      "Bespoke Content system ",
      "Brand Identity Design & Alignment: Narrative Alignment / Visual Continuity ",
      "Content Engine plug ins",
      "Revenue growth ideation:  leads growth (bonus)",
      "Graphic design curation",
      "Content roadmapping"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "Perfect for a establishment that needs strong brandings and needs someone to maintain their narrative across all media platform through consultations, blue print and content engine plug ins"
    }
  },
  {
    title: "Photography / Videography",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743016/FBB6EB18-4B0D-4F8D-BE36-1AD44A345840_L0_001-15_05_2023_20_56_03_zc6td2.jpg",
    heading: "Photography",
    description: "We capture stunning visuals that convey your brand's message and engage your audience. Every image and frame is crafted to deliver clarity, depth, and style.",
    bullets: [
      "Lifestyle ",
      "Product photography: ugc content creation",
      "Venue: Restaurants, Offices, interiors",
      "Headshots & Portraits",
      "Content creation"
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  },
  {
    title: "Content Shoots",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742924/22_07_2022_14_47_53_i3kevm.jpg",
    heading: "Videography",
    description: "We design and execute content shoots that capture your brand's essence. Each shot is styled to match your brand identity and message perfectly.",
    bullets: [
      "Event Behind The Scenes: Vlogs, Walk throughs, Full event scope",
      "Content Creation: Content calendar execution",

    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  },
  {
    title: "Content Strategy",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg",
    heading: "Production",
    description: "We develop strategies that align your content with your audience’s needs. Our goal is to keep your messaging authentic and engaging across all platforms.",
    bullets: [
      "Podcast ",
      "Shortfilms: Brand Marketing, Content creation etc  ",
      "Campaigns",
      "Behind The Scenes",
      "Talk Show",

    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "Wardrobe styling, Makeup, Hair, Set Design The full works available - contact us "
    }
  },
  {
    title: "Photography / Videography",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743016/FBB6EB18-4B0D-4F8D-BE36-1AD44A345840_L0_001-15_05_2023_20_56_03_zc6td2.jpg",
    heading: "Graphics Design",
    description: "We capture stunning visuals that convey your brand's message and engage your audience. Every image and frame is crafted to deliver clarity, depth, and style.",
    bullets: [
      "Graphic Design: Youtube thumbnnails design, social media  ",
      "Graphic Design: cover photos, bio design ",
      "Logo animation",
      "Brand Bible: Essentials",
    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  },
  {
    title: "Content Shoots",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742924/22_07_2022_14_47_53_i3kevm.jpg",
    heading: "Web design",
    description: "We design and execute content shoots that capture your brand's essence. Each shot is styled to match your brand identity and message perfectly.",
    bullets: [
      "Webfolios",
      "Landing pages ",
      'Newsletter management'

    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  },

  {
    title: "Content Shoots",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742924/22_07_2022_14_47_53_i3kevm.jpg",
    heading: "Co-operate",
    description: "We design and execute content shoots that capture your brand's essence. Each shot is styled to match your brand identity and message perfectly.",
    bullets: [
      "Social media feed design",
      "Event coverage: Photo & Video ",
      'Interviews',
      'Headshots ',
      'Campaign e.g holiday content: valentine’s, csr projects, infrastructure tours'

    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  },

  {
    title: "Content Shoots",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742924/22_07_2022_14_47_53_i3kevm.jpg",
    heading: "Production Design",
    description: "We design and execute content shoots that capture your brand's essence. Each shot is styled to match your brand identity and message perfectly.",
    bullets: [
      "3D rendering",
      "Floor planning ",
      'Moodboarding',
      'Props catalog'

    ],
    faq: {
      question: "Who it’s best for ?",
      answer: "text"
    }
  }
]

export default function ConsultingSection() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="md:py-24 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Services List */}
        <div className="space-y-32">
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 justify-center w-[90%] mx-auto items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div className="relative h-[400px] md:h-[500px] w-full rounded overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-sans font-bold text-gray-950 uppercase tracking-tight">
                    {service.heading}
                  </h3>
                </div>

                <ul className="space-y-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-800">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#0a0a0a] shrink-0" />
                      <span className="text-lg md:text-xl font-body leading-snug">{bullet}</span>
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
                      <span className="text-lg font-sans font-bold text-[#0a0a0a] group-hover:opacity-70 transition-opacity uppercase tracking-wider">
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
                      <p className="pb-8 text-gray-600 text-lg font-body leading-relaxed max-w-xl">
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
