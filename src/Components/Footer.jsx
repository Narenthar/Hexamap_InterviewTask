import React from "react";
import "../Styles/Footer.css"

export const Footer = () => {
const year = new Date().getFullYear();
return (
    <div className="footer-container">
    <div className="footer-card">
        <p className="footer-header">Contact me</p>
    
    <div className="footer-col">
        <div className="footer-row">
        <i className="fas fa-envelope" />
        <a className="mailid" href="mailto:narenthar31@gmail.com">narenthar31@gmail.com</a>
        </div>
        <div className="footer-row">
        <i className="fas fa-mobile" />
        <a href="tel:+919962988080">
            <p className="mobile">  (+91)9962988080</p>
          </a>
        </div>
    </div>
    <p className="footer-header">Follow me</p>
    <div className="footer-row">
        <a
        href="https://www.instagram.com/naren_thar_/"
        target="_blank"
        rel="noreferrer"
        className="footer-icon"
        >
        <i className="fab fa-instagram"></i>
        </a>
        <a
        href="https://www.linkedin.com/in/narenthar-chidambaram-22442b112/"
        target="_blank"
        rel="noreferrer"
        className="footer-icon"
        >
        <i className="fab fa-linkedin"></i>
        </a>
        <a
        href="https://github.com/Narenthar"
        target="_blank"
        rel="noreferrer"
        className="footer-icon"
        >
        <i className="fab fa-github"></i>
        </a>
    </div>
   
    <div className="copyright-card">
        <p className="copyright-text">Narenthar Chidambaram ⓒ {year}</p>
    </div>
    </div>
    </div>
);
};
