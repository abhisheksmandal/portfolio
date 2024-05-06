import React from "react";
import "./footer.css";
import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Abhishek</h1>

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
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="#instagram" className="home__social-icon" target="_blank">
            <Instagram />
          </a>

          <a href="#twitter" className="home__social-icon" target="_blank">
            <X />
          </a>

          <a href="#linkedin" className="home__social-icon" target="_blank">
            <LinkedIn />
          </a>

          <a href="#github" className="home__social-icon" target="_blank">
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
