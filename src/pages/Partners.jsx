import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronUp } from 'lucide-react';
import Header from "../components/partners/Header";

// Animation Variants
const logoStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const logoFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// Hero Section Component
function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-gradient-shift {
          animation: gradientShift 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulseRing 1.5s infinite;
        }
      `}</style>

      <section className="min-h-[400px] bg-gradient-to-br from-[#0a1628] to-[#1a2744] flex items-center justify-between px-6 py-20 md:px-16 lg:px-24 xl:px-28 flex-col md:flex-row gap-10 md:gap-0">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Make The{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Switch
            </span>{' '}
            To A<br />
            Seamless Digital Future
          </h1>
        </div>
        
        <button
          className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#5B5FED] to-[#7B7FFF] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(91,95,237,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_rgba(91,95,237,0.5)] shrink-0"
          aria-label="Get started"
        >
          {/* Pulse effect on hover */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5B5FED] to-[#7B7FFF] opacity-0 group-hover:opacity-50 group-hover:animate-pulse-ring"></span>
          
          {/* Arrow */}
          <div className="w-6 h-6 md:w-8 md:h-8 border-r-[3px] border-b-[3px] border-white transform rotate-[-45deg] ml-1"></div>
        </button>
      </section>
    </>
  );
}

function Partners() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Partners data
  const partners = [
    { 
      name: 'Aruba', 
      image: '/logos/aruba.png',
      alt: 'Aruba - A Hewlett Packard Enterprise company'
    },
    { 
      name: 'Barracuda', 
      image: '/logos/barracuda.png',
      alt: 'Barracuda'
    },
    { 
      name: 'BUFFALO', 
      image: '/logos/buffalo.png',
      alt: 'Buffalo'
    },
    { 
      name: 'EATON', 
      image: '/logos/eaton.png',
      alt: 'Eaton - Authorized Power Advantage Partner'
    },
    { 
      name: 'Extreme Networks', 
      image: '/logos/extreme.png',
      alt: 'Extreme Networks'
    },
    { 
      name: 'Fortinet', 
      image: '/logos/fortinet.png',
      alt: 'Fortinet'
    },
    { 
      name: 'Malwarebytes', 
      image: '/logos/malwarebytes.png',
      alt: 'Malwarebytes'
    },
    { 
      name: 'Tripp Lite', 
      image: '/logos/tripplite.png',
      alt: 'Tripp Lite - Powering Through Innovation'
    },
    { 
      name: 'Unify', 
      image: '/logos/unify.png',
      alt: 'Unify'
    },
    { 
      name: 'Veeam', 
      image: '/logos/veeam.png',
      alt: 'Veeam'
    },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

      {/* Partner Logo Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pb-20 px-10 md:px-28"
      >
        <motion.div 
          variants={logoStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-12 lg:p-16'
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={logoFadeIn}
                className="group flex items-center justify-center min-h-[100px] p-6 transition-all duration-300 hover:scale-105 relative"
              >
                {/* Logo Image */}
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="max-w-full max-h-16 w-auto h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                
                {/* Hover effect background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* NEW: Hero Section - Placed after logos and before footer */}
      <HeroSection />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-full shadow-lg shadow-indigo-500/40 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-1 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-7 h-7 text-white stroke-[2.5]" />
      </button>
    </div>
  );
}

export default Partners;