import React from 'react'
import { motion } from 'framer-motion'

function SolutionCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  return (
    <div className='flex flex-col md:flex-row px-10 md:px-28 gap-10 my-16'>
      {/* Card 1 */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{ y: -10, backgroundColor: "#f9fafb" }}
        className='flex-1 p-8 rounded-xl border border-transparent hover:border-blue-100 hover:shadow-xl transition-shadow duration-300 group cursor-default'
      >
        <div className='h-1 w-12 bg-blue-600 mb-6 group-hover:w-20 transition-all duration-300' />
        <h1 className='text-2xl font-bold text-gray-900'>Our Solutions</h1>
        <p className='font-medium text-gray-600 pt-6 leading-relaxed'>
          We provide wired and wireless enterprise solutions that guarantee stability, security, and speed to meet the highest expectations of customers. We work with our customers through each stage of a project to provide positive outcomes engineered for success.
        </p>
      </motion.section>

      {/* Card 2 */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{ y: -10, backgroundColor: "#f9fafb" }}
        className='flex-1 p-8 rounded-xl border border-transparent hover:border-blue-100 hover:shadow-xl transition-shadow duration-300 group cursor-default'
      >
        <div className='h-1 w-12 bg-blue-600 mb-6 group-hover:w-20 transition-all duration-300' />
        <h1 className='text-2xl font-bold text-gray-900'>Staying Ahead of Industry Changes</h1>
        <p className='font-medium text-gray-600 pt-6 leading-relaxed'>
          We proactively keep track of market dynamics, regulations and vendor needs to update our technology and help you save considerable time and resources on maintenance.
        </p>
      </motion.section>
    </div>
  )
}

export default SolutionCards