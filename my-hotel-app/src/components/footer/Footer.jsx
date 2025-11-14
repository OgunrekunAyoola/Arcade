// Footer.jsx
import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="relative bg-orange-500 pt-16 pb-12 px-16 sm:px-12 lg:px-24 overflow-hidden">
      {/* Optional decorative overlay */}
      <div className="absolute inset-0 bg-orange-500 clip-path-wave -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
        <FooterLogo />
        <FooterLinks />
      </div>

      {/* Statement or tagline */}
      <div className="mt-12 text-center text-white font-satoshi text-xl sm:text-xl font-bold">
        Experience luxury, comfort, and unforgettable memories at Arcade Suites
      </div>
    </footer>
  );
};

export default Footer;
