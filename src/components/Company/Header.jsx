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
          animate={{ scale: 1.08 }} // Subtle zoom is more professional for enterprise
          transition={{ 
            duration: 8, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
        />
        {/* Green Tint Overlay */}
        <div className="absolute inset-0 bg-green-950/70 mix-blend-multiply z-10" />
      </div>

      {/* 2. Text Content Layer */}
      <div className='relative z-20 pt-48 pl-28 text-white'>
        
        {/* Main Heading with Staggered Lines */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='text-7xl font-bold leading-tight tracking-tight'
          >
            Enterprise Level Resources <br/> 
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-green-400"
            >
              At Work For You
            </motion.span>
          </motion.h1>
        </div>

        {/* Subtext Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className='pt-8 font-medium text-2xl text-white/80 border-l-4 border-green-500 pl-6 mt-4'
        >
          Meet the team behind the tech
        </motion.p>

        {/* Action Indicator (Optional) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <div className="w-px h-16 bg-linear-to-b from-green-500 to-transparent" />
        </motion.div>
      </div>
    </header> 
  )
}

export default Header