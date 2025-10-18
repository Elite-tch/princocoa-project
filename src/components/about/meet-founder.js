"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MeetFounder() {
  return (
    <section className="   pt-10 md:pt-28 mb:pb-0">

         <div className="relative w-[95%]  mx-auto">
              <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relativ  rounded-lg md:block hidden overflow-hidden shadow-xl"
          >
            <div className="absolute z-10  inset-0 mt-[0%] md:mt-[-3%]  overflow-hidden h-[100%] md:h-[100%]">
        <motion.img 
          src="/img2.jpg"
          alt="Background"
          className="absolute rounded-2xl left-0 top-[-3.5%] md:top-[0%] h-[200px] md:h-[300px] w-[22%] object-cover pointer-events-none select-none"
        />
      </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relativ rounded-lg md:block hidden overflow-hidden shadow-xl w-[2%] order-1 md:order-2"
          >
            <div className="absolute z-10 inset-0 mt-[0%] md:mt-[0%]  overflow-hidden h-[100%] md:h-screen">
        <motion.img 
          src="/img2.jpg"
          alt="Background"
          className="absolute right-0 rounded-2xl top-[59%] md:top-[20%] h-[300px] md:h-[300px] w-[22%] object-cover  pointer-events-none select-none"
        />
      </div>
          </motion.div>


          

      <div className="container relative mx-auto px-3 md:px-12 max-w-7xl flex flex-col">

 <div className="fle flex-col md:flex-row hidden items-center justify-center  mx-auto px-6 py-12">
  {/* Left Image - appears on top on mobile */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative w-full md:w-auto order-1"
  >
    <div className="relative w-full md:w-[400px]  h-[300px] md:h-[450px]">
      <img 
        src="/img2.jpg"
        alt="Founder Image 1"
        className="rounded-2xl w-[80%] md:w-full h-full pt-[-50%] object-cover shadow-lg ml-auto"
      />
    </div>
  </motion.div>

  {/* Right Image - appears below on mobile, overlaps on desktop */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative w-full md:w-auto order-2 md:-ml-24"
  >
    <div className="relative w-full md:w-[400px] h-[300px] md:h-[450px]">
      <img 
        src="/img2.jpg"
        alt="Founder Image 2"
        className="rounded-2xl w-[80%] md:w-full h-full object-cover shadow-lg"
      />
    </div>
  </motion.div>
</div>


       <div>
 {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl text-[#004aad]  tracking-wider mb-4 text-center font-semibold"
        >
          Meet The Founder
        </motion.h2>

        {/* Content Grid */}
        <div className="  md:w-[55%] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-[#004aad]/70 leading-relaxed"
          >
            <p className="text-sm">
              Hi friends, I&apos;m Christy! I&apos;ve known that marketing was my passion for as long as I can remember, but my
              journey into becoming a creative started in college with a spontaneous desire to learn graphic design. I
              really leaned into the whole DIY thing and taught myself the ropes using YouTube tutorials and Google
              articles.
            </p>
            <p className="text-sm">
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
            className="text-[#004aad]/70 leading-relaxed "
          >
            <p className="text-sm">
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
