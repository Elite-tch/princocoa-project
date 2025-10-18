"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    // Add newsletter signup logic here
    setEmail("")
  }

  return (
    <section className="bg-pink-100 py-10 md:py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#004aad] mb-6">House Headlines Newsletter</h2>

          {/* Description */}
          <p className="text-[#004aad]/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get FREE marketing tips, social media hacks, the latest on industry trends, and more delivered straight to
            your inbox!
          </p>

<div className="flex w-[100%] items-center gap-12 mx-auto md:flex-row flex-col justify-between">

          <div className="md:w-[50%] mx-auto">
          <Image src='/img2.jpg' alt=" " width={300} height={300}  className="w-full rounded-lg h-full"/>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col  gap-4 md:w-[30%] w-full mx-auto">
            
            <div className="flex flex-col gap-4">
                <Input
              type="name"
              placeholder="Enter your first name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-white/20 text-white placeholder:text-gray-400 h-12 px-6 rounded-full focus:border-[#39FF14] focus:ring-[#39FF14]"
            />
            <Input
              type="name"
              placeholder="Enter your last name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-white/20 text-white placeholder:text-gray-400 h-12 px-6 rounded-full focus:border-[#39FF14] focus:ring-[#39FF14]"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-white/20 text-white placeholder:text-gray-400 h-12 px-6 rounded-full focus:border-[#39FF14] focus:ring-[#39FF14]"
            />



            </div>
            <Button
              type="submit"
              className="bg-pink-600 mt-6 hover:bg-[#FF1493]/90 text-white px-8 h-12 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)]"
            >
              Subscribe
            </Button>
          </form>
</div>
        </motion.div>
      </div>
    </section>
  )
}
