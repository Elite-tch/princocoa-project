"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#004aad] text-[#f2f6fb]  py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#f2f6fb]">LOGO</span>
              
            </div>
            <p className="text-sm text-[#f2f6fb]">Creatives at heart driven by purposeful strategy</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-[#f2f6fb]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#f2f6fb] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#f2f6fb]  transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#f2f6fb]  transition-colors">
                  Services
                </a>
              </li>
              
              <li>
                <a href="#" className="text-sm text-[#f2f6fb]  transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4 text-[#f2f6fb]">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-[#f2f6fb] flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-[#f2f6fb] flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-10 h-10 rounded-full bg-[#f2f6fb] flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Music className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-xs text-[#f2f6fb]">© 2025 Seventh House Marketing. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
