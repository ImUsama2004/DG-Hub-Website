import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import adminImg from '../../assets/admin1.jpg';
import { useNavigate } from 'react-router-dom';

const ProductSlider = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Sra Kamiz", desc: "Da khkulee ao naree kaalay dai da khpale khwakhe para.", img: adminImg },
    { id: 2, name: "Tor Bot", desc: "Leather boots for a stylish and comfortable walk.", img: adminImg },
    { id: 3, name: "Spin Gharee", desc: "Pure cotton white dress for summer vibes.", img: adminImg },
    { id: 4, name: "Shin Topai",  desc: "Traditional blue cap with premium embroidery.", img: adminImg },
    { id: 5, name: "Khumari Chappal", desc: "Peshawari chappal with modern touch.", img: adminImg },
    { id: 6, name: "Kaptan Special",  desc: "Exclusive design for special occasions.", img: adminImg },
    { id: 7, name: "Warkari Shoes",  desc: "Comfortable and durable for daily use.", img: adminImg },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const scrollRef = useRef(null);
  const selectedProduct = products[selectedIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length, isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-10 px-4">
      
      {/* --- BIG PREVIEW CARD --- */}
      <div 
        className="w-full max-w-5xl h-112.5 mb-12"
        onMouseEnter={() => setIsPaused(true)}   
        onMouseLeave={() => setIsPaused(false)}  
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row bg-white rounded-[2.5rem] shadow-2xl overflow-hidden h-full border border-green-100"
          >
            {/* Left Image */}
            <div className="md:w-1/2 h-full">
              <img src={selectedProduct.img} alt="preview" className="w-full h-full object-cover" />
            </div>

            {/* Right Details */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center text-left bg-linear-to-br from-white to-green-50">
              <span className="text-green-600 font-bold uppercase tracking-widest text-xs mb-3">Web Application</span>
              <h2 className="text-5xl font-black text-gray-800 mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-8 text-lg italic">"{selectedProduct.desc}"</p>
              
              {/* Removed price section */}

              <div
                onClick={() => navigate('/productdetails', { state: selectedProduct })}
                className="flex gap-4"
              >
                <button className="flex-2 bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 shadow-lg cursor-pointer shadow-green-200 active:scale-95 transition-all">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- SLIDER SECTION WITH ARROWS --- */}
      <div className="w-full max-w-6xl relative px-14">
        
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-green-50 border border-green-200 text-green-600 text-2xl font-bold transition-transform hover:scale-110"
        >
          &larr;
        </button>

        {/* Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth"
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIndex(index)}
              className={`relative shrink-0 cursor-pointer w-44 h-60 rounded-4xl overflow-hidden transition-all duration-500 shadow-md ${
                selectedIndex === index 
                  ? 'ring-4 ring-green-500 ring-offset-4 scale-105' 
                  : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
              }`}
            >
              <img src={item.img} alt="thumb" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linearx-to-t from-green-900/90 via-transparent to-transparent flex flex-col justify-end p-4">
                <p className="text-white text-sm font-bold truncate">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-green-50 border border-green-200 text-green-600 text-2xl font-bold transition-transform hover:scale-110"
        >
          &rarr;
        </button>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ProductSlider;
