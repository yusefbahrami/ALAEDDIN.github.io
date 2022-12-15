import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Error404 from "./error404";
import Main from "./main_page_component";

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
