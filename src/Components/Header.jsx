import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, Container } from "reactstrap";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <Navbar className="navbar">
      <Container className="container-bar">
        <NavbarBrand className="navbar-brand">Home</NavbarBrand>
        <Nav className="nav">
          <NavItem className="nav-item">Projects</NavItem>
          <NavItem className="nav-item">Skills</NavItem>
          <NavItem className="nav-item">Resume</NavItem>
          <NavItem className="nav-item">Contact</NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
