import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import "./CursorGlow.css"; // Import the CSS file for cursor glow
import ToggleColorMode from "./ToggleColorMode";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add event listener to track cursor movement
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    cursorGlow.style.top = `${event.pageY}px`;
    cursorGlow.style.left = `${event.pageX}px`;
    document.body.appendChild(cursorGlow);

    setTimeout(() => {
      document.body.removeChild(cursorGlow);
    }, 500);
  };

  return (
    <>
      {/* <ToggleColorMode /> */}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
