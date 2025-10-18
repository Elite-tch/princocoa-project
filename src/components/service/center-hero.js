"use client"
import { Button } from "../ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesCenterHero() {
  return (
    <section className="relative h-[70vh] md:h-[450px] max-h-[800px] flex items-start justify-start overflow-hidden ">
      {/* Background Image */}
            <div className="absolute inset-0 ">
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
className="relative z-10 px-24 pt-[5%] flex flex-col gap-6 items-center justify-start "
      >
        <h1 className="text-4xl md:text-4xl text-white tracking-wider mb-2 text-center font-semibold">See us in Action</h1>
      <Link href="/portfolio"><Button size='lg' variant="outline" className='bg-pink-600 hover:bg-pink-700 text-white border-0 hover:text-white'>View Portfolio</Button></Link>
      
      </motion.div>
    </section>
  )
}
