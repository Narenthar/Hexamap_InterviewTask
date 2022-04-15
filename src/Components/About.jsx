import React from "react";
import profile from "../Pics/profilepic_naren.jpeg"
import "../Styles/About.css"

export const About = () => {
  return (
    <div className="about-container">
        <div className="about-card">
        <div className="about-text">
        <p className="myname">Narenthar Chidambaram</p>
        <p >A Full-Stack JavaScript Web Developer with a passion for building websites.
          <br />
          When I'm not coding, I like to play video games and watch movies 🎮 🎬</p>
      </div>
      <img src={profile} alt="Profile Pic" width="150px" />
        </div>
    </div>
  );
};
