import React from 'react'

export default function Profile() {
  return (

    <div className='p-8'>
      <img className='w-36 rounded' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />

      <h2 className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 text-neutral-800'>Mohsin</h2>
      <hr className='bg-zinc-400 h-[1px] border-none'/>

      <h3 className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</h3>
      <table border={0} >
        <tr >Email Id :
          <td >xyz@gmail.com</td></tr>
        <tr>Phone:
          <td>+999999999</td></tr>
        <tr>Address:
          <td>###</td>
        </tr>
      </table>
      <h3 className='text-neutral-500 underline mt-3'>BASIC INFORMATION</h3>
      <table border={0} >
        <tr >Gender :
          <td >male</td></tr>
        <tr>DOB
          <td>25 dec 2001</td></tr>
      </table>
      <div className="mt-10">
        <button className='border border-primary px-8 py-2 rounded-full hover:te'>Edit</button>
        <button className='border border-primary px-8 py-2 rounded-full '> save informaition</button>
      </div>


    </div>
  )
}
