import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/download.png";
import { ArrowRight, Zap } from "lucide-react";
import { Link} from "react-router-dom"

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Abstract Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              We are now available
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
              Build faster with <span className="text-blue-500">modern developer tools</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              <span className="text-blue-500">DG Hub</span> provides a powerful platform for building, deploying, and
              scaling applications with speed, security, and simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={'contact'}>
              <button className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition flex items-center gap-1">
                Contact
                <ArrowRight className="h-4 w-4" />
              </button>
                </Link>
              <Link to={'services'}>
              <button className="px-6 py-3 border border-white/30 rounded hover:bg-white/10 transition">
                Our Products
              </button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
