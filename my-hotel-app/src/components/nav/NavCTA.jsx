import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ button }) => {
  return (
    <Link
      to={button.url}
      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
    >
      {button.text}
    </Link>
  );
};

export default NavButton;
