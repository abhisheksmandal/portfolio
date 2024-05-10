import { ArrowRightAltRounded } from "@mui/icons-material";
import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target="_blank">
        Demo
        <span className="work__button-icon">
          <ArrowRightAltRounded />
        </span>
      </a>
    </div>
  );
};

export default WorksItems;
