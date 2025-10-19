"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const workCategories = [
  {
    title: "Photography",
    image: "/img.jpg",
    link: "/portfolio/photography",
  },
  {
    title: "Videography / Content Creation",
    image: "/img.jpg",
    link: "/portfolio/videography",
  },
   {
    title: "Web Design",
    image: "/img.jpg",
    link: "/portfolio/web-design",
  },
  {
    title: "Brand Identity Design",
    image: "/img.jpg",
    link: "/portfolio/brand-identity",
  },
   {
    title: "Interior Architectural Design",
    image: "/img.jpg",
    link: "/portfolio/interior-design",
  },
  {
    title: "Other Notable Projects",
    image: "/img.jpg",
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

              <h2 className="font-serif text-xl mb-2 text-[#004aad]">{category.title}</h2>

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
