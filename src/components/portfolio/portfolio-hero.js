"use client"

import { motion } from "framer-motion"

export default function PortfolioHero() {
  return (
    <section className="pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-[33%] md:mt-[10%] text-center"
      >
        <h1 className="font-serif text-xl md:text-3xl font-bold uppercase text-[#004aad] mb-2 md:mb-4">Our Work</h1>
      </motion.div>
    </section>
  )
}
