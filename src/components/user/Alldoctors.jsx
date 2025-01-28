import React, { useState } from 'react';
import image10 from '../../assets/doctor1.png';
import image11 from '../../assets/doctors2.png';
import image12 from '../../assets/doctor3.png';
import image13 from '../../assets/doctor4.png';
import image14 from '../../assets/doctor5.png';

const doctorsData = {
  General_Physician: [
    { img: image10, name: "Dr. Richard James", specialty: "General Physician" },
    { img: image11, name: "Dr. Emily Davis", specialty: "General Physician" },
    { img: image12, name: "Dr. John Doe", specialty: "General Physician" }
  ],
  Gynecologist: [
    { img: image10, name: "Dr. Sarah Johnson", specialty: "Gynecologist" },
    { img: image11, name: "Dr. Lisa Brown", specialty: "Gynecologist" },
    { img: image12, name: "Dr. Monica Green", specialty: "Gynecologist" }
  ],
  Dermatologist: [
    { img: image13, name: "Dr. Michael Scott", specialty: "Dermatologist" },
    { img: image14, name: "Dr. Angela White", specialty: "Dermatologist" },
    { img: image10, name: "Dr. Peter Parker", specialty: "Dermatologist" }
  ],
  Pediatrics: [
    { img: image12, name: "Dr. Kevin Malone", specialty: "Pediatrics" },
    { img: image13, name: "Dr. Oscar Martinez", specialty: "Pediatrics" },
    { img: image10, name: "Dr. Peter Parker", specialty: "pediatrics" }
  ],
  Neurologist: [
    { img: image14, name: "Dr. Jim Halpert", specialty: "Neurologist" },
    { img: image11, name: "Dr. Dwight Schrute", specialty: "Neurologist" },
    { img: image12, name: "Dr. Monica Green", specialty: "Neurologist" }
  ],
  Gastroenterologist: [
    { img: image10, name: "Dr. Pam Beesly", specialty: "Gastroenterologist" },
    { img: image13, name: "Dr. Stanley Hudson", specialty: "Gastroenterologist" },
    { img: image14, name: "Dr. Jim Halpert", specialty: "Gastroenterologist" },

  ]
};

export default function Alldoctors() {
  const [selectedCategory, setSelectedCategory] = useState('General_Physician');

  return (
    <div className="flex flex-col lg:flex-row p-6 mt-20">
  
      <div className="lg:w-1/4 flex flex-col space-y-4 mb-6 lg:mb-0">
        <p className="text-xl font-semibold">Browse through the doctors' specialties</p>
        {Object.keys(doctorsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-3 rounded-md text-white font-semibold ${
              selectedCategory === category ? 'bg-green-700' : 'bg-green-500'
            } hover:bg-green-600 transition-all duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="lg:w-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-16">
        {doctorsData[selectedCategory].map((doctor, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-60 object-contain" src={doctor.img} alt={doctor.name} />
            <div className="p-4 text-center">
              <h3 className="text-green-500 font-bold">Available</h3>
              <b className="block text-lg">{doctor.name}</b>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
