import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <li className="nav-item">
      <Link to={"/"}>
        <i className="uil uil-estate"></i>
        <span>HOME</span>
      </Link>
    </li>
  );
};
export default Home;
