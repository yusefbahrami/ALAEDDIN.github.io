import React, { useEffect, useRef, useState } from "react";
import FileNames from "./../../assets/Sound/FileNames.txt";
import mu from "./../../assets/Sound/02 Laanat.mp3";
import ReactAudioPlayer from "react-audio-player";
import MusicPlayer from "./MusicPlayer";
// import file from "./../../assets/Sound/01.Shadmehr Aghili - Tajrobeh Kon.mp3";

const MusicList = () => {
  const [musicResult, setMusicResult] = useState([]);

  const handleGetData = async () => {
    let result = await (await fetch(FileNames)).text();
    result = result.split(",");
    setMusicResult(result);
  };

  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <div className="music-list-main">
      {/* <ReactAudioPlayer ref={audio} src={file} id="audio" controls autoPlay /> */}
      {musicResult.map(m=>(<MusicPlayer m={m}/>))}
      {/* <ReactAudioPlayer src={mu} controls/> */}
    </div>
  );
};

export default MusicList;
