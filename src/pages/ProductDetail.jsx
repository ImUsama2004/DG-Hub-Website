import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Monitor, Cpu, Database, Layout, ShieldCheck, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/contact/Header';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    navigate('/', { replace: true });
    return null;
  }

  const {
    name = "Sample Project",
    desc = "This is a sample description from the product card.",
    media: initialMedia = [{ type: 'image', url: product.img }]
  } = product;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(300); // default height
  const media = initialMedia.length > 0 ? initialMedia : [{ type: 'image', url: product.img }];
  const imgRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [currentIndex, media]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  // Dynamic slider height
  useEffect(() => {
    const updateHeight = () => {
      const img = new Image();
      img.src = media[currentIndex].url;
      img.onload = () => {
        const containerWidth = imgRef.current?.clientWidth || 400;
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const maxHeight = 500; // max height limit
        const newHeight = Math.min(containerWidth * aspectRatio, maxHeight);
        setSliderHeight(newHeight);
      };
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [currentIndex, media]);

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const data = [
      { name: 'React', icon: <Monitor />, color: 'text-blue-600' },
      { name: 'Node.js', icon: <Cpu />, color: 'text-green-600' },
      { name: 'Tailwind', icon: <Layout />, color: 'text-cyan-600' },
      { name: 'MongoDB', icon: <Database />, color: 'text-emerald-600' },
      { name: 'Framer', icon: <Code2 />, color: 'text-purple-600' },
      { name: 'Security', icon: <ShieldCheck />, color: 'text-orange-600' },
    ];
    setTechs(data);
  }, []);

  return (
    <div className="w-full bg-white">
      <Header />

      {/* --- 1. MEDIA SLIDER --- */}
      <section className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div
            ref={imgRef}
            className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-900 group"
            style={{ height: `${sliderHeight}px` }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900"
              >
                <img
                  src={media[currentIndex].url}
                  className="max-w-full max-h-full object-contain"
                  alt={`Slide ${currentIndex}`}
                />
                {media[currentIndex].isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <PlayCircle className="w-12 sm:w-16 h-12 sm:h-16 text-white opacity-80" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slider Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. PROJECT DESCRIPTION SECTION --- */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Project Name */}
        <div className="bg-gray-200 p-5 sm:p-6 md:p-8 rounded-xl shadow-md border-4 border-gray-200 text-center
                        transition-transform transform hover:scale-105 hover:shadow-[0_0_40px_rgba(22,163,74,0.5)] hover:border-green-600">
          <h4 className="text-xl sm:text-2xl md:text-3xl underline font-semibold text-green-600 mb-2">Project Name</h4>
          <p className="text-gray-700 hover:text-black text-base sm:text-lg md:text-xl font-light">{name}</p>
        </div>

        {/* Project Detail */}
        <div className="bg-gray-200 p-5 sm:p-6 md:p-8 rounded-xl shadow-md border-4 border-gray-200 text-center
                        transition-transform transform hover:scale-105 hover:border-green-600 hover:shadow-[0_0_40px_rgba(22,163,74,0.5)]">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold underline text-green-600 mb-2">Project Detail</h4>
          <p className="text-gray-700 hover:text-black text-base sm:text-lg md:text-xl font-light">{desc}</p>
        </div>
      </section>

      {/* --- 3. TECH STACK --- */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6 sm:mb-8 text-center underline">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {techs.map((tech, i) => (
              <div
                key={i}
                className="bg-gray-200 p-4 sm:p-6 rounded-3xl flex flex-col items-center shadow-sm sm:shadow-md gap-2 sm:gap-3 border border-gray-100
                           transition transform hover:scale-105 hover:shadow-lg hover:bg-gray-300 cursor-pointer"
              >
                <div className={`${tech.color} w-8 sm:w-10 h-8 sm:h-10`}>{tech.icon}</div>
                <span className="text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
