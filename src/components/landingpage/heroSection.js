"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-28 pb-8 md:pb-0 md:pr-6 bg-[#004aad]/5 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl  text-center  font-light leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We&apos;re <span className="italic  font-serif text-primary">creatives</span> at heart driven by{" "}
              <span className="italic font-serif text-[#004aad]">purposeful</span> strategy
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground text-center mx-auto w-[80%] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A marketing agency helping brands craft campaigns that turn heads and drive results
            </motion.p>

            <motion.div
              className="flex gap-4 mx-auto w-[95%] md:w-[80%] justify-between pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-[#004aad] md:text-base text-sm rounded-full text-primary-foreground hover:bg-[#004aad]/90 font-semibold px-8">
                WORK WITH US
              </Button>
              <Button
                size="lg"
                variant="outline" 
                className="border-[#004aad] rounded-full text-[#004aad] md:text-base text-sm hover:bg-[#004aad] hover:text-primary-foreground font-semibold px-8 bg-transparent"
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
