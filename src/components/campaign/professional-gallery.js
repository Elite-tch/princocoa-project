"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const professionalPhotos = [
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762081/15_05_2022_22_04_16_y2olj3.jpg",
    title: "Defined DBG",
    desc: "Summer Collection"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762002/17_04_2022_13_59_45_xqtck7.jpg",
    title: "Defined DBG",
    desc: "Spring Collection | Studio shoot."
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761952/17_04_2022_13_59_50_pp0tl6.jpg",
    title: "Defined DBG",
    desc: "Spring Collection | Studio shoot."
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761874/991FD8BF-4834-4089-903F-B736B2661726_L0_001-16_05_2023_10_33_44_vfhwpt.jpg",
    title: "Defined DBG",
    desc: "Spring Collection | Studio shoot."
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761810/9229484D-5E5E-4947-A4D0-BC2ADE20FEB2_L0_001-16_05_2023_10_34_51_xwxg5f.jpg",
    title: "Defined DBG",
    desc: "Summer Collection"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761768/CC519C70-998D-4277-B833-440081C69023_L0_001-16_05_2023_10_34_03_gk51rq.jpg",
   title: "Defined DBG",
    desc: "Summer Collection"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761736/15_05_2022_22_13_5_rzxlux.jpg",
    title: "Orilifestyle ",
    desc: "Hair Course Campaign"
  },
 
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761745/bts_ori_campaign_imdguc.jpg",
    title: "Orilifestyle ",
    desc: "Hair Course Campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761747/19_10_2021_17_38_01_tevelf.jpg",
    title: "Orilifestyle ",
    desc: "Hair Course Campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761865/15_05_2022_22_13_58_qgrjxw.jpg",
   title: "Orilifestyle ",
    desc: "Hair Course Campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761778/08_08_2021_13_52_12_uslpym.jpg",
   title: "Orilifestyle ",
    desc: "Hair Course Campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761893/3B43828D-598D-40C4-8AE0-E4948BE47976_Original_gxbdee.jpg",
    title: "Lahanna",
    desc: "Accessories campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761735/IMG_2457_Original_rpiino.jpg",
   title: "Lahanna",
    desc: "Accessories campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761737/IMG_2370_Original_ngpaxp.jpg",
   title: "Lahanna",
    desc: "Accessories campaign"
  },
  {
    url: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761754/5DB75267-5E0C-4FF7-9A0A-199FDCEAC94E_L0_001-16_05_2023_04_11_33_go2w2x.jpg",
   title: "Lahanna",
    desc: "Accessories campaign"
  }
]

export default function ProfessionalGallery() {
  return (
    <section className="md:mt-[15%] mt-[16%] md:px-6">
      <div className="max-w-7xl mx-auto w-[90%] md:w-[95%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins text-xl md:text-3xl font-bold uppercase text-center text-gray-700 mb-6 md:mb-10"
        >
         Professional Campaigns Gallery
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {professionalPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="md:aspect-[9/11] aspect-[9/11] relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.url}
                alt={`Professional photography example ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
                fill
              />

              {(photo.title || photo.desc) && (
                <div className="absolute bottom-0 md:bottom-4 md:left-4 md:right-8 p-2 bg-white">
                  <h4 className="md:text-lg text-sm font-bold text-gray-700">
                    {photo.title}
                  </h4>
                  <p className="md:text-sm text-xs text-gray-600">
                    {photo.desc}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
