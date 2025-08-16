import React from "react";
import xvg from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="my-5 container mx-auto text-center">
      <div className="row d-flex justify-content-center">
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <div className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center mt-5">
            <img
              src={xvg}
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
            <div
              className="d-flex"
              style={{ flexDirection: "column", gap: "10px" }}
            >
              <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                Introduction
              </Link>
              <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                Scales
              </Link>
              <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                Chords
              </Link>
              <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                Progressions
              </Link>
            </div>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to="sampleSongs"
            >
              Sample Songs
            </Link>
          </div>
          <hr className="mx-auto" style={{ width: "60%", opacity: ".1" }} />
          <div className="d-flex flex-column flex-sm-row text-center justify-content-evenly mt-3">
            <p style={{ color: "lightgray" }}>WorshipChords &copy; 2025</p>
            <small style={{ color: "rgb(0,95,135)", opacity: ".3" }}>
              From beginner <span style={{ color: "green" }}>to advance.</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
