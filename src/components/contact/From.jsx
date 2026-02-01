import React from 'react'
import { motion } from "framer-motion";

function Form() {
  return (
    <div className='w-full'>
      <form action="#" className='flex flex-col gap-8 w-full'>
        {/* Title */}
        <h1 className='text-sm font-black tracking-[0.2em] text-blue-600 uppercase'>
          Get In Touch
        </h1>

        {/* Dropdown - Fixed height and padding */}
        <div className="flex flex-col gap-2">
          <select required className='border-b-2 border-gray-200 py-3 font-semibold focus:border-blue-600 outline-none transition-colors bg-transparent cursor-pointer'> 
            <option value="" disabled selected>How can we help your business today?</option>
            <option value="service">Service Request</option>
            <option value="inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Row 1: First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder='First Name' className='border-b-2 border-gray-200 h-12 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors' />
          <input type="text" placeholder='Last Name' className='border-b-2 border-gray-200 h-12 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors' />
        </div>

        {/* Row 2: Email & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="email" placeholder='Email' className='border-b-2 border-gray-200 h-12 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors' />
          <input type="text" placeholder='Company' className='border-b-2 border-gray-200 h-12 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors' />
        </div>

        {/* Phone Number - Full Width */}
        <input type="text" placeholder='Phone Number' className='border-b-2 border-gray-200 h-12 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors' />

        {/* Message - Larger Area */}
        <textarea placeholder='Message' className='border-b-2 border-gray-200 h-32 py-2 placeholder:font-semibold placeholder-gray-500 focus:border-blue-600 outline-none transition-colors resize-none'></textarea>

        {/* Submit Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className='bg-black text-white w-full md:w-40 h-14 text-lg font-bold tracking-widest hover:bg-blue-600 transition-all uppercase'
        >
          Submit
        </motion.button>
      </form>
    </div>
  )
}

export default Form