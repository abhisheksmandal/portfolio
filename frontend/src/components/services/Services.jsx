import {
  ArrowRightRounded,
  CheckCircleRounded,
  CloseRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index === toggleState ? 0 : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <div className="services__icon">icon</div>
            <h3 className="services__title">
              Frontend
              <br />
              Development
            </h3>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <span className="services__button-icon">
                <ArrowRightRounded />
              </span>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <div className="services__modal-close">
                  <CloseRounded onClick={() => toggleTab(0)} />
                </div>

                <h3 className="services__modal-title">Single Page Design</h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae obcaecati iure suscipit explicabo commodi dolores
                  temporibus eveniet adipisci laboriosam architecto quas
                  deserunt minima, ab maxime numquam eligendi, dolorum
                  laudantium rem.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      I develop user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">Server Management</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <div className="services__icon">icon</div>
            <h3 className="services__title">
              Frontend
              <br />
              Development
            </h3>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <span className="services__button-icon">
                <ArrowRightRounded />
              </span>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <div className="services__modal-close">
                  <CloseRounded onClick={() => toggleTab(0)} />
                </div>

                <h3 className="services__modal-title">Single Page Design</h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae obcaecati iure suscipit explicabo commodi dolores
                  temporibus eveniet adipisci laboriosam architecto quas
                  deserunt minima, ab maxime numquam eligendi, dolorum
                  laudantium rem.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      I develop user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">Server Management</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <div className="services__icon">icon</div>
            <h3 className="services__title">
              Frontend
              <br />
              Development
            </h3>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <span className="services__button-icon">
                <ArrowRightRounded />
              </span>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <div className="services__modal-close">
                  <CloseRounded onClick={() => toggleTab(0)} />
                </div>

                <h3 className="services__modal-title">Single Page Design</h3>
                <p className="services__modal-description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae obcaecati iure suscipit explicabo commodi dolores
                  temporibus eveniet adipisci laboriosam architecto quas
                  deserunt minima, ab maxime numquam eligendi, dolorum
                  laudantium rem.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      I develop user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <div className="services__modal-icon">
                      <CheckCircleRounded />
                    </div>
                    <p className="services__modal-info">Server Management</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
