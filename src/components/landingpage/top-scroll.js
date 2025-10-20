"use client"

import { motion } from "framer-motion"

export default function TopScrol() {
  const text = ["Phone number : +2347066094764 ",
'Email : paiconsulting.you@gmail.com',
'Location : No 10 Lalupon close, Lagos State Nigeria   •'
  ]
 const repeatedText = Array(3).fill(text.join(" • ")).join(" ")

  return (
    <div className="bg-[#004aad] text-white py-4 fixed top-0 z-50 w-full overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex whitespace-nowrap "
      >
        <span className=" font-semibold flex gap-12 text-sm tracking-widest ">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  )
}