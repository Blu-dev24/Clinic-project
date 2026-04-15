import React from "react";
import SpecialistsImg from "../assets/SpecialistsImg.png";
import SpecialistsImg1 from "../assets/SpecialistsImg1.png";
import SpecialistsImg2 from "../assets/SpecialistsImg2.png";
import { FaQuoteLeft, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { doctors } from "../data/doctors";

const Specialists = () => {

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 inline" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400 inline" />
      )
    );
  };

  return (
    <section
      id="specialists"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <header
          data-aos="fade-up"
          className="text-center mb-16 relative"
        >
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Meet Our <span className="text-pink-600">Expert Team</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our experienced specialists provide advanced treatments with precision, care, and trust.
          </p>
        </header>

        {/* Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {doctors.map((doctor, index) => (
            <li
              key={doctor.id}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">

                <figure
                  data-aos="zoom-in"
                  data-aos-delay={index * 150 + 100}
                  className="relative h-100 overflow-hidden"
                >
                  <img
                    src={doctor.image}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></span>

                  <aside className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm">
                    {renderStars(doctor.rating)}
                    <span className="ml-1 text-sm font-medium">
                      {doctor.rating}
                    </span>
                  </aside>
                </figure>

                <div className="p-6 relative -mt-10">
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 150 + 200}
                    className="bg-pink-50 rounded-lg shadow-md p-6"
                  >

                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {doctor.name}
                    </h3>

                    <p className="text-pink-600 font-medium mb-3">
                      {doctor.role}
                    </p>

                    <p className="text-gray-600 mb-4">{doctor.bio}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                      {doctor.specialities.map((spec, i) => (
                        <li key={i}>
                          <span className="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg">
                      <FaQuoteLeft className="text-lg" />
                    </div>

                  </div>
                </div>

              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <aside
          data-aos="zoom-in"
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          >
            Ready to Consult With Our Specialists?
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600"
          >
            Book your appointment today and begin your journey to healthier, glowing skin.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Link
              to="/contact"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg"
            >
              Book Consultation
            </Link>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default Specialists;