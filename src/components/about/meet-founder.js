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
          className="text-2xl md:text-4xl font-bold uppercase text-gray-900  tracking-wider mb-2 text-center "
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
            className="space-y-3 text-gray-800 md:text-lg text-md leading-relaxed"
          >
            <p className="">
             I’m <b className="font-bold text-black">Princess Adefolami</b>, founder of Princocoa Studios X P.A.I Consulting.
            </p>
            <p>My career has been shaped by a simple belief: creativity should bring clarity, not confusion. Behind every brand is a leader making high-stakes decisions, balancing growth with responsibility, and trying to maintain a standard of excellence. I understand how heavy that can feel.
          </p>
          <p>My background allows me to see challenges from multiple angles. I have bachelor’s  in <b className="font-bold text-black">Interior Architecture</b>, developed my foundation as a <b className="font-bold text-black">fine artist</b>, worked in <b>production and set design</b>, and became a <b className="font-bold text-black"> Meta-certified social media marketing plus Brand Marketing professional  from London Business School </b>. Together, these disciplines taught me how to move ideas carefully from concept to execution — without losing intention or quality.</p>
          <div>
            <p>I am deeply passionate about building work that is not only beautiful, but dependable.</p>
            <p> Work that holds up.</p>
            <p> Work that performs.</p>
             </div>
            <p className="">
             Clients often come to me when they need someone who can step in calmly, understand the vision, and create structure around it. Someone who can protect the brand while still pushing it forward.
            </p>

            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-700 space-y-3 leading-relaxed "
          >
            <p className=" ">
              Projects such as <b className="font-bold text-black">I Have The Floor </b> are a reflection of this approach — thoughtful, collaborative, and executed with care.
            </p>
            <p>When you work with Princocoa Studios/ P.A.I Consulting, you work directly with me. My role is to listen closely, think rigorously, and ensure that what you are building is expressed with consistency and refinement at every touchpoint.</p>
          </motion.div>

          </motion.div>
        </div>




       </div>
       
        
      </div>
         </div>
    </section>
  )
}
