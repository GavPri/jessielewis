import React from "react";
import { NavLink } from "react-router-dom";

const DesktopLinks = () => {
  return (
    <ul className="hidden md:flex text-darkest">
      <li className="mr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/faqs">FAQs</NavLink>
      </li>
    </ul>
  );
};

export default DesktopLinks;
