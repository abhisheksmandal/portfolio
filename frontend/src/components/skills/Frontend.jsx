import React from "react";
import { VerifiedRounded } from "@mui/icons-material";

const frontendSkills = [
  { name: "HTML", level: "Basic" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Tailwind", level: "Beginner" },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <VerifiedRounded />

              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
