import { VerifiedRounded } from "@mui/icons-material";
import React from "react";

const DevOps = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Ansible</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Git/GitHub</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Apache/Nginx</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
