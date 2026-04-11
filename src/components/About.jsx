import { FaAward, FaClinicMedical, FaUserMd, FaHeart } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";

const About = () => {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
      icon: <FaAward className="text-pink-500" />,
    },
    {
      value: "2500+",
      label: "Happy Clients",
      icon: <FaHeart className="text-pink-500" />,
    },
    {
      value: "15+",
      label: "Expert Doctors",
      icon: <FaUserMd className="text-pink-500" />,
    },
    {
      value: "10+",
      label: "Specialized Treatments",
      icon: <FaClinicMedical className="text-pink-500" />,
    },
  ];

  const approchItems = [
    {
      icon: <FaHeart className="text-pink-600" />,
      text: "We create personalized skincare plans tailored to each client's unique needs.",
    },
    {
      icon: <FaUserMd className="text-pink-600" />,
      text: "Our certified specialists use advanced techniques for safe effective skin treatments.",
    },
    {
      icon: <FaClinicMedical className="text-pink-600" />,
      text: "We combine modern technology with care to deliver consistent long lasting results.",
    },
  ];

  return (
    <section
      id="about"
      className="py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4 flex flex-col">
        <article className="flex lg:flex-row flex-col items-center gap-12">

          {/* Image */}
          <figure className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
              <img
                src={aboutImage}
                className="w-full h-125 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <aside className="absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20 flex flex-col">
              <strong className="text-2xl font-bold text-pink-600">10+</strong>
              <small className="text-xs font-medium text-gray-600">
                Years Experience
              </small>
            </aside>
          </figure>

          {/* Content */}
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-pink-600">Glamour Clinic</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              At Glamour Clinic, we are dedicated to enhancing your natural beauty through advanced skincare treatments and personalized care. Our team of experienced professionals combines modern technology with a client-first approach to deliver safe, effective, and result-driven solutions.
            </p>

            {/* Approach */}
            <div className="m-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Approach
              </h3>

              <ul className="space-y-3">
                {approchItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-pink-100 p-1 rounded-full mr-3">
                      {item.icon}
                    </span>
                    <p className="text-gray-700">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                >
                  <span className="mr-3">{item.icon}</span>
                  <div>
                    <strong className="text-xl font-bold text-gray-800">
                      {item.value}
                    </strong>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800"
            >
              Meet Our Specialists
            </a>
          </div>
        </article>

        {/* Mission */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Our Mission
          </h3>

          <p className="text-lg text-gray-700 mb-6">
            Our mission at Glamour Clinic is to deliver high-quality, result-driven skincare treatments that enhance natural beauty while maintaining the highest standards of safety and care. We aim to build trust, confidence, and long-term relationships with every client we serve.
          </p>

          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
              <FaUserMd className="text-pink-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Dr. Sarah Johnson
              </p>
              <p>Medical Director & Founder</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;