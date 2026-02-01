import React from 'react'
import { motion } from "framer-motion";
import heroBg from "../../assets/download.png";

function Header() {
  return (
    <header className='relative h-screen w-full overflow-hidden flex items-center'>
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className='w-full h-full object-cover'
          src={heroBg}
          initial={{ scale: 1 }} 
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 7, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
        />
        {/* Soft Green Overlay */}
        <div className="absolute inset-0 bg-green-950/70 mix-blend-multiply z-10" />
      </div>

      {/* 2. Text Content Layer */}
      <div className='relative z-20 pl-28 text-white w-[70%] max-w-5xl'>
        
        {/* Heading: Slides in with a subtle glow effect */}
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-8xl font-bold tracking-tight'
        >
          Careers
        </motion.h1>

        {/* Decorative Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 w-24 bg-green-500 my-8 origin-left"
        />

        {/* Paragraph: Staggered Fade-in for better readability */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className='font-medium text-xl leading-relaxed text-white/90'
        >
          Our employees are the heart and soul of our company. 
          <span className="text-green-400 font-bold"> Switch Technologies </span> 
          does its best to support each member and the roles they fulfill to make them highly effective. 
          Their achievements contribute directly to the success of the company. 
          We support our employees with direct access to escalation managers and provide them with avenues for growth.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10"
        >
          <button className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-green-900/20">
            View Openings
          </button>
        </motion.div>
      </div>
    </header> 
  )
}

export default Header