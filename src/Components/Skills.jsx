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
              src="data:image/png;base64,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"
              alt="MongoDB Logo"
              rounded
            />{" "}
            <div className="logo-name">mongo DB</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src="data:image/png;base64,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"
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
