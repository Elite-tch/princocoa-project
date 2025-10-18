"use client"

import { motion } from "framer-motion"

export default function BrandBlueprintSection() {
  return (
    <section className="py-20 px-6 bg-pink-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-4xl text-white  tracking-wider mb-2 text-center font-semibold">The Brand Blueprint</h2>

        <p className="text-md text-white mb-8">Agency-level expertise without the monthly retainer</p>

        <p className="text-md text-white mb-12 max-w-3xl mx-auto">
          Everything you need to jumpstart your social media, including an all encompassing social media audit, custom
          templates, photo and video content shoot, and a branding refresh
        </p>

        <div className="bg-[#39FF14]/80 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Perfect for:</h3>
          <p className="text-white text-md mb-6">
            Brands looking for a comprehensive refresh or growth strategy with clear direction and actionable insights
            Those who aren&rsquo;t ready for full-time social media support but want expert guidance and support
          </p>
         
        </div>
      </motion.div>
    </section>
  )
}
