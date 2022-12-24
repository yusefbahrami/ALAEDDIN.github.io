import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <li className="nav-item">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          return isActive ? "active_nav" : "";
        }}
      >
        <i className="uil uil-estate"></i>
        <span>HOME</span>
      </NavLink>
    </li>
  );
};
export default Home;
