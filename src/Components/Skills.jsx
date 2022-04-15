import React from "react";
import {Container, Row, Col, Image } from "react-bootstrap";
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


import "../Styles/Skills.css"

export const Skills = () => {
  return (
    <div>
      <div>
        <p>Skills</p>
      </div>
      <Container className="skill-card">
        <Row >
          <Col className="skill-card offset-md-1" xs={5} md={2}>
            <Image className="logo-pic" src={HTML} alt="HTML Logo" rounded /> <div>HTML 5</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={CSS} alt="CSS Logo" rounded /> <div>CSS 3</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={JS} alt="JS Logo" rounded /> <div>Javascript</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={Reactapp} alt="React Logo" rounded /> <div>React</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={nodelogo} alt="Node Logo" rounded /> <div>Node JS</div>
          </Col>
          <Col className="skill-card offset-md-1" xs={5} md={2}>
            <Image className="logo-pic" src={mongodb} alt="MongoDB Logo" rounded />{" "}
            <div>mongo DB</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={expresslogo} alt="Express Logo" rounded />{" "}
            <div>Express.js</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={Redux} alt="Redux Logo" rounded /> <div>Redux</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={Bootstrap} alt="Bootstrap Logo" rounded />{" "}
            <div>Bootstrap</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={materialui} alt="MaterialUI Logo" rounded />{" "}
            <div>Material UI</div>
          </Col>
          {/* <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={mysql} alt="MySQL Logo" rounded />{" "}
            <div>My SQL</div>
          </Col>
          <Col className="skill-card" xs={5} md={2}>
            <Image className="logo-pic" src={materialui} alt="MaterialUI Logo" rounded />{" "}
            <div>Material UI</div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
