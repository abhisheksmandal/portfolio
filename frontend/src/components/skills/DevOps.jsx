import React from "react";
import { VerifiedRounded } from "@mui/icons-material";

const devOpsSkills = [
  { name: "Linux", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Ansible", level: "Intermediate" },
  { name: "Git/GitHub", level: "Intermediate" },
  { name: "Apache/Nginx", level: "Intermediate" },
];

const DevOps = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps</h3>

      <div className="skills__box">
        <div className="skills__group">
          {devOpsSkills.map((skill, index) => (
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

export default DevOps;
