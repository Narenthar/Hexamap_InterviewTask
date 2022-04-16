import React from "react";
import profile from "../Pics/profilepic_naren.jpeg"
import "../Styles/About.css"

export const About = () => {
  return (
    <div className="about-container" id="about">
        <div className="about-section">
        <div className="about-card">
        <p className="myname">Narenthar Chidambaram</p>
        <p className="about-text">A Full-Stack JavaScript Web Developer with a passion for building websites.
          <br />
          When I'm not coding, I like to play video games and watch movies 🎮 🎬</p>
      </div>
      <img className="profilepic" src={profile} alt="Profile Pic" width="150px" />
        </div>
    </div>
  );
};
