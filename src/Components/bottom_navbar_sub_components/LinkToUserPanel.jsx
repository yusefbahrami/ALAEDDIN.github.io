import React from "react";
import { Link } from "react-router-dom";

const LinkToUser = () => {
  return (
    <li className="nav-item">
      <Link to="#">
        <i className="uil uil-user"></i>
        {/* <img
        className="user-profile"
        src="./assets/IMG_20221024_160602_501.jpg"
        alt="Profile image"
      /> */}
        <span>USER</span>
      </Link>
    </li>
  );
};
export default LinkToUser;
