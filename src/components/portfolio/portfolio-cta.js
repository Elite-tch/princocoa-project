"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PortfolioCTA() {
  return (
    <section className="py-20 px-6 bg-[#FF1493]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl md:text-4xl text-white mb-8">
          Want to see our client success <span className="underline">case studies?</span>
        </h2>

        <Link
          href="/contact"
          className="inline-block bg-[#5A6F5F] text-white px-8 py-4 rounded-full text-xs font-semibold hover:bg-[#4A5F4F] transition-colors"
        >
          GET IN TOUCH
        </Link>
      </motion.div>
    </section>
  )
}
