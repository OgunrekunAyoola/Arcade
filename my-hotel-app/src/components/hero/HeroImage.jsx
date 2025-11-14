import React from "react";

const HeroImage = ({ imageUrl }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default HeroImage;
