import React from 'react'
import Header from '../components/contact/Header'
import Form from '../components/contact/From'
import { motion } from "framer-motion"

function Contact() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      
      {/* Main Content Wrapper */}
      <div className='container mx-auto px-4 md:px-28 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'>
          
          {/* Left Side: Information Section */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col gap-12'
          >
            {/* Address Block */}
            <div className='space-y-6'>
              <div className="group">
                <h2 className='text-green-600 tracking-widest text-sm font-black uppercase mb-2'>New York Office</h2>
                <p className='text-2xl font-bold leading-tight text-gray-900 group-hover:text-green-700 transition-colors'>
                  78 Horseblock Road, Unit 6<br/>
                  Yaphank, New York 11980
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h2 className='text-green-600 tracking-widest text-sm font-black uppercase mb-2'>Mailing Address</h2>
                <div className='text-lg font-medium text-gray-700 space-y-1'>
                  <p>PO Box 5529</p>
                  <p>Rocky Point, NY 11778</p>
                  <div className="pt-4 space-y-1">
                    <p><span className="text-gray-400 mr-2">P:</span> (631) 228-4405</p>
                    <p><span className="text-gray-400 mr-2">F:</span> (631) 821-2843</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Contact Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4 pt-10 border-t border-gray-100'>
              <div className="space-y-1">
                <h3 className='text-gray-400 text-xs font-black uppercase tracking-widest'>General</h3>
                <p className='text-gray-900 font-bold hover:text-green-600 cursor-pointer'>info@switchtechnologies.com</p>
              </div>
              <div className="space-y-1">
                <h3 className='text-gray-400 text-xs font-black uppercase tracking-widest'>Sales</h3>
                <p className='text-gray-900 font-bold hover:text-green-600 cursor-pointer'>sales@switchtechnologies.com</p>
              </div>
              <div className="space-y-1">
                <h3 className='text-gray-400 text-xs font-black uppercase tracking-widest'>Technical Support</h3>
                <p className='text-gray-900 font-bold hover:text-green-600 cursor-pointer'>support@switchtechnologies.com</p>
              </div>
              <div className="space-y-1">
                <h3 className='text-gray-400 text-xs font-black uppercase tracking-widest'>Billing</h3>
                <p className='text-gray-900 font-bold hover:text-green-600 cursor-pointer'>billing@switchtechnologies.com</p>
              </div>
            </div>
          </motion.section>

          {/* Right Side: Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
             <Form />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact