import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaClinicMedical,
} from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdAccessTime,
} from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaLinkedin />, label: "LinkedIn" },
    { icon: <FaYoutube />, label: "YouTube" },
  ];

  const quickLinks = [
    { text: "Home", path: "/hero" },
    { text: "Services", path: "/services" },
    { text: "About Us", path: "/about" },
    { text: "Specialists", path: "/specialists" },
    { text: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About */}
          <section className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <FaClinicMedical className="text-3xl text-pink-500 mr-3" />
              <h2 className="text-2xl font-bold">Glamour Clinic</h2>
            </div>

            <p className="text-gray-400 mb-6">
              Delivering advanced skincare treatments with expert care and precision, our approach is centered on achieving long-lasting, natural-looking results that enhance your unique features.
            </p>

            <ul className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-500 transition"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-pink-500 inline-block pb-1">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-pink-500 inline-block pb-1">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex items-start">
                <MdLocationOn className="text-pink-500 text-xl mr-3 mt-1" />
                <span>123 Beauty Avenue, Medical District, London</span>
              </li>

              <li className="flex items-start">
                <MdPhone className="text-pink-500 text-xl mr-3 mt-1" />
                <span>+44 11 234 5678</span>
              </li>

              <li className="flex items-start">
                <MdEmail className="text-pink-500 text-xl mr-3 mt-1" />
                <span>info@glamclin.com</span>
              </li>

              <li className="flex items-start">
                <MdAccessTime className="text-pink-500 text-xl mr-3 mt-1" />
                <span>Sun-Thu: 9AM-8PM, Fri: 2PM-9PM</span>
              </li>

            </ul>
          </section>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Glamour Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;