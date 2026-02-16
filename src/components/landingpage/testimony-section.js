"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    company: "FabFitFun",
    text: "I had the opportunity to work with Princocoa Studios on…production for my brand and I was delighted with the outcome. Their professionalism, creativity and advise was invaluable. Equally important they created an enjoyable experience for the participants who will now be happy to work with us in future.",
    author: "Jill Morehouse",
    handle: "@fabfitfun",
    img: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739857/orilifestyle_ewnqtb.jpg",
    href: '/ '
  },
  {
    company: "Core Chicago Pilates",
    text: "Concise, innovative, fresh & prompt! could not be happier with the efficiency and professionalism of Princocoa Studios. They helped me grow my page from 1000 - over 4000 followers, They literally follow me everywhere, creating reels, coming up with new concepts for my tiktok and instagram, i could not be more grateful for them.",
    author: "Holly Vicars",
    handle: "@corechicagopilates",
    img: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739857/chef_sia_nkowdl.jpg",
    href: '/ '
  },
  {
    company: "Inkbox",
    text: "It's been amazing working with Princocoa Studios, their templates revamped my page, changed the aesthetic feel, drove up engagement and I made a sale by Day 2 of using their post ideas. I would definitely recommend them to anyone!.",
    author: "Haley Bentham",
    handle: "@inkbox",
    img: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739855/25_02_2021_06_32_55_duhgxb.jpg",
    href: '/ '
  },
  {
    company: "City Cruises",
    text: "Using Princocoa Studios is one of the best business decisions I have made so far. Charlize hair's Instagram page definitely looks much better, with vibrant, and fresh graphics. The captions are precise and to the point.They fully understands the Charlize woman! The followers have grown, hits to the website and sales have also increased.",
    author: "Carlita Kelly",
    handle: "@citycruises",
    img: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739855/charlize_k1efqk.jpg",
    href: '/ '
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1)
    }
    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  {/*  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }*/}

  return (
    <section className="py-8 px-6 ">
      <div className="max-w-6xl xl:max-w-[90%] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-4xl font-sans font-bold uppercase tracking-wider text-[#0a0a0a] mb-6 md:mb-12 text-center"
        >
          Client Love Letters
        </motion.h2>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              //variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getVisibleTestimonials().map((t, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    delay: index * 0.1
                  }}
                  className="text-center bg-[#0a0a0a] p-8 rounded-2xl shadow-xl border border-white/5 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden ring-4 ring-white/5 group-hover:ring-white/10 transition-all duration-300">
                    <Image
                      src={t.img}
                      alt={t.author}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="text-md md:text-lg text-white/90 mb-6 leading-relaxed line-clamp-8 font-body font-light">
                    {t.text}
                  </p>
                  <div className="mt-auto">
                    <p className="font-sans font-bold text-white text-lg uppercase tracking-wider">{t.author}</p>
                    <p className="font-sans text-white/50 text-sm mt-1">{t.company}</p>
                  </div>
                  {/* 
                  <Link className="font-semibold text-white " href={t.href}>
                   <button
                className="px-4 py-2 bg-[#39FF14]/80 hover:bg-[#39FF14]/90 mt-3 text-white rounded-full"
              >
                Read more
              </button>
                   </Link>
                 */}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-900 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] text-white transition-all bg-gray-900 font-sans"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-900 hover:bg-[#0a0a0a] hover:border-[#0a0a0a] text-white transition-all bg-gray-900 font-sans"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#0a0a0a] w-8" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}