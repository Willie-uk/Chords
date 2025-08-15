import React from "react";
import xvg from "../assets/logo.svg";

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
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Introduction
              </a>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Scales
              </a>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Chords
              </a>
              <a style={{ textDecoration: "none", color: "gray" }} href="#">
                Progressions
              </a>
            </div>
            <a
              style={{ textDecoration: "none", color: "gray" }}
              href="paa/medic"
            >
              Sample Songs
            </a>
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
