// components/ServicesSection.jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Services list
  const services = [
    "SOCIAL MEDIA CONSULTATIONS",
    "PHOTOGRAPHY & VIDEOGRAPHY",
    "CONCEPT DEVELOPMENT",
    "BRAND IDENTITY DESIGN",
    "WEBSITE & PORTFOLIO",
     "CONTENT SHOOTS",
    "INTERIOR STYLING & DECORATION",
    "MOOD BOARDS",
    "CONTENT STRATEGY",
    "FURNITURE SELECTION & LAYOUT",
    'Sourcing & Purchasing Assistance',
    'Material & Finish Selection',
    'Custom Artwork for Interiors',
    'PACKAGING DESIGN',
    'Home Staging',
    'Wall Murals and Installations',
    'Lighting Selection & Placement',
    'ART INSTALLATION & wall murals',
    'Art Consulting for Space Enhancement',
    'Gallery Walls Design'
   ];

  // Color options (looped through by index)
  const colors = [
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#cb6ce6]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#5e17eb]",
    "bg-[#ff914d]",
    "bg-[#ff914d]",
    "bg-[#ff914d]",
    "bg-[#ff914d]",
    "bg-[#ff914d]",
    "bg-[#ff914d]",
  ];

  return (
    <section className="py-20 px-4">
      <div className="md:max-w-6xl max-w-[80%]  2xl:max-w-7xl mx-auto">
        
        {/* Title 
        <h2 className="text-xl md:text-4xl font-bold uppercase text-gray-900  tracking-wider mb-2 text-center ">
         Services
        </h2> */}

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${colors[index % colors.length]} h-44 flex items-center justify-center text-center p-3 rounded`}
            >
              <h3 className="text-white font-semibold uppercase text-lg">
                {service}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
