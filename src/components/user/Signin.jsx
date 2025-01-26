
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Signin() {
const [formData,setFormData]=useState({
email:"",
Password:"",

})
 const handleChange=(e)=>{
const {name,value}=e.target
setFormData((prev)=>({...prev,[name]:value}));
 }
  const handleSumbit=async(e) =>{
    e.preventDefault();
    try{
      let response=await fetch("http://localhost:5000/api/user/login")
      let data=await response.json()
      console.log(data)
    }
    catch(error){
      console.log(error)
      alert("there is an error")
    }
  }
  return (
    <div className="p-6 md:p-10 flex h-screen items-center justify-center bg-gray-50">
      <div className="p-4 md:p-6 h-auto md:h-[30em] w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl border border-black shadow-lg bg-slate-100 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">Login</h1>
          <p className="my-4 text-sm md:text-base text-center">
            Please login to book an appointment
          </p>

        <form onSubmit={handleSumbit}>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="block h-10 w-full mt-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
            name="email"
            onChange={ handleChange}
            value={formData.email}
            placeholder="Enter your email"
          />

        
          <label className="block mt-4 text-sm font-medium">Password</label>
          <input
            className="block h-10 w-full mt-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="Password"
            placeholder="Enter your password"
            value={formData.Password}
            onChange={ handleChange}
            required
          />

        
          <button className="h-10 w-full mt-6 rounded-md bg-blue-500 text-white text-sm md:text-base font-medium hover:bg-blue-600 transition">
            Login
          </button>

          </form>
          <p className="mt-6 text-sm md:text-base text-center">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
            <Link to="/register"> Sign up here</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
