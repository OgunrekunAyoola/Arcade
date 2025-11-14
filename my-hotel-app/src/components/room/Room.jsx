import React from "react";
import RoomsTitle from "./RoomTitle";
import RoomsSubtitle from "./RoomSubtitle";
import RoomsGrid from "./RoomGrid";

const Rooms = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <RoomsTitle />
      <RoomsSubtitle />
      <div className="mt-12">
        <RoomsGrid />
      </div>
    </section>
  );
};

export default Rooms;
