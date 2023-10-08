import React from "react";
import profile from "../Pics/profilepic_naren.jpeg";
import "../Styles/About.css";

export const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div className="about-card">
          <p className="myname words word-1">
            <span>N</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
            <span>h</span>
            <span>a</span>
            <span>r</span>
          </p>
          <p className="myname words word-2">
            <span>C</span>
            <span>h</span>
            <span>i</span>
            <span>d</span>
            <span>a</span>
            <span>m</span>
            <span>b</span>
            <span>a</span>
            <span>r</span>
            <span>a</span>
            <span>m</span>\
          </p>
          <p className="about-text">
            A Web Developer with a passion for building
            websites.
            <br />
            When I'm not coding, I like to play video games and watch movies 🎮
            🎬
          </p>
          <div className="footer-row">
            <a
              href="https://www.linkedin.com/in/narenthar-chidambaram-22442b112/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Narenthar"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1O_HCtY7AC5sUh4AhXaWeAcp5Xk-bPEf8/view"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i class="fa fa-file-text-o"></i>
            </a>
          </div>
        </div>

        <div className="pic ">
          <figure>
            <img
              className="profilepic  "
              src={profile}
              alt="Profile Pic"
              width="150px"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
