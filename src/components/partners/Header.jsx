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
          initial={{ scale: 1.2 }} // Start slightly zoomed in
          animate={{ scale: 1 }}   // Zoom out for a "revealing" effect
          transition={{ 
            duration: 10, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
        />
        {/* Deep Green Tint Overlay */}
        <div className="absolute inset-0 bg-green-950/70 mix-blend-multiply z-10" />
      </div>

      {/* 2. Text Content Layer */}
      <div className='relative z-20 pt-48 pl-28 text-white'>
        
        {/* Heading Reveal Animation */}
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className='text-8xl font-bold tracking-tighter'
          >
            Partners
          </motion.h1>
        </div>

        {/* Subtext: Fade and Slide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 pt-8"
        >
          {/* A small decorative accent line */}
          <div className="h-0.5 w-12 bg-green-500" />
          <p className='font-medium text-2xl tracking-wide uppercase text-green-400'>
            Aligned With Industry’s Best
          </p>
        </motion.div>

        {/* Descriptive sentence for more "Enterprise" feel */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-white/60 max-w-lg text-lg leading-relaxed"
        >
          We collaborate with world-class technology providers to deliver 
          unmatched value and innovation to our global clients.
        </motion.p>
      </div>
    </header> 
  )
}

export default Header