"use client"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761762453/CANTAGALI_3_cds6yw.jpg",
    alt: "Team collaboration in office environment",
     title: "Interior Design Consultation ",
    description: "We will discuss your design needs and preferences.",
  },
  {
    src: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761767880/CANTAGALI_6_kjjxot.png",
    alt: "Professional meeting and planning session",
     title: "Co-working space",
    description: "We will create a collaborative workspace that fosters creativity and productivity.",
  },
  {
    src: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761738815/44B45117-0787-4CB5-862C-107702A7ABC4_L0_001-06_01_2025_16_44_04_s0glab.png",
    alt: "Technical discussion and project review",
     title: "Web Design ",
    description: "We will create a stunning and functional website that meets your business goals.",
  },
  {
    src: "https://res.cloudinary.com/dibwnfwk9/image/upload/v1761739825/Bloom_Hair_Atelier_Brand_Manual_-_7_cwlaem.png",
    alt: "brand",
     title: "Brand Identity Design ",
    description: "We will create a unique brand identity that reflects your business values.",
  },
 
]





export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Create extended array for infinite loop
  const extendedImages = [
    ...galleryImages.slice(-slidesToShow), // Add last slides to beginning
    ...galleryImages,
    ...galleryImages.slice(0, slidesToShow), // Add first slides to end
  ]

  // Responsive slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Reset position for infinite loop
  useEffect(() => {
    if (currentIndex === galleryImages.length + slidesToShow) {
      // At the end, jump to beginning
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentIndex(slidesToShow)
      }, 500)
    } else if (currentIndex === -1) {
      // At the beginning, jump to end
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentIndex(galleryImages.length - 1 + slidesToShow)
      }, 500)
    }
  }, [currentIndex, slidesToShow])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setIsTransitioning(false)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(false)
    setCurrentIndex((prev) => prev - 1)
  }

  const goToSlide = (index) => {
    setIsTransitioning(false)
    setCurrentIndex(index + slidesToShow)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Calculate actual current slide for indicators
  const actualCurrentSlide =
    (((currentIndex - slidesToShow) % galleryImages.length) + galleryImages.length) % galleryImages.length

  return (
    <section ref={ref} className="md:py-20 py-10  overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        
      {/* <h2 className="text-xl md:text-4xl text-gray-900 font-bold uppercase text-center mb-8">Our Process</h2>
        Carousel Container 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{
                x: `${-currentIndex * (100 / slidesToShow)}%`,
              }}
                             transition={
                 isTransitioning
                   ? { duration: 0 }
                   : {
                       type: "tween",
                       duration: 0.8,
                       ease: "easeInOut",
                     }
               }
              onAnimationComplete={() => {
                if (isTransitioning) {
                  setIsTransitioning(false)
                }
              }}
            >
              {extendedImages.map((image, index) => (
                <div key={index} className={`flex-shrink-0 px-2`} style={{ width: `${100 / slidesToShow}%` }}>
                  <div className="group relative overflow-hidden aspect-[9/12] md:aspect-[9/12] transition-transform duration-500">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-center  transition-transform duration-700"
                    />
                     </div>
                     <div>
                        <h3 className="mt-4 text-xl md:text-xl font-semibold  text-gray-900">{image.title}</h3>
                        <p className="mt-0 text-gray-700 md:text-lg w-[90%]">{image.description}</p>
                     </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons 
          <button
            onClick={prevSlide}
            className="absolute left-4  top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4  top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>*/}

          {/* Play/Pause Button 
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5 text-gray-700" /> : <Play className="w-5 h-5 text-gray-700" />}
          </button>
        </motion.div> */}

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center md:hidden mt-8 space-x-2"
        >
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === actualCurrentSlide ? "bg-pink-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
 

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center pt-8 border-t mt-6 border-gray-700  space-x-2 overflow-x-auto md:pb-2"
        >
           <h2 className="text-xl md:text-3xl font-bold text-gray-900 uppercase text-center mb-8 md:w-[30%] leading-tight">Ready to Level Up
Your Brand?</h2>
        </motion.div> 

<div className="  flex justify-center">
              <Link href='/contact'>
                <Button
                  size="lg"
                  className="bg-pink-600 hover:bg-pink-600 text-white px-8 py-4 text-md font-semibold rounded-md shadow-none transition-all duration-200"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
      </div>
    </section>
  )
}
