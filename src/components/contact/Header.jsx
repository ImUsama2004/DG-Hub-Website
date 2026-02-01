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
            duration: 8, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }}
        />
        {/* Deep Green Overlay for high text contrast */}
        <div className="absolute inset-0 bg-green-950/80 mix-blend-multiply z-10" />
      </div>

      {/* 2. Content Layer */}
      <div className='relative z-20 pl-28 text-white w-[70%] max-w-4xl'>
        
        {/* Heading: Masked Slide Up */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='text-8xl font-bold tracking-tight'
          >
            Contact Us
          </motion.h1>
        </div>

        {/* Decorative Green Bar */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 bg-green-500 mb-10"
        />

        {/* Paragraph: Smooth Fade and Drift */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-white/90 text-xl leading-relaxed'
        >
          We know your time is valuable and that is why we appreciate your visit to our website. 
          Feel free to contact us about any questions you may have. 
          We are confident that once you experience what our professional and capable staff have to offer, 
          you will make the decision to <span className="text-green-400 font-bold italic">SWITCH</span>.
        </motion.p>

        {/* Contact Quick-Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex gap-8 text-sm font-bold uppercase tracking-widest text-green-500"
        >
          <span>Email Support</span>
          <span>•</span>
          <span>Sales Inquiries</span>
          <span>•</span>
          <span>24/7 Tech Desk</span>
        </motion.div>
      </div>
    </header> 
  )
}

export default Header