import React, { useReducer } from 'react';
function UserInfo({ onClose, onSave }) {

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'fields':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'reset':
        return {
          name: '', email: '', phone: 0, address: '', gender: '', dob: ''
        }
      default:
        throw new Error('Unknown Action Type')
    }
  }

  const initialstate = { name: '', email: '', phone: '', address: '', gender: '', dob: '' }
  const [state, dispatch] = useReducer(formReducer, initialstate);

  const handleChange = (e) => {
    dispatch({ type: 'fields', field: e.target.name, value: e.target.value })
  }


  const handleSave = (e) => {
    e.preventDefault();
    onSave(state);
    dispatch({ type: 'reset' })
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-[1000]">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">User Information Form </h2>

        <h3 className="text-lg font-semibold text-gray-600 mb-3">Personal Details</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name='name'
            value={state.name}
            onChange={handleChange}
            id="name"
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
            value={state.email}
            onChange={handleChange}
            id='email'
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input
            type="number"
            name='phone'
            value={state.phone}
            onChange={handleChange}
            id='phone'
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Address</label>
          <input
            type="text"
            name='address'
            value={state.address}
            onChange={handleChange}
            id='address'
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
                checked={state.gender === 'Male'}
                onChange={handleChange}
                id='gender'
                className="text-blue-500 focus:ring-blue-400"
              />
              <span className="ml-2 text-gray-600">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={state.gender === 'Female'}
                onChange={handleChange}
                id='gender'
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
            value={state.dob}
            onChange={handleChange}
            id='dob'
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={handleSave}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>

    </div>
  );
}

export default UserInfo;
