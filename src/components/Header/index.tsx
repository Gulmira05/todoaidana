import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="header">
        <NavLink to={"/admin"}>
          <h1>Admin</h1>
        </NavLink>
        <NavLink to={"/"}>
          <h1>Menu</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
