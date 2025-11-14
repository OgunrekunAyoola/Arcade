import React from "react";
import RoomCard from "./RoomCards";
import { roomsData } from "../../data/RoomData";

const RoomsGrid = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <h2 className="font-satoshi text-2xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Living your experience
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsGrid;
