import React from "react";
import { Link } from "react-router-dom";
import userProfile from "../../assets/DarkProfile.jpg";

const LinkToUser = () => {
  return (
    <li className="nav-item">
      <Link to="#">
        {/* <i className="uil uil-user"></i> */}
        <img className="user-profile" src={userProfile} alt="Profile" />
        <span>USER</span>
      </Link>
    </li>
  );
};
export default LinkToUser;
