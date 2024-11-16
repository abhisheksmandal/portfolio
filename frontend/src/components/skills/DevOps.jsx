import React from "react";
import { VerifiedRounded } from "@mui/icons-material";

const devOpsSkills = [
  { name: "Git/GitHub", level: "Intermediate" },      // Version control is foundational for DevOps.
  { name: "Docker", level: "Intermediate" },          // Containerization is central to modern DevOps workflows.
  { name: "Kubernetes", level: "Intermediate" },      // Container orchestration is in high demand.
  { name: "Linux", level: "Intermediate" },           // Essential for system administration and troubleshooting.
  { name: "Jenkins", level: "Intermediate" },         // Widely used for CI/CD pipelines.
  { name: "Ansible", level: "Intermediate" },         // Popular for configuration management and automation.
  { name: "Nginx", level: "Beginner" },               // Commonly used as a web server or reverse proxy.
  { name: "Apache/Nginx", level: "Intermediate" }     // Important for managing web servers.
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
