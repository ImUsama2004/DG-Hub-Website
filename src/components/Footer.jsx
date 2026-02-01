import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const location = useLocation(); // Hook to listen to current URL path

  const navItems = [
    { name: "home", path: "/" },
    { name: "solution", path: "/solution" },
    { name: "services", path: "/services" },
    { name: "company", path: "/company" },
    { name: "partner", path: "/partner" },
    { name: "careers", path: "/careers" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-900">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-16 py-16 gap-10">
        <div className="max-w-md">
          <h3 className="text-green-500 font-bold text-3xl tracking-tighter">DG Hub</h3>
          <p className="text-gray-400 py-4 text-lg leading-relaxed">
            Office No 12 Khyber Pakhtunkhwa IT Board,<br />
            Zu Business Center Chamkani Peshawar.<br />
            <span className="text-white font-semibold">+92 336 9610674</span>
          </p>
        </div>

        {/* Navigation Links with Active States */}
        <div className="grid grid-cols-2 md:flex md:gap-8 font-medium">
          {navItems.map((item, index) => {
            // Check if current path matches link path
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`transition-colors capitalize py-1 md:py-0 ${
                  isActive 
                    ? "text-green-500 font-bold" 
                    : "text-gray-300 hover:text-green-500"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mx-8 md:mx-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">
            <a 
              href="https://www.linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:em.usama2004@gmail.com"
              className="hover:text-green-500 transition-all hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>Copyright © 2026 DG Hub. All Rights Reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}