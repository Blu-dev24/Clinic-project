import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaClinicMedical } from "react-icons/fa";
import { MdAccessAlarm, MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="text-lg" />, label: "Facebook" },
    { icon: <FaTwitter className="text-lg" />, label: "Twitter" },
    { icon: <FaInstagram className="text-lg" />, label: "Instagram" },
    { icon: <FaLinkedin className="text-lg" />, label: "LinkedIn" },
    { icon: <FaYoutube className="text-lg" />, label: "Youtube" },
  ];

  const quickLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#about" },
    { text: "Our Services", href: "#services" },
    { text: "Our Specialists", href: "#specialists" },
    { text: "Contact Us", href: "#contact" },
    { text: "Book Appointment", href: "#appointment" },
  ];

  const contactInfo = [
    {
      icon: (
        <MdLocationOn className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          123 Beauty Avenue, Medical District, London
        </a>
      ),
    },
    {
      icon: (
        <MdPhone className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          +44 11 234 5678
        </a>
      ),
    },
    {
      icon: (
        <MdEmail className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          info@glamclin.com
        </a>
      ),
    },
    {
      icon: (
        <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a href="#" className="text-gray-400 hover:text-pink-500 transition">
          Sun-Thu: 9:00 AM - 8:00 PM, Fri: 2PM-9PM
        </a>
      ),
    },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Sitemap", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <section className="lg:col-span-2">
            <header className="flex items-center mb-6">
              <FaClinicMedical
                className="text-3xl text-pink-500 mr-3"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-bold">Glamour Clinic</h2>
            </header>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              sequi maiores molestias vitae quod, repellendus nisi officiis odio
              aliquid blanditiis?
            </p>
            <nav aria-label="Social media links">
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
            </nav>
          </section>
          <section>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
              Quick Links
            </h3>
            <nav aria-label="Quick Links">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
          <address>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  {info.content}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
