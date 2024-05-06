import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ToggleColorMode from "./ToggleColorMode";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ToggleColorMode /> */}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Qualification />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
