"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Link from "next/link"

const videos = [
  { title: "Product Launch", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761766563/p_rhkmyx.png" },
  { title: "Jewelry Brand", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738821/D2FD4155-7C28-42CF-A864-7D5A622EE525_L0_001-06_01_2025_16_44_42_xvekdw.png" },
  { title: "Clothing Brand", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738809/040E28D4-D1C3-4F65-B612-DEF1E0DAFE11_L0_001-06_01_2025_16_44_15_ovfbre.png" },
  { title: "Pilates Studio", href: "/", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738961/WEB_DESIGN_vip8te.jpg" },
  { title: "Wellness Community", href: "/", thumbnail: "/video-thumb-wellness.jpg" },
  { title: "Baby Product", href: "/", thumbnail: "/video-thumb-baby.jpg" },
 ]

export default function WebDesign() {
  return (
    <section className="pb-10 pt-4 md:px-6 ">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] 2xl:max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className=""
            >
              <div className="relative md:aspect-[9/10] aspect-[9/12]   overflow-hidde mb-3">
             <Image
          fill
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full  object-fill"
        />

                
              </div>
              <h3 className="font-serif text-lg text-gray-900 ">{video.title}</h3>
              <Link href={video.href} className="text-sm underline text-gray-600 "> View the website</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
