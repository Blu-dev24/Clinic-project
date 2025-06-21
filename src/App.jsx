import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services"

const App = () => {

  useEffect (()=>{
    AOS.init({
      duration: 1000
    });
  },[])

  return (
   <div>
    <Header/>
    <Hero/>
    <Services/>
  </div>
  );
};

export default App;
  