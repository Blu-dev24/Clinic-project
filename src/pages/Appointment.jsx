import React from 'react'
import SpecialistsImg from "../assets/SpecialistsImg.png";
import SpecialistsImg1 from "../assets/SpecialistsImg1.png";
import SpecialistsImg2 from "../assets/SpecialistsImg2.png";

const appointment = () => {

  const specialists = [
    {
      id: 1,
      name: "Dr. Anne Johnson",
      role: "Plastic Surgeon",
      image: SpecialistsImg,
      bio: "Expert in facial enhancements delivering natural and refined aesthetic results.",
      rating: 5,
      Availability: ["MON", "WED", "FRI"],
      specialities: ["Facelifts", "Rhinoplasty", "Blepharoplasty"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Dermatologist",
      image: SpecialistsImg1,
      bio: "Specializes in advanced skin treatments for healthy, clear, and glowing skin.",
      rating: 4,
      Availability: ["MON", "WED", "FRI"],
      specialities: ["Laser Treatments", "Botox", "Fillers"],
    },
    {
      id: 3,
      name: "Dr. Alena Rodriguez",
      role: "Aesthetic Physician",
      image: SpecialistsImg2,
      bio: "Focused on non-invasive procedures for youthful and long-lasting skin results.",
      rating: 5,
      Availability: ["MON", "WED", "FRI"],
      specialities: ["Cool Sculpting", "Ultherapy", "Thread Lifts"],
    },
  ];

  return (
    <section className='relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100 h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <div className='h-[150px] text-4xl font-bold'>Find a Doctor</div>
        {specialists.map((doctor, index) => (
          <div className='h-auto w-[600px] p-5 list-none'>
            <li className='m-2'>
              <div>
                <div className='flex justify-between gap-8'>
                  <div className='flex items-center gap-2'>
                    <img src={doctor.image} alt="" className='h-15 w-15 rounded-full overflow-hidden' />
                    <div>
                      <h2 className='font-bold'>{doctor.name}</h2>
                      <p className='text-[#e60278]'>{doctor.role}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-center '>
                    <h2 className='font-bold'>OPD Schedule</h2>
                    <p className="flex gap-2">
                      {doctor.Availability.map((day, index) => (
                        <span key={index} className="px-2 py-1 bg-transparent text-[#606878] rounded-md text-sm">
                          {day}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </li>
            <hr className='border-gray-400' />
            <div className='flex justify-between items-center h-10 px-4 mt-2'>
              <h2>View Profile</h2>
              <button className='rounded-2xl bg-pink-500 p-2 mt-1 cursor-pointer'>Book a Visit</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default appointment
