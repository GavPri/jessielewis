import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ type, onClick, className, text, variant, icon, to }) => {
  const getButtonVariant = () => {
    switch (variant) {
      case "secondary":
        return "bg-lightest font-poppins font-bold rounded-md text-dark border-2 border-transparent hover:bg-seafoam hover:text-lightest transition-all duration-500";
      default:
        return "py-2 px-4 rounded-md font-poppins transition-all duration-500 button active:button-drop";
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-4/6 flex justify-center items-center text-xl py-2 px-4 font-poppins font-bold  ${getButtonVariant()} ${className}`}
    >
      <NavLink to={to}>{text}</NavLink>
      {icon && <span className="ml-2 rotate-[-45deg]">{icon}</span>}
    </button>
  );
};

export default Button;
