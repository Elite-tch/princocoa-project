"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AcademySection() {
  return (
    <section className="relative overflow-hidden ">
      {/* Content Section */}
      <div className="relative bg-[#d0e6f1] py-10 md:py-0 ">
        <div className=" flex md:flex-row flex-col w-[90%]  items-center justify-between gap-3 md:gap-12 mx-auto px-6 md:px-0 text-center">
         
         <div className="md:pl-6 2xl:w-[40%]">
           <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
           className="text-2xl md:text-4xl font-bold uppercase  tracking-wider mb-2 text-center text-gray-900 "
          >
           Create Content for 30 Days 
          </motion.h2>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" md:text-xl text-md mb-4 text-gray-700 max-w-3xl mx-auto "
          >
           At P.A.I, we are all about bold ideas, sharp
            strategies, and fearless execution. From brand
identity and social media to web design, content
creation, and interior design, we tackle every
creative challenge with innovation and style.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
         </div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer w-[400px] md:w-[600px] lg:w-[600px] h-[300px] 2xl:h-[700px] lg:h-[600px] md:h-[500px] 2xl:w-[900px]"
            >
              <div className="relative overflow-hidden  w-full  h-full">
               <video
  autoPlay
  loop
  muted
  playsInline
  className="object-cover absolute inset-0 w-full h-full"
>
  <source src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1761740956/1_er4Ja2cI_vkrkqn.mp4" type="video/mp4" />
</video>

              
                </div>
               
            
            </motion.div>
          </div>
        </div>
      </div>

      
    </section>
  )
}