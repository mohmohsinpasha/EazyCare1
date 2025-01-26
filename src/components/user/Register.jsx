import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Person, Email, Lock } from "@mui/icons-material";

function Register() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isStrongPassword(formData.password)) {
      alert("password is strong you can proceed")
    } else {
      alert("Password must be strong: at least 8 characters, with uppercase, lowercase, numbers, and special characters.");
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      let response = await fetch("http://localhost:5000/api/user/register")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json()
      console.log(data)
      alert("Form submitted successfully!");
    }
    catch (error) {
      console.error(error)
      alert("there is an error")

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded-lg p-8 w-full sm:max-w-md"
      >
      
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Register
        </h2>

      
        <div>
          <label className="block text-gray-700 font-medium">First Name:</label>
          <div className="flex items-center border rounded px-3 py-2">
            <Person className="text-gray-500 mr-2" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your first name"
              required
            />
          </div>
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium">Last Name:</label>
          <div className="flex items-center border rounded px-3 py-2">
            <Person className="text-gray-500 mr-2" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium">Email:</label>
          <div className="flex items-center border rounded px-3 py-2">
            <Email className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        
        <div>
          <label className="block text-gray-700 font-medium">Password:</label>
          <div className="flex items-center border rounded px-3 py-2">
            <Lock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium">
            Confirm Password:
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <Lock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>

        <p className="ml-20"> 
  Already have an account? 
  <b className="text-blue-500">
    <Link to="/">Login</Link>
  </b>
</p>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;