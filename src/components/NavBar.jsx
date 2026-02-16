import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react"; // Added Menu and X icons
import { motion, AnimatePresence } from "framer-motion";
import logoImg from '../assets/Logo-01.png';

const navItems = [
    { name: "home", path: "/" },
    { name: "solution", path: "/solution" },
    { name: "services", path: "/services" },
    { name: "company", path: "/company" },
    { name: "partner", path: "/partner" },
    { name: "careers", path: "/careers" },
    { name: "contact", path: "/contact" },
    { name: "Products", path: "/product" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-green-900/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
     {/* Logo Section - Increased to h-24 (96px) or h-32 (128px) */}
<Link to="/" className="flex items-center gap-3 z-50 group"> 
  <div className="flex items-center justify-center">
    <img 
      src={logoImg} 
      alt="Logo" 
      /* Changed h-10 to h-24 (96px). Adjust h-32 if you want it even more massive */
      className="h-24 md:h-28 lg:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
    />
  </div>
</Link>

        {/* Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`relative py-1 transition-colors capitalize ${
                  isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons & Hamburger */}
        <div className="flex items-center gap-4 z-50">
          <Link to='/signin' className="hidden sm:block">
            <button className="px-4 py-2 hover:bg-white/10 border border-white/30 rounded text-white transition text-sm">
              Sign In
            </button>
          </Link>
          <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 cursor-pointer transition text-white font-semibold flex items-center gap-1 text-sm">
            <span className="hidden xs:inline">Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-green-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg capitalize ${
                    location.pathname === item.path ? "text-green-400 font-bold" : "text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link 
                to="/signin" 
                onClick={() => setIsOpen(false)}
                className="text-white/80 py-2"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;