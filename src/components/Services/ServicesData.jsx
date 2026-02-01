import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { service } from './service'

function ServicesData() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='flex max-w-6xl mx-auto md:mx-28 flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden my-10 border border-gray-100'>
      {/* Side Bar */}
      <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 py-4">
        {service.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full text-left px-8 py-5 transition-colors duration-300 outline-none z-10 ${
              activeIndex === index ? "text-green-700 font-bold" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {/* Animated Active Indicator */}
            {activeIndex === index && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 bg-white border-l-4 border-green-600 shadow-sm z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.title}
          </button>
        ))}
      </div>

      {/* Content Data */}
      <div className="w-full md:w-2/3 p-8 md:p-12 min-h-100 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex} // Key ensures motion tracks which content is active
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Title */}
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
              {service[activeIndex].title}
            </h2>

            {/* Multi-line Description */}
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {service[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ServicesData