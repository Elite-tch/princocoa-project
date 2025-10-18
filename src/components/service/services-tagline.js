"use client"

import { motion } from "framer-motion"

export default function ServicesTagline() {
  return (
    <section className="bg-pink-600 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-white/80 text-lg mb-4">We&apos;ve mastered the art of blending</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-balance">
          we don&apos;t just create, we build , maintain, and grow brands
        </h2>
        
      </motion.div>
    </section>
  )
}
