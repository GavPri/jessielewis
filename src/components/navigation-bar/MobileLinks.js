import React from "react";
// Icons for hamburger menu
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MobileLinks = ({
  showMobileLinks,
  setShowMobileLinks,
  handleMobileLinks,
}) => {
  return (
    <div onClick={handleMobileLinks} className="md:hidden">
      <div className="text-darkest">
        {showMobileLinks ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <ul
        className={
          showMobileLinks
            ? "fixed top-24 right-0 rounded-b-md bg-lightest w-full sm:max-w-[800px] sm:m-auto ease-in-out duration-500 z-20 md:hidden"
            : "fixed top-24 right-[-100%] bg-neutral ease-in-out duration-500 rounded-md bg-blue-300 w-full sm:max-w-[800px] sm:m-auto"
        }
      >
        <li className="text-darkest font-poppins font-bold pl-4 pb-2 mr-2 w-[50%] mb-4 mt-4 border-b-2 border-dark">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-darkest font-poppins font-bold pl-4 pb-2 mr-2 w-[50%] mb-4 mt-4 border-b-2 border-dark">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="text-darkest font-poppins font-bold pl-4 pb-2 mr-2 w-[50%] mb-4 mt-4 border-b-2 border-dark">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="text-darkest font-poppins font-bold pl-4 pb-2 mr-2 w-[50%] mb-4 mt-4 border-b-2 border-dark">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="text-darkest font-poppins font-bold pl-4 mb-4">
          <NavLink to="/faqs">FAQs</NavLink>
        </li>
        <div className="absolute top-0 left-0 h-screen w-screen bg-lightest opacity-90 z-[-10]"></div>
      </ul>
    </div>
  );
};

export default MobileLinks;
