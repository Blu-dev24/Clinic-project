import Contact from "./components/Contact";
import { Navigate, Route, Routes } from 'react-router-dom'
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import Footer from "./components/Footer"
import AOS from "aos";
import ScrollManager from "./components/ScrollManager";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hero" />} />
        <Route path="/hero" element={<Hero />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
