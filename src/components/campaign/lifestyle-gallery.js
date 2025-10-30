"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const lifestylePhotos = [
  "https://res.cloudinary.com/dibwnfwk9/video/upload/v1761762106/495df69dfdb14ab59156b02ef815d467_y02bus.mp4",
  "https://res.cloudinary.com/dibwnfwk9/video/upload/v1761762097/aa98ffe8b6d24f85b0f78ddc12c504af_lclcpg.mp4",
  "https://res.cloudinary.com/dibwnfwk9/video/upload/v1761762026/00c442435eeb4b2392b0c0016ff21132_x8k4bp.mp4",
  "https://res.cloudinary.com/dibwnfwk9/video/upload/v1761761899/7400251508644b9e9c0775225fc97b70_ysgbwt.mp4",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761895/IMG_9781_dl0ucn.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761839/IMG_9780_w87ppd.png",
  "https://res.cloudinary.com/dibwnfwk9/video/upload/v1761761829/9124d203cc25456499761c459eff3060_ivra1d.mp4",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761800/YLR-4947_vbevyl.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761792/IMG_9779_mlsevy.png",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761779/YLR-4988_k1s18s.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761760/YLR-4605_hwtq52.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761759/YLR-4739_zexgdw.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761759/IMG_8167_yebsld.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761758/YLR-4627_ftltow.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762105/23_03_2021_17_19_29_mc5uqy.jpg",
  "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761748/07_04_2021_18_34_19_vpkgkw.jpg",
  'https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761733/24_03_2021_19_07_41_fuxp2f.jpg'
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
          Premium Style Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {lifestylePhotos.map((photo, index) => {
            const isVideo = photo.endsWith(".mp4") || photo.endsWith(".mov")

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
                    src={photo}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <Image
                    fill
                    src={photo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
