import React from "react";
import { NavLink } from "react-router-dom";
import JessieLewis from "../images/JessieLewis.png";

const Logo = ({ height = 45 }) => {
  return (
    <NavLink to="/">
      <img
        src={JessieLewis}
        alt="Logo for Jessie Lewis Mental Performance Consulting"
        height={height}
        width={height}
      />
    </NavLink>
  );
};

export default Logo;
