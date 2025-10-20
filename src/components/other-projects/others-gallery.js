"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
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
  "/img.jpg",
]

export default function OtherGallery() {
  return (
    <section className="md:pt-8 pt-4 pb-16 md:px-6">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {professionalPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="md:aspect-[9/11] aspect-[9/10] relative  overflow-hidden  group cursor-pointer"
            >
               {index === 0 ? (
        <video
          src={photo}
          className="w-full h-full object-cover"
          controls
          muted
        />
      ) : (
        <Image
          fill
          src={photo || "/placeholder.svg"}
          alt=''
          className="w-full h-full object-cover"
        />
      )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
