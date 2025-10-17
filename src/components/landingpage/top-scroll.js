"use client"

import { motion } from "framer-motion"

export default function TopScrol() {
  const text = "WHISPERERS - THE MILLENNIAL & GEN Z "
  const repeatedText = Array(10).fill(text).join("")

  return (
    <div className="bg-[#004aad] text-white py-4 fixed top-0 z-50 w-full overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        <span className=" font-semibold  text-sm tracking-wider">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}