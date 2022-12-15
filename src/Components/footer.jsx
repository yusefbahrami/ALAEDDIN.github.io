import React from "react";
import { Link } from "react-router-dom";
import imageLogo from "../assets/DarkProfile.jpg";

const Footer = () => {
  const handleOpenSource = () => {
    window.open(
      "https://github.com/yusefbahrami/ALAEDDIN_main_project",
      "_blank"
    );
  };
  const handleOpenGithub = () => {
    window.open("https://github.com/yusefbahrami/", "_blank");
  };

  return (
    /* <!-- Footer --> */
    <div className="footer-countainer">
      <div className="footer-content">
        <div className="footer-content-logo">
          <Link to="#">
            <img src={imageLogo} alt="ALAEDDIN logo" />
          </Link>
        </div>
        <div className="footer-content-links">
          <ul>
            <div>Communication</div>
            <li>
              <Link onClick={handleOpenGithub}>github</Link>
            </li>
            <li>
              <Link onClick={handleOpenSource}>Sources</Link>
            </li>
            <li>
              <Link to="#">Telegram</Link>
            </li>
            <li>
              <Link to="#">Instagram</Link>
            </li>
          </ul>
          <ul>
            <div>Personal Website</div>
            <li>
              <Link to="#top">Home</Link>
            </li>
            <li>
              <Link to="#content-countainer">About Me</Link>
            </li>
            <li>
              <Link to="#skills-content">Abilities</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-content-footer_section">
        <Link to="/">© designed by ALAEDDIN</Link>
      </div>
    </div>
  );
};
export default Footer;
