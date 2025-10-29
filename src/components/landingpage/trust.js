"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function TrustSection() {
  const clients = [
    { name: "SIA", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739866/SNRL_LOGO.jpg_hcwqhb.jpg" },
    { name: "Retail Technology Show", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739865/Vector-LogoBloom_Hair_Atelier_-_Metalic_p3gxjs.png" },
    { name: "Defined", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739864/ylr_iazzys.jpg" },
    { name: "Ori", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739861/syps_e5ad1y.png" },
    { name: "The Native Pantry", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739861/sypd_v3rkky.png" },
    { name: "YLR", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739860/sunshine_book_club_zw3w0a.jpg" },
    { name: "SYPD Limited", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739859/23_02_2021_03_33_56_etrayn.png" },
    { name: "Creative Control Ventures", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739859/RTS_2024_-_Landscape_on_Black_itb6nc.png" },
    { name: "Glow Up", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739859/native_pantry_i5ys5m.png" },
    { name: "FundHer", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739859/reine_africaine_otexvz.png" },
    { name: "Beautie On Demand", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739857/orilifestyle_ewnqtb.jpg" },
    { name: "Bloom Hair Atelier", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739857/chef_sia_nkowdl.jpg" },
    { name: "Beautie On Deman", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739856/image_dma4dn.png" },
    { name: "Bloom Hair elier", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739856/glow_up_hwnuoe.png" },
    { name: "Beautie On Deand", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739856/earth_incaa5.png" },
    { name: "Bloom Hair Ateier", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739856/ccv_2_r7w0tv.png" },
    { name: "Bloom Hair Ateler", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739855/charlize_k1efqk.jpg" },
    { name: "Bloom Hair Aelier", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739855/25_02_2021_06_32_55_duhgxb.jpg" },
    { name: "Bloom Hair Atelir", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739855/ccv_hrv5go.png" },
    { name: "Bloom Hair Atelr", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739854/18_06_2021_18_57_42_t2yjys.png" },
    { name: "Bloom Hair Atelie", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739854/20_10_2021_15_01_49_zfitzs.jpg" },
    { name: "Bloom Hair Atier", logo: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739854/20_10_2021_15_01_45_veuzpz.jpg" },


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
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-3xl font-bold uppercase text-gray-700 tracking-wider mb-6 md:mb-12 text-center"
        >
          They Trust Us
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 items-center justify-items-center max-w-[90%] mx-auto">
          {visibleClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative w-full h-full aspect-square flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
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
