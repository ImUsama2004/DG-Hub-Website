import React from 'react'
import { motion } from "framer-motion";
import heroBg from "../../assets/download.png";

function Header() {
  return (
    <header className='relative h-screen w-full overflow-hidden'>
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className='w-full h-full object-cover'
          src={heroBg}
          initial={{ scale: 1 }} 
          animate={{ scale: 1.15 }} // Slightly deeper zoom for more impact
          transition={{ 
            duration: 10, // Slower is usually more professional for backgrounds
            ease: "linear", 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
        />
        {/* Green Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/60 mix-blend-color z-10" />
      </div>

      {/* 2. Text Content Layer */}
      <div className='relative z-20 pt-48 pl-28 text-white'>
        {/* Title: Slides from left and fades in */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-8xl font-bold tracking-tight'
        >
          Network <br /> 
          <span className="text-green-400">Services</span>
        </motion.h1>

        {/* Paragraph: Slides from bottom with a delay */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className='pt-8 font-medium text-2xl max-w-xl text-white/90 leading-relaxed'
        >
          Empower Your Business with Our <br />
          Cutting-Edge Infrastructure Solutions.
        </motion.p>
        
        {/* Optional: Simple Animated Line under the title */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1 bg-green-500 mt-4"
        />
      </div>
    </header> 
  )
}

export default Header