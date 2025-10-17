"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TrustSection() {
  const clients = [
    { name: "SIA", logo: "/img.jpg" },
    { name: "Retail Technology Show", logo: "/img.jpg" },
    { name: "Defined", logo: "/img.jpg" },
    { name: "Ori", logo: "/img.jpg" },
    { name: "The Native Pantry", logo: "/img.jpg" },
    { name: "YLR", logo: "/img.jpg" },
    { name: "SYPD Limited", logo: "/img.jpg" },
    { name: "Creative Control Ventures", logo: "/img.jpg" },
    { name: "Glow Up", logo: "/img.jpg" },
    { name: "FundHer", logo: "/img.jpg" },
    { name: "Beautie On Demand", logo: "/img.jpg" },
    { name: "Bloom Hair Atelier", logo: "/img.jpg" },
    
  ]

  return (
    <section className="py-20 bg-[#f2f6fb]">
      <div className="container mx-auto px-4">
        {/* Heading */}
       <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-4xl  tracking-wider mb-12 text-center font-semibold"
          >
           They Trust Us
          </motion.h2>
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 items-center justify-items-center max-w-[90%] mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative md:w-[180px] w-full h-38 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-fit w-full"
              />
            </motion.div>
          ))}

          {/* "You are next" Card */}
          
        </div>

        
      </div>
    </section>
  )
}