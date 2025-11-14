// FooterLogo.jsx
import React from "react";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      {/* Logo Image */}
      <img
        src="/ArcadeLogo.png" // Path in the public folder
        alt="Arcade Suites Logo"
        className="w-40 sm:w-48 object-contain"
      />

      {/* Contact Info */}
      <p className="text-white font-satoshi font-semibold text-lg">
        +2347077740985
      </p>
      <p className="text-white font-satoshi font-semibold text-lg">
        reservations@arcadesuites.ng
      </p>
      <p className="text-white font-satoshi text-base sm:text-lg">
        Opposite Federal High Court, Maitama, Abuja, Nigeria
      </p>
    </div>
  );
};

export default FooterLogo;
