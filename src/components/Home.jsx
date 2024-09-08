import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <div className="mx-40">
        <div>
          <h1 className="text-3xl mb-10">list of documents</h1>
          <div>
            <Link
              to="../assets/education.pdf"
              target="_blank"
              download
              className="text-2xl "
            >
              Document 1
            </Link>
          </div>
          <div>
            <Link
              to="../assets/education.pdf"
              target="_blank"
              download
              className="text-2xl"
            >
              Document 2
            </Link>
          </div>
          <div>
            <Link
              to="../assets/education.pdf"
              target="_blank"
              download
              className="text-2xl "
            >
              Document 3
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
