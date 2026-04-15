import React from "react";
import { doctors } from "../data/doctors";

const Appointment = () => {

  const [selectedDoctor, setSelectedDoctor] = React.useState("");
  const [bookingDoctor, setBookingDoctor] = React.useState(null);
  const [date, setDate] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const filteredDoctors = selectedDoctor
    ? doctors.filter((doc) => doc.name === selectedDoctor)
    : doctors;

  return (
    <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-10 px-4">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
          Find a Doctor
        </h1>

        <div className="flex flex-col md:flex-row gap-3 justify-center mt-4">
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="border border-pink-300 bg-pink-100 text-pink-800 p-3 rounded-lg focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Doctor"
            className="w-full md:w-72 px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">

        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between"
          >

            {/* Top Section */}
            <div className="flex items-center gap-4 justify-between">
              <img
                src={doctor.image}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold text-gray-800">
                  {doctor.name}
                </h2>
                <p className="text-pink-500 text-sm">{doctor.role}</p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Availability
              </p>
              <div className="flex flex-wrap gap-2">
                {doctor.availability.map((day, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-pink-100 text-pink-600 rounded-md"
                  >
                    {day}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {doctor.timings}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4">
              <button className="text-gray-500 hover:text-pink-500 text-sm font-medium cursor-pointer">
                View Profile
              </button>

              <button
                onClick={() => setBookingDoctor(doctor)}
                className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-full transition cursor-pointer"
              >
                Book
              </button>
            </div>

          </div>
        ))}
      </div>

      {bookingDoctor && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg">

            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Book Appointment
            </h2>

            <p className="mb-3 text-sm text-gray-600">
              Doctor: <span className="font-semibold">{bookingDoctor.name}</span>
            </p>

            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-pink-300 bg-pink-50 text-pink-800 p-2 rounded-lg mb-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, ""); // allow only digits
                setPhone(value);
              }}
              className="w-full border border-pink-300 bg-pink-50 text-pink-800 p-2 rounded-lg mb-4 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setBookingDoctor(null)}
                className="text-gray-500 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  // Phone validation
                  if (phone.length !== 10) {
                    alert("Enter valid 10-digit number");
                    return;
                  }

                  // Date validation (optional but needed)
                  if (!date) {
                    alert("Select a date");
                    return;
                  }
                  setBookingDoctor(null);
                  alert("Appointment Requested!");
                }}
                className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer"
              >
                Request
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Appointment;