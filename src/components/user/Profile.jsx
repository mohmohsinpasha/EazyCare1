import React, { useState } from 'react';
import UserInfo from './UserInfo';

export default function Profile() {

  const [showUserInfo,setShowUserInfo]=useState(false)

  const [userData,setUserData]=useState({
    name: 'shaiz',
    email: 'xyz@gmail.com',
    phone: '8926212528'
  })


  const handleEdit=()=>{
    setShowUserInfo(true)

  }
  return (
    <>
    {showUserInfo && <UserInfo userData={userData} setUserData={setUserData} setShowUserInfo={setShowUserInfo}/>}

    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
        {/* Profile Picture */}
        <img
          className="w-36 h-36 rounded-full mx-auto lg:mx-0 lg:w-48 lg:h-48"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="Profile"
        />

        {/* Profile Information */}
        <div className="mt-6 lg:mt-0 lg:flex-1">
          <h2 className="bg-gray-50 text-3xl font-medium text-neutral-800">{userData.name}</h2>
          <hr className="bg-zinc-400 h-[1px] border-none mt-2" />

          {/* Contact Information */}
          <h3 className="text-neutral-500 underline mt-4">CONTACT INFORMATION</h3>
          <table className="w-full text-left mt-2">
            <tbody>
              <tr>
                <th className="pr-4">Email Id:</th>
                <td>{userData.email }</td>
              </tr>
              <tr>
                <th className="pr-4">Phone:</th>
                <td>{userData.phone}</td>
              </tr>
              <tr>
                <th className="pr-4">Address: </th>
                <td>{userData?.address ? userData.address : 'no data'}</td>
              </tr>
            </tbody>
          </table>

          {/* Basic Information */}
          <h3 className="text-neutral-500 underline mt-4">BASIC INFORMATION</h3>
          <table className="w-full text-left mt-2">
            <tbody>
              <tr>
                <th className="pr-4">Gender:</th>
                <td>{userData?.gender ? userData.gender : 'no data'}</td>
              </tr>
              <tr>
                <th className="pr-4">DOB:</th>
                <td>{userData?.dob ? userData.dob : 'no data'}</td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">

            <button className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-black">
              Edit
            </button>
            <button className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-black"> </button>

            <button onClick={handleEdit} className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-gray-900 hover:bg-gray-400">
              Edit
            </button>
            <button className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-gray-900 hover:bg-gray-400">

              Save Information
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



