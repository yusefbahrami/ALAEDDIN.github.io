import React from "react";
import { NavLink } from "react-router-dom";

const Music = (props) => {
  return (
    <li className="nav-item" onClick={props.handleShowToast}>
      <NavLink to={"#"}>
        <i className="uil uil-headphones"></i>
        <span>SETTING</span>
      </NavLink>
    </li>
  );
};
export default Music;
