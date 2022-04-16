import React from "react";
import "../Styles/Header.css";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="about" smooth={true} offset={-70} duration={500}>
          <i className="fa fa-home"></i>
        </Link>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <span className="nav-name">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={-70} duration={500}>
              <span className="nav-name">Skills</span>
            </Link>
          </li>
          <li>
            <a className="nav-name" href = "/">
              <span >Resume</span>
            </a>
          </li>
          <li>
            <Link to="footer" smooth={true} offset={80} duration={500}>
              <span className="nav-name">Contact</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
