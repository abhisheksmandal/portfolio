import { VerifiedRounded } from "@mui/icons-material";
import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">C/C++</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <VerifiedRounded />

            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
