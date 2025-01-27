import React, { useReducer, useState } from 'react';


function UserInfo({userData,setUserData,setShowUserInfo}) {
  const [tempData, setTempData] = useState({ ...userData });

  const handleChange = (e) => {
    setTempData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData(tempData)
    setShowUserInfo(false)
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-[1000]">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">User Information Form </h2>

        <h3 className="text-lg font-semibold text-gray-600 mb-3">Personal Details</h3>
        <form onSubmit={handleSave}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name='name'
            value={tempData.name}
            onChange={handleChange}
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"

          />

        </div>

        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-3">Contact Information</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email ID</label>
          <input
            type="email"
            name='email'
            value={tempData.email}
            onChange={handleChange}

            id='email'
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input
            type="number"
            name='phone'
            value={tempData.phone}
            onChange={handleChange}

            id='phone'
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <input
            type="text"
            name='address'
            value={tempData?.address}
            onChange={handleChange}

            id='address'
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-3">Basic Information</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Gender</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}

                checked={tempData?.gender === 'Male'}
                    id='gender'
                required
                className="text-blue-500 focus:ring-blue-400"
              />
              <span className="ml-2 text-gray-600">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}

                checked={tempData?.gender === 'Female'}
                    id='gender'
                required
                className="text-blue-500 focus:ring-blue-400"
              />
              <span className="ml-2 text-gray-600">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
          <input
            type="date"
            name='dob'
            value={tempData?.dob}
            onChange={handleChange}

            id='dob'
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button 
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            Save
          </button>
          <button onClick={()=>setShowUserInfo(false)}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
        </form>
      </div>

    </div>
  );
}

export default UserInfo;
