"use client"

import { motion } from "framer-motion"

export default function PhotoExamplesIntro() {
  return (
    <section className="pt-20 pb-4 px-6">
      <div className="max-w-4xl mx-auto mt-[10%] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-4xl text-gray-800 mb-12"
        >
          We offer <span className="italic">different</span> kinds of photography: Professional and Lifestyle
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 className="font-bold text-xl mb-4 text-gray-800">WHAT&apos;S THE DIFFERENCE?</h2>
          <p className="text-gray-700 leading-relaxed">
  Our professional photos deliver a <strong>studio-inspired look</strong>, shot with high-end equipment for sharp and polished visuals. In contrast, our lifestyle photos, often captured on an iPhone, highlight your product in <strong>everyday settings</strong>, creating a genuine and relatable feel. While each style serves a unique purpose, we’ve found that a <em>blend of both</em> gives the most balanced and effective results for our clients.
</p>

        </motion.div>
      </div>
    </section>
  )
}
