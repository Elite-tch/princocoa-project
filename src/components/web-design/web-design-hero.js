"use client"

import { motion } from "framer-motion"

export default function WebDesignHero() {
  return (
    <section className="pt-32 px-6">
      <div className="max-w-7xl pt-[10%] md:pt-[5%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-bold uppercase text-[#004aad] mb-4"
        >
          Web Design Projects
        </motion.h1>
      </div>
    </section>
  )
}
