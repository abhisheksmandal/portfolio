import React from "react";
import {
  AssignmentTurnedInRounded,
  EmojiEventsRounded,
  SupportAgentRounded,
} from "@mui/icons-material";

const infoData = [
  {
    icon: <EmojiEventsRounded />,
    title: "Experience",
    subtitle: "1 Year Working",
  },
  {
    icon: <AssignmentTurnedInRounded />,
    title: "Completed",
    subtitle: "5+ Projects",
  },
  {
    icon: <SupportAgentRounded />,
    title: "Support",
    subtitle: "Online 24/7",
  },
];

const Info = () => {
  return (
    <div className="about__info grid">
      {infoData.map((item, index) => (
        <div className="about__box" key={index}>
          <span className="about__icon">{item.icon}</span>
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
