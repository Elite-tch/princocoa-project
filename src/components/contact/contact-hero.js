"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative  h-[70vh] md:h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 mt-[35%] md:mt-[10%]">
        <Image
          src="/img.jpg"
          alt="Creative marketing agency based in Chicago"
          fill
          className=" object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full pt-[50%]  md:pt-[35%] px-10 md:px-28 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-poppins text-4xl font-sembold md:text-4xl lg:text-6xl text-right text-white md:text-left"
        >
          Contact Us
        </motion.h1>
      </div>
    </section>
  )
}
