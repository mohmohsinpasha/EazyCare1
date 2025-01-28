import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "./logo23-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  fixed top-0 left-0  bg-gradient-to-r from-green-400 to-blue-500 shadow-md z-50">
      <div className="flex items-center justify-between  px-5  py-3 h-16">
        <img src={image} alt="Logo" className="w-16 md:w-20 mt-2" />

        
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-5 absolute md:static top-16 right-0 bg-blue-500 md:bg-transparent shadow-lg md:shadow-none p-5 md:p-0 w-full md:w-auto z-50`}
        >
          <Link
            to="/Home"
            className="text-white font-bold text-lg hover:scale-105 hover:underline transition"
          >
            HOME
          </Link>
          <Link to='/Alldoctors'><a
            href="#"
            className="text-white font-bold text-lg hover:scale-105 hover:underline transition"
          >
            ALLDOCTORS
          </a>
          </Link>
          <a
            href="#"
            className="text-white font-bold text-lg hover:scale-105 hover:underline transition"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-white font-bold text-lg hover:scale-105 hover:underline transition"
          >
            CONTACT
          </a>
        </div>

        <Link to="/register">
          <button className="display md:block bg-white text-blue-500 font-bold px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-white transition">
            Create Account
          </button>
        </Link>

        <IoMdMenu
          onClick={toggleMenu}
          className="text-white text-4xl cursor-pointer md:hidden"
        />
      </div>
    </div>
  );
}