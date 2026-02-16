"use client"

import { motion } from "framer-motion"

export default function ScrollingTicker() {
  const text = ["We handle the bold creative ideas and the consistency—so you can focus on growing your brand", '']
  const repeatedText = Array(8).fill(text.join(" • ")).join(" ")

  return (
    <div className="bg- z-50 py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className="text-secondary-foreground  uppercase font-semibold text-md tracking-wider">{repeatedText}</span>
      </motion.div>
    </div>
  )
}
