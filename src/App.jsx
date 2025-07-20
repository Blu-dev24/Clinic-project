import Contact from "./components/Contact";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []); 
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Specialists />
      <Contact />
    </div>
  );
};

export default App;
