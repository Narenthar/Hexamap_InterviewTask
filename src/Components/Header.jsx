import React from "react";
import "../Styles/Header.css";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      expand="lg"
      variant="dark"
      className="navbar"
    >
      <Container>
        <Navbar.Brand>
          <div className="logo">
            <Link to="about" smooth={true} offset={-70} duration={500}>
              <i className="fa fa-home"></i>
            </Link>
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="skills" smooth={true} offset={-70} duration={500}>
              <Nav.Link eventKey="2">
                <span className="nav-name">Skills</span>
              </Nav.Link>
            </Link>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <Nav.Link eventKey="1">
                <span className="nav-name">Projects</span>
              </Nav.Link>
            </Link>
            <a href="/">
              <Nav.Link eventKey="3">
                <span
                  className="nav-name"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1n_C4SMD7TnuOsFx2i2yyIXt7EGYD93mR/view",
                      "_blank"
                    )
                  }
                >
                  Resume
                </span>
              </Nav.Link>
            </a>
            <Link to="footer" smooth={true} offset={80} duration={500}>
              <Nav.Link eventKey="4">
                <span className="nav-name">Contact</span>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
