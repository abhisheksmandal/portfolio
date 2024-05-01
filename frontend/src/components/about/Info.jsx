import {
  AssignmentTurnedInRounded,
  EmojiEventsRounded,
  SupportAgentRounded,
} from "@mui/icons-material";
import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <div className="about__icon">
          <EmojiEventsRounded />
        </div>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Years Working</span>
      </div>

      <div className="about__box">
        <AssignmentTurnedInRounded />
        <div className="about__icon"></div>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ Projects</span>
      </div>

      <div className="about__box">
        <div className="about__icon">
          <SupportAgentRounded />
        </div>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
