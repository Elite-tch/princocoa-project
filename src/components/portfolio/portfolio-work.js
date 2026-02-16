"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { portfolioData } from "@/data/portfolio"

export default function PortfolioWork() {
  const categories = Object.entries(portfolioData).map(([slug, data]) => ({
    title: data.title,
    image: data.coverImage,
    link: `/portfolio/${slug}`,
  }))

  return (
    <section className="pb-20 pt-3 px-6">
      <div className="max-w-6xl 2xl:max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-3 space-y-3  md:space-y-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className=" "
            >

              <div className="relative group md:aspect-[9/11] 2xl:aspect-[9/11] aspect-[9/10] overflow-hidden mb-6 shadow rounded border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#0a0a0a]/10">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />


              </div>

              <h5 className="font-sans text-lg md:text-xl font-light mb-3 text-[#0a0a0a] uppercae tracking-tight transition-colors group-hover:text-pink-600">
                {category.title}
              </h5>


              <Link
                href={category.link}
                className="inline-block bg-[#0a0a0a] text-white px-10 py-3.5 rounded text-[10px] font-sans font-bold uppercase tracking-[0.15em] hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                See Examples
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
