import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from '../assets/EDP-logo-blue.png'

const navItems = [
    { name: "home", path: "/" },
    { name: "solution", path: "/solution" },
    { name: "services", path: "/services" },
    { name: "company", path: "/company" },
    { name: "partner", path: "/partner" },
    { name: "careers", path: "/careers" },
    { name: "contact", path: "/contact" },
]

function NavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-green-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tighter cursor-pointer group"> 
          <div className="h-10 w-auto flex items-center justify-center overflow-hidden">
            <img 
              src={logoImg} 
              alt="DG Hub Logo" 
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* <span className="text-green-500">DG Hub</span> */}
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`relative py-1 transition-colors capitalize ${
                  isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {/* Animated underline */}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-5.5 left-0 right-0 h-0.5 bg-green-500"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link to='/signin'>
            <button className="hidden sm:inline-flex px-4 py-2 hover:bg-white/10 border border-white/30 rounded text-white transition">
              Sign In
            </button>
          </Link>
          <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 cursor-pointer transition text-white font-semibold flex items-center gap-1">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar