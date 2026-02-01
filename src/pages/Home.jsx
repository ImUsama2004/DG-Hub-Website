import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }
  const navigate = useNavigate();
  return (
    <div>
      <HeroSection/>
      <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-green-600 absolute -top-4 left-0'
                ></motion.span>
                Robust Partnerships, Achieved Objectives
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
              As a trusted partner, Switch Technologies will help turn your objectives into reality. Switch Technologies has designed and integrated thousands of solutions that support our customers current needs while enabling them to stay ahead of the ever changing technology landscape. Our capable technical staff can tackle requests ranging from simple wiring tasks all the way to full blown divergent and redundant cloud solutions. Let our 40+ years of experience in network design and integration work towards the creation of a secure and reliable environment for your users.
            </p>
        </motion.div>

       <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-green-600 absolute -top-4 left-0'
                ></motion.span>
                Comprehensive IT Solutions
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
             Switch Technologies designs, implements & supports world class solutions to meet any IT challenge. Explore some of the solutions that we offer below: <br/>
             <button 
             onClick={() => navigate('solution') }
             className='border-none text-xl font-bold text-green-600 cursor-pointer'
             >View Our Solutions</button>
            </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-green-600 absolute -top-4 left-0'
                ></motion.span>
                Extensive IT Services
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
             Switch Technologies provides any level of service needed to meet our customers objectives. From a la carte requests to turn-key design & integration, we take pride in seeing projects and initiatives from concept to implementation and beyond.<br/>
             <button 
             onClick={() => navigate('services') }
             className='border-none text-xl font-bold text-green-600 cursor-pointer'
             >Click To Veiw Our Services</button>
            </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className='py-20 px-10 md:px-28 flex flex-col md:flex-row justify-start gap-12 md:gap-48'
        >
            <h1 className='md:w-[40%] text-5xl font-bold relative'>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className='border-t-4 border-green-600 absolute -top-4 left-0'
                ></motion.span>
                Aligned With Industry’s Best
            </h1>
            <p className='md:w-[60%] text-lg font-medium text-gray-700 leading-relaxed'>
             We are certified to work with industry leading organizations to offer our customers best in class solutions. Our long standing partnerships enable us to provide our customer base outstanding products and support throughout the entire ownership experience with the full backing of the manufacturer. These relationships guarantee continued success and enable innovation as your dynamic environments continue to evolve.<br/>
             <button 
             onClick={() => navigate('services') }
             className='border-none text-xl font-bold text-green-600 cursor-pointer'
             >Veiw Our Partners</button>
            </p>
        </motion.div>
    </div>
  )
}
