import React from "react";
import "./footer.css";
import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Abhishek Mandal</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/abhisheksmandal/?hl=en"
            className="home__social-icon"
            target="_blank"
          >
            <Instagram />
          </a>

          <a
            href="https://twitter.com/abhisheksmandal"
            className="home__social-icon"
            target="_blank"
          >
            <X />
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-mandal-44b578216/"
            className="home__social-icon"
            target="_blank"
          >
            <LinkedIn />
          </a>

          <a
            href="https://github.com/abhisheksmandal"
            className="home__social-icon"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Abhishek Mandal. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
