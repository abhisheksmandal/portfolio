import { GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/abhisheksmandal/?hl=en"
        className="home__social-icon"
        target="_blank"
      >
        <Instagram />
      </a>

      <a
        href="https://twitter.com/abhisheksmandal"
        className="home__social-icon"
        target="_blank"
      >
        <X />
      </a>

      <a
        href="https://www.linkedin.com/in/abhisheksmandal/"
        className="home__social-icon"
        target="_blank"
      >
        <LinkedIn />
      </a>

      <a
        href="https://github.com/abhisheksmandal"
        className="home__social-icon"
        target="_blank"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default Social;
