"use client"

import { motion } from "framer-motion"

export default function BrandIdentityHero() {
  return (
    <section className="pt-20 px-6">
      <div className="max-w-7xl pt-[26%] md:pt-[10%] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl font-bold uppercase text-[#004aad] "
        >
       Brand Identity Design Projects
        </motion.h1>
      </div>
    </section>
  )
}
