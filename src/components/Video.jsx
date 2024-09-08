import React from "react";
import video from "../assets/education.mp4";

const Video = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className=" ">
        <video src={video} controls className="h-full w-full" />
      </div>
    </div>
  );
};

export default Video;
