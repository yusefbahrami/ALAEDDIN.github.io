import React, { forwardRef, useContext, useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ThemeContext } from "../Context/themeContext";
import LinkToUser from "./bottom_navbar_sub_components/LinkToUserPanel";
import Home from "./bottom_navbar_sub_components/ReturnToHome";
import ScrollToTop from "./bottom_navbar_sub_components/ScrollToTop";

const BottomNavbar = (props, ref) => {
  const { islight, setIsLight } = useContext(ThemeContext);

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
          <LinkToUser />
          <li className="nav-item">
            <Link to="#">
              <i className="uil uil-setting"></i>
              <span>SETTING</span>
            </Link>
          </li>
          <Home />
          <li className="nav-item">
            <Link>
              <i
                className={islight ? "uil uil-sun" : "uil uil-moon"}
                id="dark-light"
                onClick={handleSeitchTheme}
              ></i>
              <span>DARK-LIGHT</span>
            </Link>
          </li>
          <ScrollToTop />
        </ul>
      </nav>
    </div>,
    document.getElementById("nav-portal")
  );
};
export default forwardRef(BottomNavbar);
