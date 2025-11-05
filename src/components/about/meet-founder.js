"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MeetFounder() {
  return (
    <section className="   pt-10 md:pt-28 mb:pb-0">

         <div className="relative w-[95%]  md:w-[90%] mx-auto gap-6  md:flex-row flex-col flex justify-center items-center ">
              <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relativ md:w-[60%]  overflow-hidden"
          >
            <div className="  overflow-hidden ">
        <motion.img 
          src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743026/2E90C727-E7BF-445A-BAA9-4F3E9DDF1F88_L0_001-30_03_2023_22_13_27_vsipyr.jpg"
          alt="Background"
          className=" h-[300px] md:h-[550px] w-[360px] md:w-[90%] object-cover pointer-events-none select-none"
        />
      </div>

          </motion.div>

          {/* Right Image absolute z-10  inset-0 mt-[0%] md:mt-[-3%] // absolute rounded-2xl left-0 top-[-3.5%] md:top-[0%]
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relativ rounded-lg md:block hidden overflow-hidden shadow-xl w-[2%] order-1 md:order-2"
          >
            <div className="absolute z-10 inset-0 mt-[0%] md:mt-[0%]  overflow-hidden h-[100%] md:h-screen">
        <motion.img 
          src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1761743079/5F428854-29E1-4828-9DC8-FCA6490223B4_L0_001-30_03_2023_22_33_32_yg0art.jpg"
          alt="Background"
          className="absolute right-0 rounded-2xl top-[59%] md:top-[45%] h-[300px] md:h-[300px] w-[22%] object-cover  pointer-events-none select-none"
        />
      </div>
          </motion.div> */}


          

      <div className="md:w-[60%] relative mx-auto px-3  max-w-7xl flex flex-col">

 

       <div>
 {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold uppercase text-gray-700  tracking-wider mb-2 text-center "
        >
          Meet The Founder
        </motion.h2>

        {/* Content Grid */}
        <div className="   mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-gray-600 leading-relaxed"
          >
            <p className="md:text-lg text-md">
              Hi friends, I&apos;m Christy! I&apos;ve known that marketing was my passion for as long as I can remember, but my
              journey into becoming a creative started in college with a spontaneous desire to learn graphic design. I
              really leaned into the whole DIY thing and taught myself the ropes using YouTube tutorials and Google
              articles.
            </p>
            <p className="md:text-lg text-md">
              From there, I took a detour into other creative marketing roles and eventually landed the title of Chief
              Marketing Officer at a prominent e-commerce jewelry brand. Wearing a multitude of hats, I managed every
              aspect of digital marketing from strategically selecting influencer partners to crafting standout
              campaigns that drove conversions. I also created two successful ambassador programs that expanded our
              brand community by thousands of members.
            </p>
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 leading-relaxed "
          >
            <p className="md:text-lg text-md">
              Fast forward to now, I&apos;ve ditched corporate life to pursue my dream of founding my own agency! Seventh
              House Marketing is an embodiment of my digital marketing expertise and is driven by a genuine passion for
              helping brands achieve their goals.
            </p>
          </motion.div>

          </motion.div>
        </div>




       </div>
       
        
      </div>
         </div>
    </section>
  )
}
