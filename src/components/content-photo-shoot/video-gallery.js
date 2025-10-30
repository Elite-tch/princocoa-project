"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"


const videos = [
  { title: "Jewelry Brand", subtitle: "Social Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743016/FBB6EB18-4B0D-4F8D-BE36-1AD44A345840_L0_001-15_05_2023_20_56_03_zc6td2.jpg" },
  { title: "Clothing Brand", subtitle: "Social Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742944/D7BA681E-F416-4355-BCA3-152D64E5703A_L0_001-15_05_2023_20_56_03_fu0wte.jpg" },
  { title: "Pilates Studio", subtitle: "Educational Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742913/F443A943-4403-4CF4-9A4A-6CE5CC1BD99C_L0_001-15_05_2023_20_56_02_ebgjck.jpg" },
  { title: "Wellness Community", subtitle: "Social Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742902/22_07_2022_03_00_08_trs9do.jpg" },
  { title: "Baby Product", subtitle: "Unboxing Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743114/1853EA70-8A63-4F52-9B66-6A68194DF2EB_L0_001-30_03_2023_22_09_47_yae3vc.jpg" },
  { title: "Jewelry Brand", subtitle: "Collection Launch Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743120/DE2B38FD-5AB9-4B39-90FE-E681F7E06981_L0_001-30_03_2023_22_36_13_iuz4hc.jpg" },
  { title: "Real Estate Brokerage", subtitle: "BTS Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743099/E13F9C9E-6DEC-4D20-924F-0636ED4D0EA2_L0_001-18_08_2024_10_30_32_amyb7c.jpg" },
  { title: "Med Spa Service", subtitle: "Launch Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743050/FCA28529-D886-46E8-91C7-D89946CEF231_L0_001-30_03_2023_22_36_01_f7r7e0.jpg" },
  { title: "Wedding", subtitle: "Event Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742976/71E191BB-337D-4ADA-B055-B83F592C2B56_L0_001-25_07_2023_04_12_48_dnu1rb.jpg" },
  { title: "Medical Conference", subtitle: "Event Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742902/22_07_2022_03_00_08_trs9do.jpg" },
  { title: "Interview-Style", subtitle: "Social Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742910/22_07_2022_03_11_09_axh12t.jpg" },
  { title: "Event", subtitle: "Content Creation", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742891/22_07_2022_02_59_10_rk20bu.jpg" },
  { title: "Jewelry Brand", subtitle: "Compare and Contrast", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742902/5D24AF32-C749-407E-B502-7CD24C9899C9_L0_001-16_05_2023_04_03_29_iwemrv.jpg" },
  { title: "Skincare Brand", subtitle: "Demo Content", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742905/E98EC581-65FF-4B53-8CD1-1AE605E3EE3E_L0_001-16_05_2023_10_17_32_tq7eyg.jpg" },
  { title: "Pilates Brand", subtitle: "Education", thumbnail: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761742913/9D0F5CCA-C959-4B3D-9F39-BF35E605250C_L0_001-16_05_2023_04_11_16_padvgr.jpg" },
  
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
          
        <Image
         fill
          src={video.thumbnail}
          className="w-full h-full object-cover"
         alt={video.title}
        />
     

                
              </div>
           {/*   <h3 className="font-serif text-lg text-gray-700 ">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.subtitle}</p> */} 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
