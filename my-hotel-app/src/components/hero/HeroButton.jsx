import React from "react";

const HeroButton = ({ text }) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 animate-fadeIn delay-400">
      Check Avalability
    </button>
  );
};

export default HeroButton;
