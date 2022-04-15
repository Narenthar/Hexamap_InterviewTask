import React from "react";
// import { Nav, Navbar, NavbarBrand, NavItem, Container } from "reactstrap";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <nav className="navbar">
 <div className="logo"><i className="fa fa-home"></i></div>
 <ul className="nav-links">
 <input type="checkbox" id="checkbox_toggle" />
 <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
 <div className="menu">
 <li>Projects</li>
 <li>Skills</li>
 <li>
 Resume
 </li>
 <li>Contact</li>
 </div>
 </ul>
 </nav>
  );
};
