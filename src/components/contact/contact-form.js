"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    services: [],
    brandName: "",
    socialLink: "",
    message: "",
    timeline: "",
    budget: "",
    hearAbout: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your message! We will be in touch soon.")
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-[#39FF14]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-[#39FF14]"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-[#39FF14]"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-gray-800 font-semibold mb-3">
                Service(s) needed <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Batch Content Creation",
                  "Event Content Creation",
                  "Brand Management",
                  "Social Media Audit",
                  "Consulting Sessions",
                  "The Brand Blueprint",
                  'web designer/ developing',
                  'interior designing',
                  'photography',
                  'others'
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox id={service} />
                    <label htmlFor={service} className="text-gray-700 text-sm cursor-pointer">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

           {/* Message */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                How can we help? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-[#39FF14]"
              />
            </div>

           

            <Button
              type="submit"
              className="bg-[#5B7C6C] hover:bg-[#4a6557] text-white px-8 py-3 rounded-full font-semibold"
            >
              SUBMIT
            </Button>
          </motion.form>

          {/* Image */}
          <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="hidden relative lg:block w-full h-[600px]"
>
  <Image
    fill
    src="/img.jpg"
    alt="Contact us"
    className="object-cover rounded-lg"
  />
</motion.div>

        </div>
      </div>
    </section>
  )
}
