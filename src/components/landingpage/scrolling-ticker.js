"use client"

import { motion } from "framer-motion"

export default function ScrollingTicker() {
  const text = "WHISPERERS - THE MILLENNIAL & GEN Z "
  const repeatedText = Array(20).fill(text).join("")

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
        <span className="text-secondary-foreground font-semibold text-sm tracking-wider">{repeatedText}</span>
      </motion.div>
    </div>
  )
}
