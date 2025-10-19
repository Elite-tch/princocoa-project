"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const contentServices = [
  {
    title: "Content Strategy",
    image: "/img.jpg",
    heading: "Purposeful Planning",
    entails:
      "We develop strategies that align your content with your audience’s needs.",
    bestFor:
      "Our goal is to keep your messaging authentic and engaging across all platforms.",
    heading2: "Consistent Voice"
  },
  {
    title: "Photography / Videography",
    image: "/img.jpg",
    heading: "Visual Storytelling",
    entails:
      "We capture stunning visuals that convey your brand's message and engage your audience.",
    bestFor:
      "Every image and frame is crafted to deliver clarity, depth, and style.",
    heading2: "Professional Quality"
  },
  {
    title: "Content Shoots",
    image: "/img.jpg",
    heading: "Creative Production",
    entails:
      "We design and execute content shoots that capture your brand's essence.",
    bestFor:
      "Each shot is styled to match your brand identity and message perfectly.",
    heading2: "Brand Alignment"
  }
]

export default function ConsultingSection() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <section className="md:py-20 py-10 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-xl md:text-3xl font-bold uppercase text-[#004aad]  tracking-wider mb-2 text-center ">
        Content Creation
        </h2>

        <p className="text-center md:text-lg text-md text-[#004aad]/70 max-w-2xl mx-auto mb-10">
          We create high-quality visuals and videos that tell your brand story in the most authentic way.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start md:-[90%]  mx-auto">
          {contentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-lg"
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
