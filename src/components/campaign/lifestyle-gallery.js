"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const lifestylePhotos = [
  "/img2.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
]

export default function LifestyleGallery() {
  return (
    <section className="py-16 md:px-6">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold uppercase text-center text-gray-700 mb-6 md:mb-10"
        >
          Yaya
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {lifestylePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className=" relative md:aspect-[9/11] aspect-[9/10]  overflow-hidden  group cursor-pointer"
            >
              <Image
                src={photo || "/placeholder.svg"}
                alt={`Lifestyle photography example ${index + 1}`}
                className="w-full h-full object-cover  transition-transform duration-500"
                fill
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
