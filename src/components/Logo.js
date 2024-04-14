import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ height = 45 }) => {
  return (
    <NavLink to="/">
      <img
        src="/JessieLewis.png"
        alt="Logo for Jessie Lewis Mental Performance Consulting"
        height={height}
        width={height}
      />
    </NavLink>
  );
};

export default Logo;
