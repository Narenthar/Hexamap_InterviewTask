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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTV_PPYDxzJioTwdrMEyofWO6zHlxsxpaUDMoronSlsHrrs2-r8b_Ar3VlleA1szYXasI&usqp=CAU"
              alt="MongoDB Logo"
              rounded
            />{" "}
            <div className="logo-name">mongo DB</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image
              className="logo-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43SLIumoq2cJO1B4r28AVD4T3gI-kQcvgL-IP7FP9aETpyRoTxy3tq46ENq_Xovx3T9Q&usqp=CAU"
              alt="Express Logo"
              rounded
            />{" "}
            <div className="logo-name">Express.js</div>
          </Col>
          <Col className="skill-card " xs={6} md={2}>
            <Image className="logo-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMoZruCKRSXh4t7a-doTw-eZscGJSv1b1e6y5sQ2vRWDvFglAh6eyRasxVVjm0u2EoBhs&usqp=CAU" alt="Redux Logo" rounded />{" "}
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
