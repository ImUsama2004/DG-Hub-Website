import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { service } from './service'

function SolutionData() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='flex max-w-6xl mx-auto flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden my-10 border border-gray-100'>
      
      {/* Side Bar */}
      <div className="w-full md:w-1/3 bg-gray-50 border-r border-gray-200 py-2">
        {service.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full text-left px-8 py-5 transition-colors duration-300 outline-none z-10 ${
              activeIndex === index 
                ? "text-green-700 font-bold" 
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {/* Sliding Background Highlight */}
            {activeIndex === index && (
              <motion.div 
                layoutId="activeTabSolution"
                className="absolute inset-0 bg-white border-l-4 border-blue-600 shadow-sm z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.title}
          </button>
        ))}
      </div>

      {/* Content Data Area */}
      <div className="w-full md:w-2/3 p-8 md:p-12 min-h-112.5 flex items-center bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            {/* Title Reveal */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black text-gray-900 mb-6 tracking-tight"
            >
              {service[activeIndex].title}
            </motion.h2>

            {/* Description Fade-in */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 leading-relaxed text-lg whitespace-pre-line"
            >
              {service[activeIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SolutionData