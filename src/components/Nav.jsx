import React from "react";
import { Link } from "react-router-dom";

const changeState = () => {
  localStorage.removeItem("loggedin");
  window.location.href = "/";
};

const Nav = () => {
  return (
    <nav className="mx-24 p-4 rounded-lg mt-4  flex justify-end  bg-blue-500 text-white space-x-5">
      {location.pathname == "/" ? (
        <Link to="/video-resources">Video Resources</Link>
      ) : (
        <Link to="/">Go Home</Link>
      )}
      <p onClick={changeState} className="cursor-pointer">
        Sign out
      </p>
    </nav>
  );
};

export default Nav;
