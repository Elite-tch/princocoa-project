"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762405/944a1e13-d8e3-4e7c-82d6-208a9520491a_wguyxd.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762405/7E492390-FAF8-430C-9980-63027FD29E82_L0_001-09_01_2025_15_14_44_xu6eyv.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762411/af1d89e5-3764-419e-b5ed-5ca9e13df7c9_ibcu3v.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762405/7E492390-FAF8-430C-9980-63027FD29E82_L0_001-09_01_2025_15_14_44_xu6eyv.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762405/33767f9e-2fdc-426c-b8a5-8a711d23833a_byl51g.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762404/9d56452f-d481-49c6-a85d-4fb8985c15ef_jt5jnw.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762442/CANTAGALI_1_miiqub.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762442/CANTAGALI_1_miiqub.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762453/CANTAGALI_3_cds6yw.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
]

export default function InteriorGallery() {
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
