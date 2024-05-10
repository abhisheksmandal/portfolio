import React, { useState } from "react";
import "./qualification.css";
import {
  CalendarMonthRounded,
  SchoolRounded,
  WorkRounded,
} from "@mui/icons-material";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <span className="qualification__icon">
              <SchoolRounded />
            </span>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <span className="qualification__icon">
              <WorkRounded />
            </span>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior DevOps System Administrator
                </h3>
                <span className="qualification__subtitle">
                  Sapna Technologies
                </span>
                <div className="qualification__calender">
                  <CalendarMonthRounded /> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Help Desk Engineer</h3>
                <span className="qualification__subtitle">
                  Microsense Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <CalendarMonthRounded /> 2020 - 2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  DevOps System Administrator
                </h3>
                <span className="qualification__subtitle">
                  Sapna Technologies
                </span>
                <div className="qualification__calender">
                  <CalendarMonthRounded /> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SuperHero</h3>
                <span className="qualification__subtitle">
                  Microsense Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <CalendarMonthRounded /> 2020 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
