"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  {
    url: "/v4.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v5.mp4",
    title: "",
    desc: ""
  },
  {
    url: "/v6.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v7.mov",
    title: "I have the floor podcast",
    desc: "Trending"
  },

   {
    url: "/v8.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v9.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v0.mov",
    title: "Chef SIA",
    desc: "Tiktok"
  },
  {
    url: "/v11.mov",
   title: "",
    desc: ""
  },
  
   {
    url: "/v12.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v13.mov",
    title: "",
    desc: ""
  },
  {
    url: "/v14.mov",
    title: "Anne Simone",
    desc: "Summer Collection"
  },
  {
    url: "/v15.mp4",
    title: "",
    desc: ""
  },
   {
    url: "/v16.mp4",
    title: "",
    desc: ""
  },
  {
    url: "/v17.mov",
    title: "Chef SIA",
    desc: "Tiktok"
  },
  {
    url: "/v18.mov",
    title: "",
    desc: ""
  },
 
]

export default function ProfessionalGallery() {
  return (
    <section className="md:mt-[15%] pb-24 mt-[8%] md:px-6">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-xl md:text-3xl font-bold uppercase text-center text-gray-700 mb-6 md:mb-10"
        >
         Reels & Tiktoks
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {professionalPhotos.map((photo, index) => {
            const isVideo = photo.url.endsWith(".mp4") || photo.url.endsWith(".mov")

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative md:aspect-[9/11] aspect-[9/10] overflow-hidden group cursor-pointer"
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
                  <div className="absolute bottom-16 left-4 right-8 p-2 bg-white">
                    <h4 className="text-lg font-bold text-gray-700">
                      {photo.title}
                    </h4>
                    <p className="text-sm text-gray-600">
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
