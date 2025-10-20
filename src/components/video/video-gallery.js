"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const videos = [
  { title: "Product Launch", subtitle: "Teaser Content", thumbnail: "/video.mp4" },
  { title: "Jewelry Brand", subtitle: "Social Content", thumbnail: "/video-thumb-jewelry.jpg" },
  { title: "Clothing Brand", subtitle: "Social Content", thumbnail: "/video-thumb-clothing.jpg" },
  { title: "Pilates Studio", subtitle: "Educational Content", thumbnail: "/video-thumb-pilates.jpg" },
  { title: "Wellness Community", subtitle: "Social Content", thumbnail: "/video-thumb-wellness.jpg" },
  { title: "Baby Product", subtitle: "Unboxing Content", thumbnail: "/video-thumb-baby.jpg" },
  { title: "Jewelry Brand", subtitle: "Collection Launch Content", thumbnail: "/video-thumb-jewelry-2.jpg" },
  { title: "Real Estate Brokerage", subtitle: "BTS Content", thumbnail: "/video-thumb-realestate.jpg" },
  { title: "Med Spa Service", subtitle: "Launch Content", thumbnail: "/video-thumb-medspa.jpg" },
  { title: "Wedding", subtitle: "Event Content", thumbnail: "/video-thumb-wedding.jpg" },
  { title: "Medical Conference", subtitle: "Event Content", thumbnail: "/video-thumb-conference.jpg" },
  { title: "Interview-Style", subtitle: "Social Content", thumbnail: "/video-thumb-interview.jpg" },
  { title: "Event", subtitle: "Content Creation", thumbnail: "/video-thumb-event.jpg" },
  { title: "Jewelry Brand", subtitle: "Compare and Contrast", thumbnail: "/video-thumb-jewelry-3.jpg" },
  { title: "Skincare Brand", subtitle: "Demo Content", thumbnail: "/video-thumb-skincare.jpg" },
  { title: "Pilates Brand", subtitle: "Education", thumbnail: "/video-thumb-pilates-2.jpg" },
]

export default function VideoGallery() {
  return (
    <section className="pb-10 md:px-6 ">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%] ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className=""
            >
              <div className="relative md:aspect-[9/11] aspect-[9/10]  overflow-hidden mb-3">
          
        <video
          src={video.thumbnail}
          className="w-full h-full object-cover"
          controls
          muted
        />
     

                
              </div>
              <h3 className="font-serif text-lg text-gray-700 ">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
