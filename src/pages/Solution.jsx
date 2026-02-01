import React from 'react'
import { motion } from 'framer-motion'
import SolutionCards from '../components/solutions/SolutionCards'
import SolutionData from '../components/solutions/SolutionData'
import Header from '../components/solutions/Header';

function Solution() {
  // Animation variant for the section headers
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  return (
    <div className='overflow-x-hidden bg-white'>
        {/* Header */}
        <Header/>

        {/* Section: Capabilities */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-blue-700 absolute -top-4 left-0'
                ></motion.span>
                Capabilities
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
              At Switch Technologies, we provide advanced technology solutions and consulting services to help businesses optimize their operations and achieve their digital transformation goals.
            </p>
        </motion.div>

        <SolutionCards/>

        {/* Section: Comprehensive IT Solutions */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-blue-700 absolute -top-4 left-0'
                ></motion.span>
                Comprehensive IT Solutions
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
              Switch Technologies designs, implements & supports world class solutions to meet any IT challenge. Explore some of the solutions that we offer below:
            </p>
        </motion.div>

        <SolutionData/>
    </div>
  )
}

export default Solution