import React, { useState } from "react";
import image16 from '../../assets/doctor2-removebg-preview.png';
import image from './logo23-removebg-preview.png';
import image4 from '../../assets/special1.png';
import image5 from '../../assets/gyno.png';
import image6 from '../../assets/dermo.png';
import image7 from '../../assets/ped.png';
import image8 from '../../assets/nero.png';
import image9 from '../../assets/gas.png';
import image10 from '../../assets/doctor1.png';
import image11 from '../../assets/doctors2.png';
import image12 from '../../assets/doctor3.png';
import image13 from '../../assets/doctor4.png';
import image14 from '../../assets/doctor5.png';
import image15 from '../../assets/sister.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const [moreopen,setmoreopen]=useState(false)
 const handleopen=()=>{
  setmoreopen(true)
 }
  return (
    <div className="bg-gray-50">
  
      <div className="relative top-20  bg-gradient-to-r from-green-400 to-blue-500 text-white flex flex-col md:flex-row items-center py-10 px-5 md:px-20">
        <img className="w-64 md:w-2/3 relative right-24" src={image16} alt="home" />
        <div className="md:ml-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Appointment With Trusted Doctors</h1>
          <p className="text-lg md:text-xl mb-6">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
          <button className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg flex items-center hover:bg-cyan-400 hover:text-white transition">
            Book Appointment <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      <div className=" relative top-20 py-10  px-5 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">Find by Speciality</h2>
          <p className="text-gray-600 mt-2">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {[{ img: image4, name: "General Physician" }, { img: image5, name: "Gynecologist" }, { img: image6, name: "Dermatologist" }, { img: image7, name: "Pediatricians" }, { img: image8, name: "Neurologist" }, { img: image9, name: "Gastroenterologist" }].map((specialty, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img className="w-24 h-24 mb-4 hover:scale-90 rounded-full" src={specialty.img} alt={specialty.name} />
              <p className="text-lg font-bold text-gray-700">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className=" relative top-20 py-10 px-5 md:px-20 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">Top Doctors To Book</h2>
          <p className="text-gray-600 mt-2">Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[image10, image11, image12, image13, image14, image13, image13, image13].map((img, index) => (
            <div key={index} className="bg-white  shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-contain" src={img} alt={`Doctor ${index + 1}`} />
              <div className="p-4 text-center">
                <h3 className="text-green-500 font-bold">Available</h3>
                <b className="block text-lg">Dr. {index % 2 === 0 ? "Richard James" : "Emily Davis"}</b>
                <p className="text-gray-600">General Specialist</p>
              </div>
              
            </div>
          ))}
        </div>
        <div className={`${
            moreopen ? "block" : "hidden"
          }  grid grid-cols-1 mt-7 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
          {[image10, image11, image12, image13, image14, image13, image13, image13].map((img, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48 object-contain" src={img} alt={`Doctor ${index + 1}`} />
              <div className="p-4 text-center">
                <h3 className="text-green-500 font-bold">Available</h3>
                <b className="block text-lg">Dr. {index % 2 === 0 ? "Richard James" : "Emily Davis"}</b>
                <p className="text-gray-600">General Specialist</p>
              </div>
            </div>
          ))}
          
          
        </div>
        <button onClick={handleopen} className="mt-6 mx-auto block bg-blue-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition">More</button>
      </div>

    
      <div className="relative top-20 bg-gradient-to-r from-blue-500 mt-6 to-cyan-500 text-white py-10 px-5 md:px-20 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Appointment With 100+ Trusted Doctors</h1>
          <Link to="/register">
            <button className="bg-white text-blue-500 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition relative top-4">Create Account</button>
          </Link>
        </div>
        <img className="w-96 md:w-96 mt-6 md:mt-0 " src={image15} alt="Create Account" />
      </div>

    
      <div className=" relative top-20 bg-gray-900 mt-6 text-white py-10 px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center relative top-0 right-9">
          <div className="mb-6 md:mb-0">
            <img src={image} className="w-20 mb-4 ml-64 md:relative left-52" alt="Logo" />
            <p className="text-gray-400 w-21  font-thin text-xs  text-center relative right-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <ul className="text-gray-400 ">
              <b className="text-white">COMPANY</b>
              <li className="mt-2"><Link to="/Home">Home</Link></li>
              <li className="mt-2">All Doctors</li>
              <li className="mt-2">About Us</li>
              <li className="mt-2">Contact Us</li>
              <li className="mt-2">Privacy Policy</li>
            </ul>
            <ul className="text-gray-400 ">
              <b className="text-white">GET IN TOUCH</b>
              <li className="mt-2">+1-212-456-7890</li>
              <li className="mt-2">v@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}