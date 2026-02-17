"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { siteData } from "@/data/site-data"

export default function PortfolioHero() {
  return (
    <section className="relative h-[40vh] md:h-[80vh] mt-32 flex items-center justify-center overflow-hidden mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteData.hero.portfolio.image}
          alt="Portfolio Background"
          fill
          className="object-cover"
          priority
        />
        {/* Deep Overlay for contrast */}
        <div className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-[0.9px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-sans text-3xl md:text-8xl font-bold uppercase tracking-[0.2em] text-white">
          Portfolio
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-white mx-auto mt-4"
        />
      </motion.div>
    </section>
  )
}
