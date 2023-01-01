import React from "react";
import { NavLink } from "react-router-dom";

const Music = () => {
  return (
    <li className="nav-item">
      <NavLink to={"/music-list"}>
        <i className="uil uil-headphones"></i>
        <span>SETTING</span>
      </NavLink>
    </li>
  );
};
export default Music;
