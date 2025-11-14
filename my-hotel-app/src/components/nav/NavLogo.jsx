// components/Navbar/NavLogo.jsx
import React from "react";

const Logo = ({ logo }) => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Arcade Logo"
        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
      />
    </div>
  );
};

export default Logo;
