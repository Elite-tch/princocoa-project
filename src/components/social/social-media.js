"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761573/25_02_2021_15_39_04_im4rre.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761572/earth_from_earth_eydh9m.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761572/ylr_before_r2tda0.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761570/ori_after_dpatz9.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761565/native_pantry_jsuhvu.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761557/19_05_2021_20_33_31_iv6pga.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761557/07_06_2021_15_40_00_t19a6f.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761555/ORILIFESTYLE_POST_2_bghomn.png",
  'https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761553/07_06_2021_15_40_19_ewy62v.jpg'
 
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
             
     
        <Image
          fill
          src={photo || "/placeholder.svg"}
          alt=''
          className="w-full h-full object-cover"
        />
      
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
