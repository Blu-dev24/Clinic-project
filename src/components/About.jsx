import { FaAward, FaClinicMedical, FaUserMd, FaHeart } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";
import doctor from "../assets/doctor.jpg";

const About = () => {
  const stats = [
    { value: "10+", label: "Years Experience", icon: <FaAward className="text-pink-500" /> },
    { value: "2500+", label: "Happy Clients", icon: <FaHeart className="text-pink-500" /> },
    { value: "15+", label: "Expert Doctors", icon: <FaUserMd className="text-pink-500" /> },
    { value: "10+", label: "Specialized Treatments", icon: <FaClinicMedical className="text-pink-500" /> },
  ];

  const approchItems = [
    { icon: <FaHeart className="text-pink-600" />, text: "Personalized skincare plans tailored to each client." },
    { icon: <FaUserMd className="text-pink-600" />, text: "Advanced techniques for safe and effective treatments." },
    { icon: <FaClinicMedical className="text-pink-600" />, text: "Modern technology with long-lasting results." },
  ];

  return (
    <section className="py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 flex flex-col">

        <article className="flex lg:flex-row flex-col items-center gap-12">

          {/* Image */}
          <figure data-aos="fade-right" className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
              <img src={aboutImage} className="w-full h-125 object-cover rounded-xl" />
            </div>
          </figure>

          {/* Content */}
          <div className="lg:w-7/12">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-pink-600">Glamour Clinic</span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100" className="text-lg mb-6">
              At Glamour Clinic, we enhance natural beauty through advanced skincare and personalized care.
            </p>

            {/* Approach */}
            <ul className="space-y-3 mb-8">
              {approchItems.map((item, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="flex items-center"
                >
                  <span className="bg-pink-100 p-1 rounded-full mr-3">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center"
                >
                  {item.icon}
                  <div className="ml-3">
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Mission */}
        <div data-aos="fade-up" className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="mb-6">
            Deliver high-quality skincare treatments with safety and trust.
          </p>

          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 overflow-hidden mr-4">
              <img src={doctor} />
            </div>
            <div>
              <p className="font-semibold">Dr. Sarah Johnson</p>
              <p>Medical Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;