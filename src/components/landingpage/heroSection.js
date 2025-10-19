"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-28 pb-8 md:pb-0 md:pr-6 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px]  overflow-hidden"
          >
            <Image src="/img.jpg" alt="Creative workspace" fill className="object-cover" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:space-y-8 space-y-4"
          >
            <motion.h1
              className="text-4xl md:text-6xl text-[#004aad]  text-center  font-ligt  font-serif leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We&apos;re <span className="italic  font-serif text-[#004aad]/80">creatives</span> at heart driven by{" "}
              <span className="italic font-serif text-pink-600">purposeful</span> strategy
            </motion.h1>

            <motion.p
              className="text-lg text-[#004aad] text-center mx-auto w-[80%] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A marketing agency helping brands craft campaigns that turn heads and drive results
            </motion.p>

            <motion.div
              className="flex gap-4 mx-auto text-p w-[80%] justify-between pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-pink-600 md:text-base text-xs rounded-full text-primary-foreground hover:bg-pink-700 font-semibold md:px-8 px-4">
                WORK WITH US
              </Button>
              <Button
                size="lg"
                variant="outline" 
                className="border-pink-600 rounded-full text-pink-600 md:text-base text-xs hover:bg-pink-600 hover:text-primary-foreground font-semibold md:px-8 px-4 bg-transparent"
              >
                LEARN FROM US
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
