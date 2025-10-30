"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const workCategories = [
  {
    title: "Campaigns",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761761754/5DB75267-5E0C-4FF7-9A0A-199FDCEAC94E_L0_001-16_05_2023_04_11_33_go2w2x.jpg",
    link: "/portfolio/campaigns",
  },
  {
    title: "Content Photo Shoot",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743016/FBB6EB18-4B0D-4F8D-BE36-1AD44A345840_L0_001-15_05_2023_20_56_03_zc6td2.jpg",
    link: "/portfolio/content-photo-shoot",
  },
   {
    title: "Web Design",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738825/A93DE538-27D3-42D8-BAB2-AE0C18FFB33C_L0_001-18_10_2024_15_46_58_zdzpdg.jpg",
    link: "/portfolio/web-design",
  },
  {
    title: "Brand Identity Design",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739825/Bloom_Hair_Atelier_Brand_Manual_-_7_cwlaem.png",
    link: "/portfolio/brand-identity",
  },
   {
    title: "Interior Architectural Design",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762436/pn3_xl53fb.png",
    link: "/portfolio/interior-design",
  },
  {
    title: "Other Notable Projects",
    image: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762436/pn3_xl53fb.png",
    link: "/portfolio/other-project",
  },
]

export default function PortfolioWork() {
  return (
    <section className="pb-20 pt-3 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 space-y-3 md:space-y-6 gap-6">
          {workCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative md:aspect-[9/11] aspect-[9/10] rounded overflow-hidden mb-6 shadow-lg">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              </div>

              <h2 className="font-serif text-xl mb-2 text-gray-600">{category.title}</h2>

              <Link
                href={category.link}
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-pink-700 transition-colors"
              >
                SEE EXAMPLES
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
