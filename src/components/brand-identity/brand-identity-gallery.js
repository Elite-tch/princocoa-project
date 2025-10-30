"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739825/Bloom_Hair_Atelier_Brand_Manual_-_7_cwlaem.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739825/Bloom_Hair_Atelier_Brand_Manual_-_6_s68g0k.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739825/Bloom_Hair_Atelier_Brand_Manual_-_5_kdiwnj.png",
 
]

export default function BrandIdentityGallery() {
  return (
    <section className=" md:pt-8 pt-6 md:pb-8 pb-14 md:px-6">
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
