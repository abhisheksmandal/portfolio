import {
  ArrowCircleUpRounded,
  KeyboardDoubleArrowUpRounded,
} from "@mui/icons-material";
import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <span className="scrollup__icon">
        {/* <KeyboardDoubleArrowUpRounded /> */}
        <ArrowCircleUpRounded />
      </span>
    </a>
  );
};

export default ScrollUp;
