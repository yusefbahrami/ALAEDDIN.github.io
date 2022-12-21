import React, { forwardRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/themeContext";
import LinkToUser from "./bottom_navbar_sub_components/LinkToUserPanel";
import Home from "./bottom_navbar_sub_components/ReturnToHome";
import ScrollToTop from "./bottom_navbar_sub_components/ScrollToTop";
import Swal from "sweetalert2";

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

  // test swal2
  // const handleShowMessage = () => {
  //   Swal.fire({
  //     title: "test",
  //     titleText: "title text",
  //     text: "I will close in 2 seconds.",
  //     timer: 2000,
  //     icon: "success",
  //     color: "#da0037",
  //     background: "#171717",
  //     footer: "footer",
  //     confirmButtonColor: "#da0037",
  //   });
  // };

  const handleShowToast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      background: `${islight ? "#171717" : "effffd"}`,
    });
    Toast.fire({
      icon: "success",
      title: "title for this",
      text: "this is the test text",
      color: `${islight ? "#da0037" : "#42c2ff"}`,
    });
  };
  // End test

  return (
    <div className="nav-countainer">
      <nav className="nav-bar">
        <ul>
          <LinkToUser />
          <li className="nav-item" onClick={handleShowToast}>
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
    </div>
  );
};
export default forwardRef(BottomNavbar);
