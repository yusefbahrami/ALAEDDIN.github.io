import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import Main from "./MainPageComponent";

const Content = () => {
  return (
    /* <!-- Central contents --> */
    <div className="content-countainer" id="content-countainer">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
export default Content;
