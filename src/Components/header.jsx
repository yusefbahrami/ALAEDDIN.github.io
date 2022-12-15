import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import darkImageProfile from "../assets/DarkProfile.jpg";
import lightImageProfile from "../assets/LightProfile.jpg";
import { ThemeContext } from "../Context/themeContext";

const Header = () => {
  const { islight, setIsLight } = useContext(ThemeContext);
  return (
    /* <!-- Header --> */
    <div className="header-countainer">
      <div className="profile-box">
        <div className="profile-box-image">
          <Link to="" className="profile-image-route">
            <img
              src={islight ? darkImageProfile : lightImageProfile}
              alt="ALAEDDIN"
              className="profile-image"
            />
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
