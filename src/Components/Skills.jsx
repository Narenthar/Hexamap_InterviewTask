import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HTML from "../Pics/html5-without-wordmark-color.svg";
import CSS from "../Pics/css-3-seeklogo.com.svg";
import JS from "../Pics/javascript-js-seeklogo.com.svg";
import Bootstrap from "../Pics/bootstrap-seeklogo.com.svg";
import Reactapp from "../Pics/react-seeklogo.com.svg";
import Redux from "../Pics/redux.svg";
import nodelogo from "../Pics/node-node-js-seeklogo.com.svg";
import expresslogo from "../Pics/express.png";
import materialui from "../Pics/material-ui-1.svg";
import mongodb from "../Pics/mongodb-icon-1.svg";

import "../Styles/Skills.css";

export const Skills = () => {
  return (
    <div className="skills-head" id="skills">
      <div>
        <p className="skills-title">Skills</p>
      </div>
      <Container className="skill-card">
        <Row>
          <Col className="skill-card  offset-md-1" xs={6} md={2}>
            <Image className="logo-pic" src={HTML} alt="HTML Logo" rounded />{" "}
            <div className="logo-name">HTML 5</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image className="logo-pic" src={CSS} alt="CSS Logo" rounded />{" "}
            <div className="logo-name">CSS 3</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image className="logo-pic" src={JS} alt="JS Logo" rounded />{" "}
            <div className="logo-name">Javascript</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src={Reactapp}
              alt="React Logo"
              rounded
            />{" "}
            <div className="logo-name">React</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src={nodelogo}
              alt="Node Logo"
              rounded
            />{" "}
            <div className="logo-name">Node JS</div>
          </Col>
          <Col className="skill-card  offset-md-1" xs={6} md={2}>
            <Image
              className="logo-pic"
              src={mongodb}
              alt="MongoDB Logo"
              rounded
            />{" "}
            <div className="logo-name">mongo DB</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src={expresslogo}
              alt="Express Logo"
              rounded
            />{" "}
            <div className="logo-name">Express.js</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image className="logo-pic" src={Redux} alt="Redux Logo" rounded />{" "}
            <div className="logo-name">Redux</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src={Bootstrap}
              alt="Bootstrap Logo"
              rounded
            />{" "}
            <div className="logo-name">Bootstrap</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src={materialui}
              alt="MaterialUI Logo"
              rounded
            />{" "}
            <div className="logo-name">Material UI</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
