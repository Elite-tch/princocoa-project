"use client"

import { motion } from "framer-motion"

export default function BrandBlueprintSection() {
  return (
    <section className="md:py-20 py-10 px-6 bg-pink-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-xl md:text-4xl font-bold uppercase text-white  tracking-wider mb-2 text-center ">The Brand Blueprint</h2>

        <p className="md:text-xl text-md text-white mb-2">Agency-level expertise without the monthly retainer</p>

        <p className="md:text-xl text-md text-white mb-10 max-w-3xl mx-auto">
          Everything you need to jumpstart your social media, including an all encompassing social media audit, custom
          templates, photo and video content shoot, and a branding refresh
        </p>

        <div className="bg-[#39FF14]/80 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl md:text-3xl font-bold uppercase mb-4 text-white">Perfect for:</h3>
          <p className="text-white md:text-xl text-md mb-6">
            Brands looking for a comprehensive refresh or growth strategy with clear direction and actionable insights
            Those who aren&rsquo;t ready for full-time social media support but want expert guidance and support
          </p>
         
        </div>
      </motion.div>
    </section>
  )
}
