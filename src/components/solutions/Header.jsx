import React from 'react'
import { motion } from "framer-motion";
import heroBg from "../../assets/download.png";
function Header() {
  return (
    <header className='relative h-screen w-full overflow-hidden'>
        {/* bg-image */}
        <div className="absolute inset-0 z-0">
            <motion.img 
            className='w-full h-full object-cover'
            src={heroBg}
            initial={{ scale: 1 }} 
            animate={{ scale: 1.1 }}
            transition={{ duration: 5, ease: "easeOut", repeat: Infinity, repeatType: 'mirror' }}
            />
            {/* green overlay */}
            <div className="absolute inset-0 bg-green-900/60 mix-blend-color z-10" />
        </div>

        {/* text */}
       <motion.div
        initial="hidden"
        animate="visible"
        className='relative z-20 pt-36 pl-28 text-white'
        >
        {/* The Heading */}
        <motion.h1 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-7xl font-bold'
        >
        Solutions   
        </motion.h1>

        {/* The Paragraph */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} 
            className='pt-12 font-semibold text-2xl max-w-2xl'
        >
            Empower Your Business with Our Cutting-Edge Solutions
        </motion.p>
        </motion.div>
        </header>
  )
}

export default Header