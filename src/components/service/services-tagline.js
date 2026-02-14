"use client"

import { motion } from "framer-motion"

export default function ServicesTagline() {
  return (
    <section className="bg-pink-600 py-10 md:py-20  px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-white/80 text-lg mb-4">Your creative content engine</p>
        <h2 className="font-serif text-xl md:text-4xl text-white mb-6 text-balance">
          Services that work together to build a sustainable content eco-system
        </h2>
        
      </motion.div>
    </section>
  )
}
