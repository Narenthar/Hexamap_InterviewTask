import React from "react";
// import { Nav, Navbar, NavbarBrand, NavItem, Container } from "reactstrap";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <nav class="navbar">
 <div class="logo">Home</div>
 <ul class="nav-links">
 <input type="checkbox" id="checkbox_toggle" />
 <label for="checkbox_toggle" class="hamburger">&#9776;</label>
 <div class="menu">
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
