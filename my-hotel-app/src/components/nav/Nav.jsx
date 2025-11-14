import React, { useState } from "react";
import Logo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButton from "./NavCTA";
import { navData } from "../../data/NavData";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between p-6  shadow-md relative z-50 md:px-10 sm:px-6">
      <Logo logo={navData.logo} />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <NavLinks links={navData.links} />
        <NavButton button={navData.button} />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none p-2 rounded hover:bg-gray-100 transition"
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden border-t border-gray-200"
          >
            <NavLinks
              links={navData.links}
              direction="vertical"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            />
            <NavButton button={navData.button} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
