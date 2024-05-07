import { ArrowRightAltRounded } from "@mui/icons-material";
import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo
        <div className="work__button-icon">
          <ArrowRightAltRounded />
        </div>
      </a>
    </div>
  );
};

export default WorksItems;
