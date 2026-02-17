"use client"

import { motion } from "framer-motion"

export default function ServicesTagline() {
  return (
    <section className=" bg-white pt-10 md:pt-20  px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className=" text-2xl md:text-4xl font-sans font-bold text-gray-950 uppercase tracking-tight ">Your creative content engine</h2>
        <p className="font-serif text-md md:text-lg  text-balance">
          Services that work together to build a sustainable content eco-system
        </p>
        
      </motion.div>
    </section>
  )
}
