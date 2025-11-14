import React from "react";
import { motion } from "framer-motion";

const NavLinks = ({ links, direction = "horizontal" }) => {
  const containerClass =
    direction === "horizontal"
      ? "flex gap-6"
      : "flex flex-col items-center gap-4";

  const handleClick = (e, url) => {
    e.preventDefault();
    const target = document.querySelector(url);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.ul
      className={containerClass}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            onClick={(e) => handleClick(e, link.url)}
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            {link.name}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
