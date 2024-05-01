import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a href="#instagram" className="home__social-icon" target="_blank">
        <Instagram />
      </a>

      <a href="#twitter" className="home__social-icon" target="_blank">
        <X />
      </a>

      <a href="#linkedin" className="home__social-icon" target="_blank">
        <LinkedIn />
      </a>

      <a href="#github" className="home__social-icon" target="_blank">
        <GitHub />
      </a>
    </div>
  );
};

export default Social;
