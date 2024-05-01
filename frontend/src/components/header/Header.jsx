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
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abhishek Mandal
          {/* <ToggleColorMode /> */}
        </a>

        <Box className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <HomeRounded />
                </div>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <InfoRounded />
                </div>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <DescriptionRounded />
                </div>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <MiscellaneousServicesRounded />
                </div>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                {/* <i className="uil uil- nav__icon"></i> */}
                <div className="nav__icon">
                  <PhotoRounded />
                </div>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
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
