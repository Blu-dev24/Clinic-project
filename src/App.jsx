import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Specialists from "./components/Specialists";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import ScrollManager from "./components/ScrollManager";
import Appointment from "./pages/Appointment";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/hero" />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment/>} />
        
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
