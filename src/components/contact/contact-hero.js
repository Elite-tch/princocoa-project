"use client"

import { motion } from "framer-motion"

export default function ContactHero() {
  return (
    <section className="pt-20 px-6">
      <div className="max-w-7xl mt-[10%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-4xl text-gray-800"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 "
        >
          Fill out the form below and we will be in touch with you as soon as possible!
        </motion.p>
        
      </div>
    </section>
  )
}
