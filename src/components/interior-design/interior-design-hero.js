"use client"

import { motion } from "framer-motion"

export default function InteriorDesignHero() {
  return (
    <section className="md:pt-20 pt-[35%] px-6">
      <div className="max-w-7xl pt-[10%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-bold uppercase text-[#004aad] "
        >
       Interior Architectural Design Projects
        </motion.h1>
      </div>
    </section>
  )
}
