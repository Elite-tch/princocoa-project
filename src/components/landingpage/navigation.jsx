"use client"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin, Music, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false)
  const [isMobileCollaborateOpen, setIsMobileCollaborateOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { 
      label: "Collaborate",
      hasDropdown: true,
      dropdownItems: [
        { href: "/service", label: "Service" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/career", label: "Career" }
      ]
    },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/academy", label: "Academy" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-12 text-[#FF1493] py-2 left-0 right-0 z-40 bg-[#f2f6fb] border-b border-[#004aad]"
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
                item.hasDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsCollaborateOpen(true)}
                    onMouseLeave={() => setIsCollaborateOpen(false)}
                  >
                    <button
                      className={`text-sm font-medium transition-colors pb-2 flex items-center gap-1 ${
                        activeLink.startsWith('/collaborate')
                          ? "text-pink-600 border-b-2 border-pink-600"
                          : "text-[#004aad] hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCollaborateOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isCollaborateOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              onClick={() => setActiveLink(dropdownItem.href)}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                activeLink === dropdownItem.href
                                  ? "bg-pink-50 text-pink-600"
                                  : "text-[#004aad] hover:bg-gray-50"
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveLink(item.href)}
                    className={`text-sm font-medium transition-colors pb-2 ${
                      activeLink === item.href
                        ? "text-pink-600 border-b-2 border-pink-600"
                        : "text-[#004aad] hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop Social Icons & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <SocialIcons />
              <Button size='lg' className="bg-pink-600 rounded-full hover:bg-pink-700 font-semibold px-4 sm:px-6 text-xs">
                CONTACT US
              </Button>
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
                    item.hasDropdown ? (
                      <div key={item.label}>
                        <button
                          onClick={() => setIsMobileCollaborateOpen(!isMobileCollaborateOpen)}
                          className={`text-sm font-medium transition-colors pb-2 flex items-center gap-1 w-full ${
                            activeLink.startsWith('/collaborate')
                              ? "text-pink-600 border-b-2 border-pink-600"
                              : "text-[#004aad] hover:text-primary"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isMobileCollaborateOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {isMobileCollaborateOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 mt-2"
                            >
                              {item.dropdownItems.map((dropdownItem) => (
                                <motion.a
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  onClick={() => {
                                    setActiveLink(dropdownItem.href)
                                    toggleMenu()
                                  }}
                                  className={`block text-sm font-medium transition-colors py-2 ${
                                    activeLink === dropdownItem.href
                                      ? "text-pink-600"
                                      : "text-[#004aad] hover:text-primary"
                                  }`}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {dropdownItem.label}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setActiveLink(item.href)
                          toggleMenu()
                        }}
                        className={`text-sm font-medium transition-colors pb-2 ${
                          activeLink === item.href
                            ? "text-pink-600 border-b-2 border-pink-600"
                            : "text-[#004aad] hover:text-primary"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    )
                  ))}
                </div>

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4 mb-6">
                  <SocialIcons />
                </div>

                {/* Mobile CTA Button */}
                <Button size='lg' className="bg-pink-600 rounded-full hover:bg-pink-700 w-fit font-semibold px-4 sm:px-6 text-xs">
                  CONTACT US
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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