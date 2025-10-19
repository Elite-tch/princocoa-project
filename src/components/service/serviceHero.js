"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] md:h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
            <div className="absolute inset-0 mt-[35%] md:mt-[10%]">
              <Image
                src="/img2.jpg"
                alt="Creative marketing agency based in Chicago"
                fill
                className=" o "
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-[25%] md:pt-[10%]"
      >
        <h1 className="font-poppins text-4xl font-sembold md:text-4xl lg:text-6xl text-white ">Our Services</h1>
      </motion.div>
    </section>
  )
}
