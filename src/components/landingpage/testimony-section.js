"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    company: "FabFitFun",
    text: "I had the opportunity to work with Princocoa Studios on…production for my brand and I was delighted with the outcome. Their professionalism, creativity and advise was invaluable. Equally important they created an enjoyable experience for the participants who will now be happy to work with us in future.",
    author: "Jill Morehouse",
    handle: "@fabfitfun",
    img: "/img.jpg",
  },
  {
    company: "Core Chicago Pilates",
    text: "Concise, innovative, fresh & prompt! could not be happier with the efficiency and professionalism of Princocoa Studios. They helped me grow my page from 1000 - over 4000 followers, They literally follow me everywhere, creating reels, coming up with new concepts for my tiktok and instagram, i could not be more grateful for them.",
    author: "Holly Vicars",
    handle: "@corechicagopilates",
    img: "/img.jpg",
  },
  {
    company: "Inkbox",
    text: "It's been amazing working with Princocoa Studios, their templates revamped my page, changed the aesthetic feel, drove up engagement and I made a sale by Day 2 of using their post ideas. I would definitely recommend them to anyone!.",
    author: "Haley Bentham",
    handle: "@inkbox",
    img: "/img.jpg",
  },
  {
    company: "City Cruises",
    text: "Using Princocoa Studios is one of the best business decisions I have made so far. Charlize hair's Instagram page definitely looks much better, with vibrant, and fresh graphics. The captions are precise and to the point.They fully understands the Charlize woman! The followers have grown, hits to the website and sales have also increased.",
    author: "Carlita Kelly",
    handle: "@citycruises",
    img: "/img.jpg",
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
    <section className="py-16 px-6 bg-[#f2f6fb]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl  tracking-wider mb-12 text-center font-semibold"
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
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-[#004aad] p-6 rounded-2xl shadow-md"
                >
                  <div className="bg-[#f2f6fb] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Image
                      src={t.img}
                      alt={t.author}
                      width={100}
                      height={100}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-lg md:text-base text-white/90 mb-4 leading-relaxed line-clamp-6">
                    {t.text}
                  </p>
               {/*    <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-white/70 text-sm">{t.handle}</p> */}
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
              className="rounded-full border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white transition-all bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white transition-all bg-white"
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#004aad] w-8" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}