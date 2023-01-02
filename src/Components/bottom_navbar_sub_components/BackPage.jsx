import React from "react";
import { NavLink } from "react-router-dom";

const BackPage = () => {
  return (
    <li className="nav-item">
      <NavLink to={-1}>
        <i className="uil uil-arrow-left"></i>
        <span>Back</span>
      </NavLink>
    </li>
  );
};
export default BackPage;
