import React from 'react'
import { motion } from "framer-motion"
import Header from "../components/partners/Header"

function Partners() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Header />

      {/* Main Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='py-24 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
      >
        {/* Animated Heading with growing Blue Line */}
        <div className="md:w-[40%]">
          <h1 className='text-5xl font-bold relative'>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className='border-t-4 border-blue-700 absolute -top-4 left-0'
            ></motion.span>
            Our Trusted Partners
          </h1>
        </div>

        {/* Paragraph with subtle fade */}
        <div className="md:w-[60%]">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='font-medium text-gray-700 leading-relaxed text-lg'
          >
            We are certified to work with industry-leading organizations to offer our customers 
            best-in-class solutions. Our long-standing partnerships enable us to provide 
            our customer base outstanding products and support throughout the entire ownership 
            experience with the full backing of the manufacturer. 
            <br /><br />
            These relationships guarantee continued success and enable innovation as your 
            dynamic environments continue to push forward.
          </motion.p>
        </div>
      </motion.div>

      {/* Placeholder for Partner Logo Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pb-20 px-10 md:px-28"
      >
        {/* You can map your partner logos here */}
      </motion.div>
    </div>
  )
}

export default Partners