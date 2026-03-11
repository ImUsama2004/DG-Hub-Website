import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Footer() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: "solution", path: "/solution" },
    { name: "services", path: "/services" },
    { name: "company", path: "/company" },
    { name: "partner", path: "/partner" },
    { name: "careers", path: "/careers" },
    { name: "contact", path: "/contact" },
    { name: "Products", path: "/product" },
  ];

  return (
    <footer className="relative bg-[#050505] text-white border-t border-gray-900 overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <h3 className="text-4xl font-black tracking-tighter text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
              DG Hub
            </h3>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Office No 12 Khyber Pakhtunkhwa IT Board,<br />
              Zu Business Center Chamkani Peshawar.
            </p>
            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-4 flex items-center gap-2 text-white font-medium cursor-pointer"
            >
              <span className="w-8 h-[1px] bg-green-500"></span>
              +92 336 9610674
            </motion.div>
          </motion.div>

          {/* Navigation with Staggered Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end max-w-xl">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`relative group text-sm uppercase tracking-widest font-bold transition-all ${
                      isActive ? "text-green-500" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-green-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Socials with Bounce */}
          <div className="flex gap-6">
            {[
              { icon: <FaLinkedin />, color: 'hover:text-blue-500', link: 'https://linkedin.com' },
              { icon: <FaEnvelope />, color: 'hover:text-green-500', link: 'mailto:em.usama2004@gmail.com' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -8, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-gray-600 transition-colors ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-gray-600 text-[13px] tracking-wide">
            © 2026 <span className="text-gray-400 font-bold">DG HUB</span>. ALL RIGHTS RESERVED.
          </p>

          {/* Scroll to Top Circle */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#22c55e' }}
            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-black transition-all"
          >
            <FaChevronUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}