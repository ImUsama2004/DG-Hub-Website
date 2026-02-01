import React from "react";
import { motion } from "framer-motion";

const TeamCard = ({ name, role, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Container with Overflow Hidden for the Zoom Effect */}
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-square max-w-50 mx-auto">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm font-bold uppercase tracking-widest text-green-600">{role}</p>
      
      {/* Small Decorative Line */}
      <div className="w-8 h-1 bg-gray-200 mx-auto mt-4 group-hover:w-16 group-hover:bg-green-600 transition-all duration-300" />
    </motion.div>
  );
};

export default TeamCard;