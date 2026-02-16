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
    <section className="bg-gray-200 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-sans font-bold uppercase  mb-4 tracking-tight">
            Become a Cocoabean
          </h2>

          {/* Description */}
          <p className="text-gray-700 font-body md:text-xl text-md leading-relaxed mb-12 max-w-2xl mx-auto">
            Get free newsletter teams, discounts and keep up with trends you can implement into your business
          </p>

          <div className="flex w-full items-center gap-12 mx-auto md:flex-row flex-col justify-between items-stretch">
            {/* Left - Image */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739852/Copy_of_E4BA7CE4-BF0B-4F02-AAAC-3690A60C79DD_L0_001-16_05_2023_10_21_05_c5io9u.jpg'
                alt="Cocoabean Membership"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Right - Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:w-[40%] w-full justify-center">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  required
                  className="bg-white/5 text-white placeholder:text-gray-500 h-14 px-8 rounded-full border-gray-300 focus:border-white/30 focus:ring-0 font-body transition-all"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="bg-white/5 text-white placeholder:text-gray-500 h-14 px-8 rounded-full border-gray-300 focus:border-black focus:ring-0 font-body transition-all"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 text-white placeholder:text-gray-500 h-14 px-8 rounded-full border-gray-300 focus:border-white/30 focus:ring-0 font-body transition-all"
                />
              </div>

              <Button
                type="submit"
                className="bg-white text-[#0a0a0a] hover:bg-gray-100 mt-2 h-14 rounded-full font-sans font-bold text-lg uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Now
              </Button>

              <p className="text-gray-600 text-xs font-body">
                By joining, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
