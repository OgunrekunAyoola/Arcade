import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const RoomCard = ({ room }) => {
  return (
    <motion.div
      className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[500px] h-[450px] sm:h-[500px] lg:h-[550px] rounded-xl overflow-hidden cursor-pointer shadow-lg group"
      whileHover={{ scale: 1.03 }}
    >
      {/* Background Image */}
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <Plus className="text-white w-10 sm:w-12 h-10 sm:h-12" />
      </div>

      {/* Full overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 bg-gradient-to-t from-black/70 to-transparent">
        {/* Room Name with animated underline */}
        <h3 className="font-satoshi text-[22px] sm:text-[26px] lg:text-[28px] text-white mb-2 relative group">
          <span className="transition-all duration-300 group-hover:font-bold">
            {room.name}
          </span>
          <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></span>
        </h3>

        {/* Room Description */}
        <p className="font-satoshi text-white text-xs sm:text-sm md:text-base mb-3 drop-shadow-lg">
          {room.description}
        </p>

        {/* Price + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-3">
          <p
            className="font-satoshi text-gray-300 font-extrabold 
            text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] 
            drop-shadow-lg leading-none"
          >
            ₦{room.price.toLocaleString()}
          </p>

          <button className="font-satoshi bg-primary text-white px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm md:text-base hover:bg-primary/80 transition shadow-lg">
            View Room Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
