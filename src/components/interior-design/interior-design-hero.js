"use client"

import { motion } from "framer-motion"

export default function InteriorDesignHero() {
  return (
    <section className="pt-20 px-6">
      <div className="max-w-7xl pt-[10%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-4xl text-white "
        >
       Interior Architectural Design Projects
        </motion.h1>
      </div>
    </section>
  )
}
