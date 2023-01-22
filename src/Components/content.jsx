import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Error/Error404";
import Main from "./HomePage";
import UserPanel from "./UserPanel/UserPanel";
import LoginPanel from "./Login_Signup/LoginPanel";

const Content = () => {
  return (
    /* <!-- Central contents --> */
    <div className="content-countainer" id="content-countainer">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<UserPanel />} />
        <Route path="/login" element={<LoginPanel />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
export default Content;
