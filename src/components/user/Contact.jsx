import React from "react";
import image from "./contacusdoct.png";

export const Contact = () => {
  return (
    <div className="contact mt-32 px-6 md:px-20 lg:px-40 font-serif text-lg md:text-xl">
      <div className="contain  ml-32 flex flex-col md:flex-row items-center md:items-start">
        <img className="w-64 md:w-80 lg:w-96" src={image} alt="Contact Us" />
        <div className="text md:ml-12 md:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <div className="information mt-8">
            <h2 className="text-lg text-slate-700 ">OUR OFFICE</h2>
            <p className="mt-4 text-slate-700">
              54709 Willms Station Suite 350, Washington, USA
            </p>
            <p className="mt-20 text-slate-700">Tel: (415) 555‑0132</p>
            <span className="block mt-2 text-slate-700">Email: greatstackdev@gmail.com</span>
          </div>
          <div className="careers mt-16">
            <h2 className="text-lg text-slate-700 ">CAREERS AT EAZYCARE</h2>
            <p className="mt-6 text-slate-700 text-sm">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-10 border-2 px-6 md:px-10 py-3 rounded text-sm text-slate-700 hover:bg-red-300 transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
