"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const contentServices = [
  {
    title: "Concept Development",
    image: "/img.jpg",
    heading: "Creative Direction",
    entails:
      "We help define your brand’s vision and purpose with strong, clear ideas that shape your creative path.",
    bestFor:
      "Our process ensures every concept connects with your target audience and delivers measurable results.",
    heading2: "Strategic Planning"
  },
  {
    title: "Brand Identity Design",
    image: "/img.jpg",
    heading: "Visual Consistency",
    entails:
      "We design cohesive identities that bring your brand story to life through color, style, and form.",
    bestFor:
      "Your brand will stand out with a distinct look that makes it memorable across all platforms.",
    heading2: "Recognition Building"
  },
  {
    title: "Packaging Design",
    image: "/img.jpg",
    heading: "Eye-Catching Presentation",
    entails:
      "We design packaging that attracts attention and communicates your brand values instantly.",
    bestFor:
      "Every design blends aesthetics with practicality to enhance both usability and appeal.",
    heading2: "Functional Creativity"
  }
]

export default function ContentCreationSection() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <section className="py-20 px-6 bg-[#F5F1E8]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-4xl text-[#004aad]  tracking-wider mb-2 text-center font-semibold">
         Brand & Creative Strategy
        </h2>

        <p className="text-center text-[#004aad]/70 max-w-2xl mx-auto mb-10">
            We create high-quality visuals and videos that tell your brand story in the most authentic way.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start w-[90%]  mx-auto">
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl mb-4 text-[#004aad]">
                  {service.title}
                </h3>

                
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === `entails-${index}` ? null : `entails-${index}`)
                  }
                  className="w-full flex items-center justify-between py-3 border-t border-gray-200 text-left"
                >
                  <span className="text-[#004aad]/70">{service.heading}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#004aad]/70 transition-transform ${
                      openDropdown === `entails-${index}` ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === `entails-${index}` && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="py-3 text-[#004aad]/70 text-sm"
                  >
                    {service.entails}
                  </motion.div>
                )}

               
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === `bestFor-${index}` ? null : `bestFor-${index}`)
                  }
                  className="w-full flex items-center justify-between py-3 border-t border-gray-200 text-left"
                >
                  <span className="text-[#004aad]/70">{service.heading2}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#004aad]/70 transition-transform ${
                      openDropdown === `bestFor-${index}` ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === `bestFor-${index}` && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="py-3 text-[#004aad]/70 text-sm"
                  >
                    {service.bestFor}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
