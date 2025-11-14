// src/pages/AvailableRooms.jsx

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AvailableRooms = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state || !state.rooms) {
    return (
      <div className="p-20 text-center text-2xl font-bold">
        No rooms found. Go back and search again.
      </div>
    );
  }

  const { rooms, checkIn, checkOut } = state;

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 max-w-[1500px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {rooms.length} rooms available from {checkIn} to {checkOut}
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="relative w-full rounded-xl overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={room.images[0]}
              alt={room.name}
              className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-3xl sm:text-4xl text-white mb-2 font-bold">
                Room {room.number}
              </h3>

              <p className="text-white text-sm sm:text-base mb-4 drop-shadow-lg">
                {room.view} • {room.size} • {room.bedType}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white font-extrabold text-3xl sm:text-4xl drop-shadow-lg">
                  ₦{room.price.toLocaleString()}
                </p>
                <button
                  onClick={() => navigate("/booking-form", { state: room })}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-sm sm:text-base transition shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AvailableRooms;
