/* eslint-disable @next/next/no-img-element */
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
    <section className="bg-pink-600 py-10 md:py-20">
      <div className="container mx-auto px-2 md:px-12 max-w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-100  mb-2">House Headlines Newsletter</h2>

          {/* Description */}
          <p className="text-gray-200  md:text-lg text-md leading-relaxed mb-10 max-w-2xl mx-auto">
            Get FREE marketing tips, social media hacks, the latest on industry trends, and more delivered straight to
            your inbox!
          </p>

<div className="flex w-[100%] items-center gap-12 mx-auto md:flex-row flex-col justify-between">

          <div className="md:w-[50%] mx-auto">
          <img src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739852/Copy_of_E4BA7CE4-BF0B-4F02-AAAC-3690A60C79DD_L0_001-16_05_2023_10_21_05_c5io9u.jpg' alt=" " width={300} height={300}  className="w-full rounded-lg h-full"/>
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
              className="flex-1 bg-white  text-white placeholder:text-gray-400 h-12 px-6 rounded-full border-[#004aad] focus:ring-[#004aad]"
            />
            <Input
              type="name"
              placeholder="Enter your last name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white  text-white placeholder:text-gray-400 h-12 px-6 rounded-full border-[#004aad] focus:ring-[#004aad]"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white  text-white placeholder:text-gray-400 h-12 px-6 rounded-full border-[#004aad] focus:ring-[#004aad]"
            />



            </div>
            <Button
              type="submit"
              className="bg-[#004aad] mt-6 hover:bg-[#004aad] text-white px-8 h-12 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)]"
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
