import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import DevOps from "./DevOps";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container grid">
        <Frontend />
        <Backend />
        <DevOps />
      </div>
    </section>
  );
};

export default Skills;
