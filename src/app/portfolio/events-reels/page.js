"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  {
    url: "/ike.mp4",
    title: "",
    desc: ""
  },
  {
    url: "/v1.mov",
    title: "Meet the Ordors",
    desc: "Weeding Reception"
  },
  {
    url: "/v2.mov",
    title: "Chef SIA",
    desc: "Rountable Event"
  },
  {
    url: "/v3.mov",
    title: "Welcome BBQ",
    desc: "London"
  },
  
]

export default function ProfessionalGallery() {
  return (
    <section className="md:mt-[15%] pb-24 mt-[8%] px-2">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-xl md:text-4xl font-bold uppercase text-center text-gray-900 mb-6 md:mb-10"
        >
          Events Reels
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-1">
          {professionalPhotos.map((photo, index) => {
            const isVideo = photo.url.endsWith(".mp4") || photo.url.endsWith(".mov")

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative md:aspect-[9/14] aspect-[9/12] overflow-hidden group cursor-pointer"
              >
                {isVideo ? (
                  <video
                    src={photo.url}
                    className="w-full h-full object-cover"
                    
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <Image
                    fill
                    src={photo.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}

                {(photo.title || photo.desc) && (
                  <div className="absolute bottom-14 left-4 right-8 p-2 bg-white">
                    <h4 className="text-lg font-bold text-gray-700">
                      {photo.title}
                    </h4>
                    <p className="text-md md:text-lg text-gray-600">
                      {photo.desc}
                    </p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
