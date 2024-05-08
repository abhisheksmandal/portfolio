import {
  AppsRounded,
  CloseRounded,
  DescriptionRounded,
  HomeRounded,
  InfoRounded,
  MiscellaneousServicesRounded,
  PhotoRounded,
  SendRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./header.css";
import ToggleColorMode from "../../ToggleColorMode";
import { Box } from "@mui/material";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abhishek Mandal
          <ToggleColorMode />
        </a>

        <Box className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <HomeRounded />
                </div>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <InfoRounded />
                </div>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <DescriptionRounded />
                </div>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <MiscellaneousServicesRounded />
                </div>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <PhotoRounded />
                </div>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <SendRounded />
                </div>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={() => showMenu(!Toggle)}>
            <CloseRounded />
          </div>
        </Box>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AppsRounded />
        </div>
      </nav>
    </header>
  );
};

export default Header;
