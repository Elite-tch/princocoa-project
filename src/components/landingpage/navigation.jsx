"use client"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin, Music, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
   
   
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-12 text-[#FF1493] py-2  left-0 right-0 z-40 bg-[#FFF8E7] border-b border-[#004aad]"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="text-xl sm:text-2xl font-bold">
              <span className="text-primary font-[var(--font-montserrat)]">Logo</span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
  key={item.href}
  href={item.href}
  onClick={() => setActiveLink(item.href)}
  className={`text-md font-medium transition-colors pb-2 ${
    activeLink === item.href
      ? "text-pink-600 border-b-2 border-pink-600"
      : "text-[#004aad] hover:text-primary"
  }`}
>
  {item.label}
</Link>

              ))}
            </div>

            {/* Desktop Social Icons & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <SocialIcons />
              <Link href="/contact">
              <Button size='lg' className="bg-pink-600 rounded-full hover:bg-pink-700 font-semibold px-4 sm:px-6 text-xs">
                CONTACT US
              </Button>
            </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-foreground hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={toggleMenu}
                    className="text-foreground hover:text-primary transition-colors p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col gap-6 mb-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveLink(item.href)
                        toggleMenu()
                      }}
                      className={`text-md font-medium   transition-colors pb-2 ${
                        activeLink === item.href
                          ? "text-pink-600 border-b-2 border-pink-600"
                          : "text-[#004aad] hover:text-primary"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4 mb-6">
                  <SocialIcons />
                </div>

                {/* Mobile CTA Button */}
                <Link href="/contact">
                 <Button size='lg' className="bg-pink-600 rounded-full hover:bg-pink-700 w-fit font-semibold px-6 sm:px-6 text-xs">
                CONTACT US
              </Button>
              </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children, isActive, onClick }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors pb-1 relative ${
        isActive ? "text-primary" : "text-foreground hover:text-primary"
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  )
}

function SocialIcons() {
  return (
    <>
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="text-[#004aad] transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="text-[#004aad] transition-colors"
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="text-[#004aad] transition-colors"
      >
        <Music className="w-5 h-5" />
      </motion.a>
    </>
  )
}