// src/components/hero/CheckAvailability.jsx

import { useState, useEffect } from "react";
import { roomsData } from "../../data/DummyRooms";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext"; // IMPORTANT

const CheckAvailability = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading(); // use loader

  const [roomType, setRoomType] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    if (roomType) {
      const type = roomsData.find((r) => r.slug === roomType);
      setFilteredRooms(type ? type.rooms : []);
    }
  }, [roomType]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Start loading
    setLoading(true);

    // Add a small delay to show animation properly
    setTimeout(() => {
      navigate("/available-rooms", {
        state: {
          checkIn,
          checkOut,
          guests,
          rooms: filteredRooms,
          type: roomType,
        },
      });

      // Stop loading after navigation
      setLoading(false);
    }, 700);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 bg-white/90 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl flex flex-col gap-6 items-center justify-center max-w-full lg:max-w-[1500px] mx-auto"
    >
      {/* Room Type */}
      <div className="flex flex-col w-full">
        <label className="text-gray-900 font-bold text-lg mb-2">
          Select Room Type
        </label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
          className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 text-lg"
        >
          <option value="">Choose...</option>
          {roomsData.map((rt) => (
            <option key={rt.slug} value={rt.slug}>
              {rt.type}
            </option>
          ))}
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col w-full">
        <label className="text-gray-900 font-bold text-lg mb-2">
          Check-in Date
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
          className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 text-lg"
        />
      </div>

      {/* Check-out */}
      <div className="flex flex-col w-full">
        <label className="text-gray-900 font-bold text-lg mb-2">
          Check-out Date
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          min={checkIn}
          className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 text-lg"
        />
      </div>

      {/* Guests */}
      <div className="flex flex-col w-full">
        <label className="text-gray-900 font-bold text-lg mb-2">Guests</label>
        <input
          type="number"
          value={guests}
          min={1}
          max={3}
          onChange={(e) =>
            setGuests(Math.min(3, Math.max(1, Number(e.target.value))))
          }
          required
          className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 text-lg text-center"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-12 py-4 rounded-xl shadow-xl transition"
      >
        Search
      </button>
    </form>
  );
};

export default CheckAvailability;
