"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function GallerySection() {
  const clients = [
    { name: "SIA", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742891/22_07_2022_02_59_10_rk20bu.jpg" },
    { name: "Retail Technology Show", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742891/22_07_2022_14_47_58_gklswn.jpg" },
    { name: "Defined", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743099/E13F9C9E-6DEC-4D20-924F-0636ED4D0EA2_L0_001-18_08_2024_10_30_32_amyb7c.jpg" },
    { name: "Ori", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742910/22_07_2022_03_11_09_axh12t.jpg" },
    { name: "YLR", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743079/5F428854-29E1-4828-9DC8-FCA6490223B4_L0_001-30_03_2023_22_33_32_yg0art.jpg" },
    { name: "SYPD Limited", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743120/DE2B38FD-5AB9-4B39-90FE-E681F7E06981_L0_001-30_03_2023_22_36_13_iuz4hc.jpg" },
    { name: "Creative Control Ventures", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742976/71E191BB-337D-4ADA-B055-B83F592C2B56_L0_001-25_07_2023_04_12_48_dnu1rb.jpg" },
    { name: "Glow Up", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742922/B880EB2F-BBDB-4574-A02F-56346313FA19_L0_001-18_08_2024_10_34_25_ahemid.jpg" },
        
  ]

  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleClients =
    isMobile && !showMore ? clients.slice(0, 6) : clients

  return (
    <section className="md:py-20 py-10">
      <div className=" mx-auto px-8 md:px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-4xl font-bold uppercase text-gray-900 tracking-wider mb-6 md:mb-12 text-center"
        >
        Our Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-4 xl:gap-12 items-center justify-items-center w-[90%] mx-auto">
          {visibleClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative h-[380px] w-[360px] md:w-[380px] flex items-center justify-center  transition-all duration-300 cursor-pointer"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-cover "
              />
            </motion.div>
          ))}
        </div>

        {isMobile && (
          <div className="flex justify-center mt-6">
            {!showMore ? (
              <button
                onClick={() => setShowMore(true)}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
              >
                Load More
              </button>
            ) : (
              <button
                onClick={() => setShowMore(false)}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded"
              >
                Show Less
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  )
}
