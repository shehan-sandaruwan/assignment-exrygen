import React, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import supplyChain from "../images/supply-chain.png";

const _servicesArray = [
  {
    imagePath: supplyChain,
    title: "Web and Mobile Development",
    description:
      "Implementation of applications that provide hyper connective, intensely personalized . At...……….",
    key: 1,
    buttonBackground:
      "transparent linear-gradient(90deg, #FF8E56 0%, #CC260C 100%) 0% 0% no-repeat padding-box",
    backgroundColor: "#ECE6F6 0% 0% no-repeat padding-box",
    mouseOverColor: "#70026D",
  },
  {
    imagePath: supplyChain,
    title: "Web and Mobile Development",
    description:
      "Implementation of applications that provide hyper connective, intensely personalized . At...……….",
    key: 2,
    buttonBackground:
      "transparent linear-gradient(90deg, #A95DE7 0%, #727BF0 100%) 0% 0% no-repeat padding-box",
    backgroundColor: "#F6E9E7 0% 0% no-repeat padding-box",
    mouseOverColor: "#E33E00",
  },
  {
    imagePath: supplyChain,
    title: "Web and Mobile Development",
    description:
      "Implementation of applications that provide hyper connective, intensely personalized . At...……….",
    key: 3,
    buttonBackground:
      "transparent linear-gradient(90deg, #A95DE7 0%, #727BF0 100%) 0% 0% no-repeat padding-box",
    backgroundColor: "#ECE6F6 0% 0% no-repeat padding-box",
    mouseOverColor: "#70026D",
  },
];

const Services = () => {
  const [servicesArray, setServicesArray] = useState(_servicesArray);

  const onElementActive = (key) => {
    const newArray = servicesArray.map((service) => {
      service.ismouseOver = false;

      if (service.key === key) {
        service.ismouseOver = true;
      }

      return service;
    });

    setServicesArray(newArray);
  };

  return (
    <React.Fragment>
      <div className="services-container">
        {servicesArray.map((service) => {
          return (
            <React.Fragment key={service.key}>
              <div
                className="service-card"
                onMouseOver={() => onElementActive(service.key)}
              >
                <div className="header-text">
                  <label>Services</label>
                  <label
                    data-state={service.ismouseOver && `active-${service.key}`}
                  >
                    {service.title}
                  </label>
                </div>
                <div
                  className="middle-card"
                  data-state={service.ismouseOver && `active-${service.key}`}
                  style={{
                    background: service.backgroundColor,
                  }}
                >
                  <img src={service.imagePath} alt="service" />
                </div>
                <p>{service.description}</p>
                <label>Capabilities</label>
                <div className="services-tag">
                  <div className="tag">Business</div>
                  <div className="tag">Enterprise</div>
                </div>
                <button
                  className="learn-more"
                  style={{ background: service.buttonBackground }}
                >
                  Learn more <span>-></span>
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Services;
