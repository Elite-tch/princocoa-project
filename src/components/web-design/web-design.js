"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Link from "next/link"

const videos = [
  { title: "Product Launch", href: "/", thumbnail: "/img.jpg" },
  { title: "Jewelry Brand", href: "/", thumbnail: "/video-thumb-jewelry.jpg" },
  { title: "Clothing Brand", href: "/", thumbnail: "/video-thumb-clothing.jpg" },
  { title: "Pilates Studio", href: "/", thumbnail: "/video-thumb-pilates.jpg" },
  { title: "Wellness Community", href: "/", thumbnail: "/video-thumb-wellness.jpg" },
  { title: "Baby Product", href: "/", thumbnail: "/video-thumb-baby.jpg" },
 ]

export default function WebDesign() {
  return (
    <section className="py-10 px-6 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto w-[95%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className=""
            >
              <div className="relative aspect-[9/11]  rounded-lg overflow-hidden mb-3">
             <Image
          fill
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover"
        />

                
              </div>
              <h3 className="font-serif text-lg text-gray-800">{video.title}</h3>
              <Link href={video.href} className="text-sm underline text-gray-600"> View the website</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
