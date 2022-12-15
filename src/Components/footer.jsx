import React from "react";
import ReactDOM from "react-dom";
import imageLogo from "../assets/DarkProfile.jpg"

const Footer = () => {
  return (
    /* <!-- Footer --> */
    <div className="footer-countainer">
      <div className="footer-content">
        <div className="footer-content-logo">
          <a href="#">
            <img src={imageLogo} alt="ALAEDDIN logo" />
          </a>
        </div>
        <div className="footer-content-links">
          <ul>
            <div>Communication</div>
            <li>
              <a
                href="https://github.com/yusefbahrami/ALAEDDIN_web_new_style"
                target="_blank"
              >
                github
              </a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <ul>
            <div>Personal Website</div>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#content-countainer">About Me</a>
            </li>
            <li>
              <a href="#skills-content">Abilities</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-content-footer_section">
        <a href="#">© designed by ALAEDDIN</a>
      </div>
    </div>
  );
};
export default Footer;
