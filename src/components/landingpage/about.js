"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AcademySection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col mx-auto md:w-[90%] w-[95%] md:flex-row items-center gap-12">
          {/* Left - Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-gray-900"
            >
              Meet the <span className="text-pink-600">Team</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              At Princocoa Studios, we are a collective of bold thinkers, sharp strategists, and fearless creators.
              Our diverse team brings together expertise in brand management, creative direction, and digital production
              to turn your vision into a resonant brand experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/about"
                className="inline-block bg-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg"
              >
                ABOUT US
              </Link>
            </motion.div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video md:aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/img2.jpg"
                alt="Princocoa Studios Team"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}