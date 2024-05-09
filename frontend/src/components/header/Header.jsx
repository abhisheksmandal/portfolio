import React, { useState, useEffect, useRef } from "react";
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
import "./header.css";
import ToggleColorMode from "../../ToggleColorMode";
import { Box } from "@mui/material";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abhishek Mandal
          <ToggleColorMode />
        </a>

        <Box
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
          ref={navRef}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <div className="nav__icon">
                  <HomeRounded />
                </div>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <div className="nav__icon">
                  <InfoRounded />
                </div>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <DescriptionRounded />
                </div>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <MiscellaneousServicesRounded />
                </div>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <div className="nav__icon">
                  <PhotoRounded />
                </div>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
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
