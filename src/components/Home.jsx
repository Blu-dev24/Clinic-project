import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Specialists from "./Specialists";
import AOS from "aos";

function Home() {
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
    </div>
  );
}

export default Home;
