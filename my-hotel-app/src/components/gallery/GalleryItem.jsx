import React from "react";
import { motion } from "framer-motion";

const GalleryItem = ({ title, description, image }) => {
  return (
    <motion.div
      className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg group"
      whileHover={{ scale: 1.03 }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Content overlaid on image */}
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <h3 className="text-2xl sm:text-3xl font-satoshi font-bold mb-1">
          {title}
        </h3>
        <p className="text-sm sm:text-base">{description}</p>
      </div>

      {/* Hover plus icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white text-4xl font-bold">+</span>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
