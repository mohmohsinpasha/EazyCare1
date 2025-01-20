// import React from 'react'
// function Signin() {
//   return (
//     <div className='p-10 flex h-[100vh]  items-center justify-center '>
//       <div className='p-1 h-[30em] md:w-full lg:w-[28em] rounded-2xl border-black shadow-2xl shadow-gray-700 border-2 border-collapse border-solid bg-slate-100 flex justify-center items-center '>
//         <div className='h-[25em] w-80   bg-slate-100 '>
//           <h1 className='text-4xl'>Login</h1>
//           <p className='my-4'>Please Login to book appointment</p>

//           <label className='block'>Email</label>
//           <input className='block h-[2em] w-full mt-[1em]' type="email" />
//           <label className='block mt-3'>Password</label>
//           <input className='block h-[2em] w-full mt-[1em]' type="password" />
//           <button className='h-10  mt-[2em] rounded-md bg-blue-500  w-full text-white'>Login</button>
//           <p className='mt-[2em]'>Already have an account? <a>Login here</a></p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Signin

import React from 'react';

function Signin() {
  return (
    <div className="p-6 md:p-10 flex h-screen items-center justify-center bg-gray-50">
      <div className="p-4 md:p-6 h-auto md:h-[30em] w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl border border-black shadow-lg bg-slate-100 flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">Login</h1>
          <p className="my-4 text-sm md:text-base text-center">
            Please login to book an appointment
          </p>

          {/* Email Input */}
          <label className="block text-sm font-medium">Email</label>
          <input
            className="block h-10 w-full mt-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <label className="block mt-4 text-sm font-medium">Password</label>
          <input
            className="block h-10 w-full mt-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
          />

          {/* Login Button */}
          <button className="h-10 w-full mt-6 rounded-md bg-blue-500 text-white text-sm md:text-base font-medium hover:bg-blue-600 transition">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="mt-6 text-sm md:text-base text-center">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
