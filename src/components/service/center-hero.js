"use client"
import { Button } from "../ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesCenterHero() {
  return (
    <section className="relative h-[40vh] md:h-screen md:max-h-[450px] 2xl:max-h-[550px] flex items-star justify-star overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743075/12E1805F-9E4E-4474-9CDE-059EF2810718_L0_001-16_05_2023_04_19_47_qpp6ng.jpg"
          alt="Creative marketing agency based in Chicago"
          fill
          className=" object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-8 md:px-24 pt-[8%] md:pt-[5%] flex flex-col gap-6 items-center justify-start "
      >
        <h1 className="text-3xl md:text-5xl text-white tracking-wider md:mb-2 text-center font-semibold">See us in Action</h1>
        <Link href="/portfolio"><Button size='lg' variant="outline" className='bg-pink-600 hover:bg-pink-700 text-white border-0 hover:text-white'>View Portfolio</Button></Link>

      </motion.div>
    </section>
  )
}
