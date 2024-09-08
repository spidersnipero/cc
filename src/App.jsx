import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./components/Home";
import VideoResources from "./components/VideoResources";
import Video from "./components/Video";

function App() {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedin")) {
      setState(true);
    }
  }, []);
  return (
    <>
      {state == true ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-resources" element={<VideoResources />} />
          <Route path="/video" element={<Video />} />
          <Route path="*" element={<p>Not available</p>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<p>Not available</p>} />
        </Routes>
      )}
    </>
  );
}

export default App;
