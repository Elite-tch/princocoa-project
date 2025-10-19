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
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto w-[95%] ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-4xl md:text-4xl text-center text-gray-800 mb-12"
        >
          Professional Photography Projects
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {professionalPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="aspect-[9/11] relative  overflow-hidden rounded-lg group cursor-pointer"
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
