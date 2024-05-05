import React, { useState } from "react";
import {
  AllInclusiveRounded,
  ArrowRightRounded,
  CheckCircleRounded,
  CloseRounded,
  CodeRounded,
  DataObjectRounded,
} from "@mui/icons-material";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const servicesData = [
    {
      title: "Frontend Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati iure suscipit explicabo commodi dolores temporibus eveniet adipisci laboriosam architecto quas deserunt minima, ab maxime numquam eligendi, dolorum laudantium rem.",
      services: [
        "I develop user interface.",
        "Web page development.",
        "Server Management",
        "This is just a test Drive",
      ],
      icon: <CodeRounded />,
    },
    {
      title: "Backend Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati iure suscipit explicabo commodi dolores temporibus eveniet adipisci laboriosam architecto quas deserunt minima, ab maxime numquam eligendi, dolorum laudantium rem.",
      services: [
        "I develop user interface.",
        "Web page development.",
        "Server Management",
        "This is just a test Drive",
      ],
      icon: <DataObjectRounded />,
    },
    {
      title: "DevOps Engineering",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati iure suscipit explicabo commodi dolores temporibus eveniet adipisci laboriosam architecto quas deserunt minima, ab maxime numquam eligendi, dolorum laudantium rem.",
      services: [
        "I develop user interface.",
        "Web page development.",
        "Server Management",
        "This is just a test Drive",
      ],
      icon: <AllInclusiveRounded />,
    },
    // Add more service objects as needed
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__title">{service.title}</h3>

              <span
                className="services__button"
                onClick={() => toggleTab(index + 1)}
              >
                View More
                <span className="services__button-icon">
                  <ArrowRightRounded />
                </span>
              </span>

              <div
                className={
                  toggleState === index + 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <div className="services__modal-close">
                    <CloseRounded onClick={() => toggleTab(0)} />
                  </div>

                  <h3 className="services__modal-title">{service.title}</h3>
                  <p className="services__modal-description">
                    {service.description}
                  </p>

                  <ul className="services__modal-services grid">
                    {service.services.map((item, i) => (
                      <li className="services__modal-service" key={i}>
                        <div className="services__modal-icon">
                          <CheckCircleRounded />
                        </div>
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
