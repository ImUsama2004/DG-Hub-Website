import { div } from 'framer-motion/client'
import React from 'react'
import Navbar  from './NavBar'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer(){
   const navItems = [
    // { name: "home", path:"/" },
    { name: "solution", path:"/solution" },
    { name: "services", path:"/services" },
    { name: "company", path:"/company" },
    { name: "partner", path:"/partner" },
    { name: "careers", path:"/careers" },
    { name: "contact", path:"/contact" },
]
  return (
    <div>
        
        <div className='flex justify-between bg-black px-16 py-16'>
        <div>
            <h3 className="text-blue-500 font-bold text-2xl">DG Hub</h3>
            <p className='text-white py-4 text-xl font-medium'>
            Office No 12 Khyber Pakhtunkhwa IT Board,<br />
            Zu Business Center Chamkani Peshawar.<br />
            +923369610674
            </p>
        </div>
    
        <div className="hidden md:flex gap-6 font-medium text-white">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="hover:text-blue-500 transition-colors capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>
    </div>

    {/* icons */}

    <div>
        <div className='bg-black flex py-4 justify-between px-16'>
            <div className="flex gap-4 text-4xl text-white">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="mailto:em.usama2004@gmail.com">
            <FaEnvelope className="hover:text-red-500 transition-colors" />
            </a>
        </div>

          <div>
            <p className='text-white'>Copyright © 2025 Switch Technologies. All Rights Reserved.</p>
          </div>

          <div className='text-white'>
            Terms and Conditions |<br />
            Privacy Policy
          </div>

    </div>
    </div>
    </div>

    
  )
}

