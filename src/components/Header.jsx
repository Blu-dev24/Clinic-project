import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 rounded"
        >
          Glamour Clinic
        </Link>

        {/* Desktop Nav (md and above) */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/hero" className="navbarlinks">Home</Link>
          <Link to="/services" className="navbarlinks">Services</Link>
          <Link to="/about" className="navbarlinks">About Us</Link>
          <Link to="/specialists" className="navbarlinks">Our Specialities</Link>
          <Link to="/contact" className="navbarlinks">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <aside className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4">
            <nav className="flex flex-col space-y-4 justify-center items-center">
              <Link to="/hero" className="navbarlinks" onClick={toggleMenu}>Home</Link>
              <Link to="/services" className="navbarlinks" onClick={toggleMenu}>Services</Link>
              <Link to="/about" className="navbarlinks" onClick={toggleMenu}>About Us</Link>
              <Link to="/specialists" className="navbarlinks" onClick={toggleMenu}>Our Specialities</Link>
              <Link to="/contact" className="navbarlinks" onClick={toggleMenu}>Contact</Link>
            </nav>
          </aside>
        )}

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800"
        >
          Book Appointment
        </Link>

      </div>
    </header>
  );
};

export default Header;