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
    <section className="py-10 md:py-16 px-6 bg-white">
      <div className=" mx-auto md:w-[90%] w-[95%]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold uppercase text-pink-600 tracking-wider mb-4 text-center "
        >
          Services
        </motion.h2>

        <div className="md:flex-row flex flex-col md:mt-10 gap-3 md:gap-12 xl:gap-0 items-center md:items-start">
          {/* Left - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:w-[60%]"
          >
            {services.map((service, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="md:text-2xl text-xl  font-semibold pt- md:pt-  border-b uppercase  pb-3 text-center">{service.category}</h3>
                <div className="space-y-2">
                  {service.items.map((item, itemIdx) => {
                    const key = `${service.category}-${itemIdx}`
                    const isOpen = openItems[key]

                    return (
                      <motion.div key={itemIdx} className="border-b group group-hover:border-[#004aad] group-hover:border pb-" whileHover={{ x: 5 }}>
                        <button
                          onClick={() => toggleItem(service.category, itemIdx)}
                          className="w-full flex items-center justify-between py-1 text-left "
                        >
                          <span className=" text-md md:text-xl text-gray-700 transition-colors">
                            {item.name}
                          </span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="w-5 h-5 text-gray-700 " />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-700 text-md md:text-xl pb-3">{item.description}</p>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
<div className="flex justify-center">
  <Link href='/service'>
            <Button size='lg' className="bg-pink-600  hover:bg-pink-700 font-semibold py-3 md:py-4 px-8 md:mt-8 mt-4">
              SEE ALL SERVICES
            </Button>
            </Link>
</div>
          </motion.div>

          {/* Right - Phone Mockups (square + iPhone overlap) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:h-full h-[430px] xl:pb-28 md:w-full w-[100%] mx-ato flex items-center justify-center pb- md:pb-0"
          >
            {/* wrapper to contain both frames */}
            <div className="relative w-full md:w-[540px] h-auto">
              {/* Square frame (left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                //transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative md:block hidden w-[350px] h-[300px] md:w-[420px] md:h-[420px] 2xl:w-[620px] 2xl:h-[540px] rounded-lg overflow-hidden border-4 border-foreground shadow-2xl mx-auto"
              >
                <Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761767880/CANTAGALI_6_kjjxot.png" alt="Square mockup" fill className="object-cover" />
              </motion.div>

              {/* iPhone-style frame (right, overlapping ~30%) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                //transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute rounded-3xl md:block hidden overflow-hidden border-4 w-[280px] h-[360px] 2xl:w-[410px] 2xl:h-[490px] left-[68%] top-[35%] 2xl:top-[30%] border-foreground shadow-2xl z-10"
              
              >
                <Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg" alt="Phone mockup 2" fill className="object-cover" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                //transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="relative md:hidden  h-[350px] md:w-[420px] md:h-[420px] 2xl:w-[620px] 2xl:h-[540px]  overflow-hidden  shadow-2xl mx-auto"
              
              >
                <video
  autoPlay
  loop
  muted
  playsInline
  className="object-cover  inset-0 w-full h-full"
>
  <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1761761829/9124d203cc25456499761c459eff3060_ivra1d.mp4" type="video/mp4" />
</video>  </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
