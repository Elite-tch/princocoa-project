"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  "/img2.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
]

export default function ProfessionalGallery() {
  return (
    <section className="md:py-16 py-10 md:px-6">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-xl md:text-3xl font-bold uppercase text-center text-[#004aad] mb-6 md:mb-10"
        >
          Professional Photography Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {professionalPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="md:aspect-[9/11] aspect-[9/10] relative  overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={photo || "/placeholder.svg"}
                alt={`Professional photography example ${index + 1}`}
                className="w-full h-full  object-cover transition-transform duration-500"
                fill
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
