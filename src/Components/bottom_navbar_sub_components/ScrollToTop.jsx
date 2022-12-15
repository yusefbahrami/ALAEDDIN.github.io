import React from "react";
import { Link } from "react-router-dom";

const ScrollToTop = () => {
  const handleSrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <li className="nav-item" onClick={handleSrollToTop}>
      <Link>
        <i className="uil uil-arrow-up"></i>
        {/* <i className="uil uil-top-arrow-to-top"></i> */}
        <span>Arrow Up</span>
      </Link>
    </li>
  );
};
export default ScrollToTop;
