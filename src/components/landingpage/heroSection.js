"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-28 pb-8 md:pb-0 md:pr-6 ">
      <div className="">
        <div className="flex gap-6 md:flex-row flex-col md:gap-0 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] w-full  overflow-hidden"
          >
            <Image src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739833/lahanna_shoot_xgvy3h.jpg" alt="Creative workspace" fill className="object-cover" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className=" "
          >
            <motion.h1
              className="text-4xl md:text-6xl text-gray-900  text-center  font-ligt leading-12 md:leading-20 text-balance "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Your plug-in creative 
              <b className="text-4xl md:text-5xl text-pink-600"> Engine </b> 
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-gray-700 text-center mx-auto w-[80%] leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
             We connect strategy, identity, content, and production into one eco- system that keeps your brand growing.
            </motion.p>

            <motion.div
              className="flex gap-4 mx-auto text-p mt-5 w-[80%] justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href='/contact'> 
              <Button size="lg" className="bg-pink-600 md:text-base text-xs rounded-full text-primary-foreground hover:bg-pink-700 font-semibold md:px-8 px-4">
                WORK WITH US
              </Button>
              </Link>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
