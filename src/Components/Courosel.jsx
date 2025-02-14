import React from "react";
import HTML from "../Pics/html5-without-wordmark-color.svg";
import CSS from "../Pics/css-3-seeklogo.com.svg";
import JS from "../Pics/javascript-js-seeklogo.com.svg";
import Bootstrap from "../Pics/bootstrap-seeklogo.com.svg";
import Reactapp from "../Pics/react-seeklogo.com.svg";
import Typescript from "../Pics/typescript.svg";
import nodelogo from "../Pics/node-node-js-seeklogo.com.svg";
import nextjs from "../Pics/nextjs.svg";
import materialui from "../Pics/material-ui-1.svg";
import sass from "../Pics/sass.png";
import "../Styles/Courosel.css";
import { Image } from "react-bootstrap";

export const Courosel = () => {
  return (
    <div>
      <div className="courosel-parent position-relative" id="skills">
        <div className="title">
          <h1 className="position-absolute top-0 start-0 end-0  text-center mt-5 ">
            Technologies I use
          </h1>
        </div>

        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <Image
              className="logo-pic"
              src={Reactapp}
              alt="React Logo"
              rounded
            />
          </span>

          <span style={{ "--i": 2 }}>
            <Image className="logo-pic" src={Typescript} alt="Express Logo" />
          </span>

          <span style={{ "--i": 3 }}>
            <Image className="logo-pic" src={nextjs} alt="Redux Logo" rounded />
          </span>

          <span style={{ "--i": 4 }}>
            <Image className="logo-pic" src={nodelogo} alt="Node Logo" />
          </span>

          <span style={{ "--i": 5 }}>
            <Image className="logo-pic" src={JS} alt="JS Logo" rounded />
          </span>

          <span style={{ "--i": 6 }}>
            <Image
              className="logo-pic"
              src={Bootstrap}
              alt="Bootstrap Logo"
              rounded
            />
          </span>

          <span style={{ "--i": 7 }}>
            <Image className="logo-pic" src={HTML} alt="HTML Logo" rounded />
          </span>

          <span style={{ "--i": 8 }}>
            <Image className="logo-pic" src={CSS} alt="CSS Logo" rounded />
          </span>
          <span style={{ "--i": 9 }}>
            <Image className="logo-pic" src={sass} alt="MongoDB Logo" />
          </span>
          <span style={{ "--i": 10 }}>
            <Image
              className="logo-pic"
              src={materialui}
              alt="MaterialUI Logo"
              rounded
            />
          </span>
        </div>
      </div>
      <div className="devstack container my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Developement Stack</h3>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-6 column">
            <div className="font-bold">
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>Typescript</p>
              <p>React</p>
              <p>Next.js</p>
            </div>
          </div>

          <div className="col-md-6 column">
            <div className="font-bold text-center">
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Material UI</p>
              <p>Bootstrap</p>
              <p>Sass</p>
            </div>
          </div>

{/*           <div className="col-md-4 column">
            <div className="font-bold text-end">
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>Mongo DB</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
