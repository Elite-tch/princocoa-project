"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const videos = [
  { title: "Resi Renewable Africa", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738809/040E28D4-D1C3-4F65-B612-DEF1E0DAFE11_L0_001-06_01_2025_16_44_15_ovfbre.png" },
  { title: "Defined", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738825/A93DE538-27D3-42D8-BAB2-AE0C18FFB33C_L0_001-18_10_2024_15_46_58_zdzpdg.jpg" },
  { title: "Resi Renewable Africa", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/video/upload/vc_auto/v1761738798/09_01_2025_14_49_42_yybcae.mp4" }
]

export default function WebDesign() {
  return (
    <section className="pb-10 pt-4 md:px-6 ">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] 2xl:max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
          {videos.map((video, index) => {
            const isVideo = video.thumbnail.endsWith(".mp4")

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative md:aspect-[9/14] aspect-[9/12] overflow-hidden mb-3">

                  {isVideo ? (
                    <video
                      src={video.thumbnail}
                      className="w-full h-full object-fill"
                      autoPlay
                      muted
                      loop
                      playsInline
                     
                    />
                  ) : (
                    <Image
                      fill
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-fill"
                    />
                  )}

                </div>

                <h3 className="font-serif text-lg md:text-xl text-gray-900">{video.title}</h3>
                <Link href={video.href} className="text-sm underline text-gray-600">View the website</Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
