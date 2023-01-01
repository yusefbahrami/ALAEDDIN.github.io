import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./Error/Error404";
import Main from "./MainPageComponent";
import MusicList from "./music_component/MusicList";

const Content = () => {
  return (
    /* <!-- Central contents --> */
    <div className="content-countainer" id="content-countainer">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/music-list" element={<MusicList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
export default Content;
