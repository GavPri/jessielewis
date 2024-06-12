import React from "react";
import { NavLink } from "react-router-dom";
import JessieLewis from "../images/JessieLewis.png";

const Logo = () => {
  // --- div backgrond style to deal with logo rendering in prodction
  const divStyle = {
    backgroundImage: `url(${JessieLewis})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <NavLink
      to="/"
      className="h-[85px] aspect-square"
      style={divStyle}
    ></NavLink>
  );
};

export default Logo;
