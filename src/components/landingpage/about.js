"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AcademySection() {
  return (
    <section className="relative overflow-hidden bg-pink-600">
      {/* Content Section */}
      <div className="relative bg-[#FFF8E7] py-10 md:py-10 pb-12">
        <div className="container flex md:flex-row flex-col w-[90%] items-center justify-between gap-3 md:gap-12 mx-auto px-6 md:px-4 text-center">
         
         <div>
           <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="text-2xl md:text-3xl font-bold uppercase  tracking-wider mb-2 text-center text-[#004aad] "
          >
            Welcome to PAI
Consulting
          </motion.h2>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" md:text-lg text-md mb-4 text-[#004aad] max-w-3xl mx-auto "
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
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0056b3] transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
         </div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer w-[400px] md:w-[600px] h-[300px] md:h-[400px]"
            >
              <div className="relative overflow-hidden rounded-2xl w-full  h-full">
                <Image
                  src="/img.jpg"
                  alt="Templates"
                    fill
                    className="object-cover transition-transform duration-500 "
                  />
              
                </div>
               
            
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
          <path d="M0,120 Q720,0 1440,120 L1440,0 L0,0 Z" fill="#FFF8E7" />
        </svg>
      </div>
    </section>
  )
}