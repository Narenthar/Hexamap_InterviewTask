import React from "react";
import profile from "../Pics/profilepic_naren.jpeg"

export const About = () => {
  return (
    <div>
      <div>
        <p>Narenthar Chidambaram</p>
        <p>A Full-Stack JavaScript Web Developer with a passion for building websites.
          <br />
          When I'm not coding, I like to play video games and watch movies 🎮 🎬</p>
      </div>
      <img src={profile} alt="Profile Pic" width="150px" />
    </div>
  );
};
