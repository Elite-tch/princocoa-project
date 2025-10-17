"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AcademySection() {
  return (
    <section className="relative overflow-hidden bg-[#004aad]">
      {/* Content Section */}
      <div className="relative bg-[#f2f6fb] py-20 pb-12">
        <div className="container mx-auto px-6 md:px-4 text-center">
         
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="text-4xl md:text-4xl  tracking-wider mb-4 text-center font-semibold"
          >
            Welcome to PAI
Consulting
          </motion.h2>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-md tracking-wider mb-4 text-gray-500 max-w-3xl mx-auto leading-tight font-normal"
          >
           At P.A.I, we are all about bold ideas, sharp
            strategies, and fearless execution. From brand
identity and social media to web design, content
creation, and interior design, we tackle every
creative challenge with innovation and style.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/academy"
              className="inline-block bg-[#004aad] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0056b3] transition-colors"
            >
              Contact us
            </Link>
          </motion.div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer w-[600px]  h-[400px]"
            >
              <Link href="/templates">
                <div className="relative overflow-hidden rounded-2xl w-full h-full">
                  <Image
                    src="/img.jpg"
                    alt="Templates"
                    fill
                    className="object-cover transition-transform duration-500 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
               
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="relative -mt-1">
        <svg 
          className="w-full h-24 md:h-32 lg:h-28" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          fill="none"
        >
          <path d="M0,120 Q720,0 1440,120 L1440,0 L0,0 Z" fill="#f2f6fb" />
        </svg>
      </div>
    </section>
  )
}