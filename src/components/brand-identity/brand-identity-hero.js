"use client"

import { motion } from "framer-motion"

export default function BrandIdentityHero() {
  return (
    <section className="pt-20 px-6">
      <div className="max-w-7xl pt-[30%] md:pt-[10%] mx-auto 2xl:pt-[6%] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-4xl font-bold uppercase text-gray-900 "
        >
       Brand Identity Design
        </motion.h1>
      </div>
    </section>
  )
}
