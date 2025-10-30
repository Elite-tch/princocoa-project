"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    category: "Content Creation",
    items: [
      { name: "Bring your brand to life with compelling content.", description: "Whether it’s eye-catching graphics, professional videos, or creative campaigns, we make our vision a reality." },
        { name: "Photography & Videography", description: "High-quality visuals that tell your brand's story." },
    ],
  },
  {
    category: "Consulting",
    items: [
      { name: "Engage, grow, and connect with your audience.", description: "We handle everything from content calendars and caption writing to building meaningful engagement on your social platforms. " },
        { name: "Craft a memorable identity that tells your story.", description: "From logo creation to comprehensive brand guidelines, we design visuals and messaging that set your business apart." },

    ],
  },

   {
    category: "Digital Solutions",
    items: [
      { name: "Custom websites that work as beautifully as they look.", description: "We create sleek, user-friendly websites tailored to your business goals and your audience’s needs. " },
          { name: "SEO Optimization", description: "Strategies to improve your website's visibility and ranking on search engines." },

    ],
  },
]

export default function ServicesSection() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section className="pb-10 px-6 bg-pink-600">
      <div className="container mx-auto md:w-[90%] w-[95%]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-bold uppercase text-white tracking-wider mb-4 text-center "
        >
          Services
        </motion.h2>

        <div className="md:grid md:grid-cols-2 flex flex-col gap-3 md:gap-12 items-center md:items-start">
          {/* Left - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {services.map((service, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="md:text-2xl text-xl italic font-semibold pt- md:pt-8 text-white border-b border-white pb-4 text-center">{service.category}</h3>
                <div className="space-y-2">
                  {service.items.map((item, itemIdx) => {
                    const key = `${service.category}-${itemIdx}`
                    const isOpen = openItems[key]

                    return (
                      <motion.div key={itemIdx} className="border-b border-white group group-hover:border-[#004aad] group-hover:border pb-2" whileHover={{ x: 5 }}>
                        <button
                          onClick={() => toggleItem(service.category, itemIdx)}
                          className="w-full flex items-center justify-between py-3 text-left "
                        >
                          <span className="md:text-xl text-md italic text-white  transition-colors">
                            {item.name}
                          </span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="w-5 h-5 text-white " />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-white pb-3">{item.description}</p>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
<div className="flex justify-center">
  <Link href='/service'>
            <Button size='lg' className="bg-[#39FF14]/80  hover:bg-[#39FF14]/90 font-semibold py-3 md:py-4 px-8 mt-8">
              SEE ALL SERVICES
            </Button>
            </Link>
</div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:h-[500px] h-[430px] md:w-full w-[100%] mx-auto flex items-center justify-center gap-8 pb-16 md:pb-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
             // transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative w-60 md:w-56 md:h-96 h-64 rounded-3xl overflow-hidden border-4 border-foreground shadow-2xl"
            >
              <Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761767880/CANTAGALI_6_kjjxot.png" alt="Phone mockup 1" fill className="object-cover" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
             // transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="relative w-60 md:w-56 md:h-96 h-64 rounded-3xl mt-52 overflow-hidden border-4 border-foreground shadow-2xl"
            >
              <Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg" alt="Phone mockup 2" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
