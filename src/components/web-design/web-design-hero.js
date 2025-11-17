"use client"

import { motion } from "framer-motion"

export default function WebDesignHero() {
  return (
    <section className="pt-32 px-6">
      <div className="max-w-7xl pt-[16%] md:pt-[5%] 2xl:pt-[3%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-4xl font-bold uppercase text-gray-900  mb-4"
        >
          Web Design Projects
        </motion.h1>
      </div>
    </section>
  )
}
