import React from 'react';

export default function Profile({handleEdit, data}) {
  const userdata = {
    name: 'shaiz',
    email: 'xyz@gmail.com',
    phone: '8926212528'
  }
  return (
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
          <h2 className="bg-gray-50 text-3xl font-medium text-neutral-800">{userdata.name}</h2>
          <hr className="bg-zinc-400 h-[1px] border-none mt-2" />

          {/* Contact Information */}
          <h3 className="text-neutral-500 underline mt-4">CONTACT INFORMATION</h3>
          <table className="w-full text-left mt-2">
            <tbody>
              <tr>
                <th className="pr-4">Email Id:</th>
                <td>{userdata.email }</td>
              </tr>
              <tr>
                <th className="pr-4">Phone:</th>
                <td>{userdata.phone}</td>
              </tr>
              <tr>
                <th className="pr-4">Address:</th>
                <td>{data.address}</td>
              </tr>
            </tbody>
          </table>

          {/* Basic Information */}
          <h3 className="text-neutral-500 underline mt-4">BASIC INFORMATION</h3>
          <table className="w-full text-left mt-2">
            <tbody>
              <tr>
                <th className="pr-4">Gender:</th>
                <td>{data.gender}</td>
              </tr>
              <tr>
                <th className="pr-4">DOB:</th>
                <td>{data.dob}</td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button onClick={handleEdit} className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white">
              Edit
            </button>
            <button className="border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white">
              Save Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';

// export default function Profile() {
//   const [profileData, setProfileData] = useState({
//     image: "",
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     gender: "",
//     dob: "",
//   });

//   // Simulate fetching data
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = {
//         image: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
//         name: "Mohsin",
//         email: "xyz@gmail.com",
//         phone: "+999999999",
//         address: "###",
//         gender: "Male",
//         dob: "25 Dec 2001",
//       };
//       setProfileData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
//         <img
//           className="w-36 h-36 rounded-full mx-auto lg:mx-0 lg:w-48 lg:h-48"
//           src={profileData.image}
//           alt="Profile"
//         />
//         <div className="mt-6 lg:mt-0 lg:flex-1">
//           <h2 className="bg-gray-50 text-3xl font-medium text-neutral-800">{profileData.name}</h2>
//           <hr className="bg-zinc-400 h-[1px] border-none mt-2" />
//           <h3 className="text-neutral-500 underline mt-4">CONTACT INFORMATION</h3>
//           <table className="w-full text-left mt-2">
//             <tbody>
//               <tr>
//                 <th className="pr-4">Email Id:</th>
//                 <td>{profileData.email}</td>
//               </tr>
//               <tr>
//                 <th className="pr-4">Phone:</th>
//                 <td>{profileData.phone}</td>
//               </tr>
//               <tr>
//                 <th className="pr-4">Address:</th>
//                 <td>{profileData.address}</td>
//               </tr>
//             </tbody>
//           </table>
//           <h3 className="text-neutral-500 underline mt-4">BASIC INFORMATION</h3>
//           <table className="w-full text-left mt-2">
//             <tbody>
//               <tr>
//                 <th className="pr-4">Gender:</th>
//                 <td>{profileData.gender}</td>
//               </tr>
//               <tr>
//                 <th className="pr-4">DOB:</th>
//                 <td>{profileData.dob}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
