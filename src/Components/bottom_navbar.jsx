import React, { forwardRef, useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const BottomNavbar = (props, ref) => {
  const [islight, setIsLight] = useState(false);

  const handleSeitchTheme = () => {
    setIsLight(!islight);
    if (islight) {
      document.body.className = "lightBody";
      ref.current.className = "main light";
    } else {
      document.body.className = "darkBody";
      ref.current.className = "main";
    }
  };

  useEffect(() => {
    handleSeitchTheme();
  }, []);

  return createPortal(
    /* <!-- Navbar --> */
    <div className="nav-countainer">
      <nav className="nav-bar">
        <ul>
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
          <li className="nav-item">
            <Link to="#">
              <i className="uil uil-setting"></i>
              <span>SETTING</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <i className="uil uil-estate"></i>
              <span>HOME</span>
            </Link>
          </li>
          <li className="nav-item">
            <i
              className={islight ? "uil uil-sun" : "uil uil-moon"}
              id="dark-light"
              onClick={handleSeitchTheme}
            ></i>
            <span>DARK-LIGHT</span>
          </li>
          <li className="nav-item">
            <Link>
              <i className="uil uil-heart"></i>
              <span>HEART</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>,
    document.getElementById("nav-portal")
  );
};
export default forwardRef(BottomNavbar);
