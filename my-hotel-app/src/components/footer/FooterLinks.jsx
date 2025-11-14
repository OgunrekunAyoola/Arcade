// FooterLinks.jsx
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const FooterLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
      <div>
        <h3 className="text-xl font-satoshi font-bold text-white mb-2">
          Our Rooms
        </h3>
        <ul className="text-white font-satoshi space-y-1">
          <li>Presidential Suite</li>
          <li>Ambassador Suite</li>
          <li>Classic</li>
          <li>Royal</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-satoshi font-bold text-white mb-2">
          Other Links
        </h3>
        <ul className="text-white font-satoshi space-y-1">
          <li>About Us</li>
          <li>Experience</li>
          <li className="flex gap-2 items-center mt-2">
            <Instagram className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-satoshi font-bold text-white mb-2">
          Legal
        </h3>
        <ul className="text-white font-satoshi space-y-1">
          <li>© Copyright All Rights Reserved. Arcade Suites 2025</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
