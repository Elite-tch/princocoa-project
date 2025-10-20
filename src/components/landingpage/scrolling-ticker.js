"use client"

import { motion } from "framer-motion"

export default function ScrollingTicker() {
  const text = ["Social media consultations ", 'Brand identity design',
    'Interior design', 'Website design',' Content creation', 'Custom artwork'
    , 'Photo', 'Video   •',
  ]
  const repeatedText = Array(8).fill(text.join(" • ")).join(" ")

  return (
    <div className="bg-[#39FF14] z-50 py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-secondary-foreground  capitalize font-semibold text-md tracking-wider">{repeatedText}</span>
      </motion.div>
    </div>
  )
}
