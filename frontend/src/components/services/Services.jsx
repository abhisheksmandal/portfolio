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
      title: "Front-end Development",
      description:
        "Crafting captivating user interfaces and immersive web experiences using cutting-edge technologies and design principles.",
      services: [
        "Responsive and pixel-perfect design",
        "Interactive user interface development",
        "Cross-browser and device compatibility",
        "Performance optimization for faster loading times",
      ],
      icon: <CodeRounded />,
    },
    {
      title: "Back-end Development",
      description:
        "Building powerful server-side applications and APIs to fuel your web projects with efficiency and scalability.",
      services: [
        "RESTful API design and development",
        "Database architecture and management",
        "Authentication and authorization systems",
        "Integration with third-party services and APIs",
      ],
      icon: <DataObjectRounded />,
    },
    {
      title: "DevOps Engineering",
      description:
        "Implementing robust infrastructure and automation solutions to streamline development, testing, and deployment workflows.",
      services: [
        "Continuous integration and deployment (CI/CD) pipelines",
        "Infrastructure as code (IaC) setup and management",
        "Monitoring, logging, and performance optimization",
        "Security hardening and compliance management",
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
              <h3 className="services__title">
                {service.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </h3>

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
                  <span className="services__modal-close">
                    <CloseRounded onClick={() => toggleTab(0)} />
                  </span>

                  <h3 className="services__modal-title">{service.title}</h3>
                  <p className="services__modal-description">
                    {service.description}
                  </p>

                  <ul className="services__modal-services grid">
                    {service.services.map((item, i) => (
                      <li className="services__modal-service" key={i}>
                        <span className="services__modal-icon">
                          {/* <CheckCircleRounded /> */}
                        </span>
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
