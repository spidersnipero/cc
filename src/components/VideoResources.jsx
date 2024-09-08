import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const VideoResources = () => {
  const nav = useNavigate();
  const changeUrl = () => {
    console.log("clicked");
    window.location.href = "/video?src=education.mp4";
  };
  return (
    <>
      <Nav />
      <div className="mx-40">
        <h3 className="text-3xl pt-7 cursor-pointer" onClick={changeUrl}>
          Video 1
        </h3>
        <h3 className="text-3xl pt-7 cursor-pointer" onClick={changeUrl}>
          Video 2
        </h3>
        <h3 className="text-3xl pt-7 cursor-pointer" onClick={changeUrl}>
          Video 3
        </h3>
      </div>
    </>
  );
};

export default VideoResources;
