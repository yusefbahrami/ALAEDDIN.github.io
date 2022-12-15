import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    /* <!-- Header --> */
    <div className="header-countainer">
      <div className="profile-box">
        <div className="profile-box-image">
          <Link to="" className="profile-image-route">
            <img src="" alt="ALAEDDIN" className="profile-image" />
          </Link>
        </div>
        <div className="profile-box-description">
          <div className="profile-box-inner-description">
            <h1 className="profile-title">ALAEDDIN</h1>
            <p className="profile-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quis
              commodi odit numquam nihil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
