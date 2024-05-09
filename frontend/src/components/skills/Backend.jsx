import React from "react";
import { VerifiedRounded } from "@mui/icons-material";

const backendSkills = [
  { name: "PHP", level: "Beginner" },
  { name: "NodeJS", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "C/C++", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          {backendSkills.map((skill, index) => (
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

export default Backend;
