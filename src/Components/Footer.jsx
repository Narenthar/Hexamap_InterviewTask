import React from "react";

export const Footer = () => {
const year = new Date().getFullYear();
return (
    <div>
    <div>
        <p>Contact me</p>
    </div>
    <div>
        <div>
        <i className="fas fa-envelope" />
        <a href="mailto:narenthar31@gmail.com">narenthar31@gmail.com</a>
        </div>
        <div>
        <i className="fas fa-mobile" />
        <a href="tel:+919962988080">
            <p>  (+91)9962988080</p>
          </a>
        </div>
    </div>
    <p>Follow me</p>
    <div>
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
    <div>
        <p>Narenthar Chidambaram ⓒ {year}</p>
    </div>
    </div>
);
};
