import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-center mt-10'>
            {/* <Logo/> */}
            {/* <Image
             src="/public/images/logo.png"
             width={500}
             height={500}
             alt='Logo'
            /> */}
            <div className='text-5xl font-black text-cente text-blue-600'>Jharkhand Police E-Malkhana</div>
            {/* <Image
             src="/public/images/logo.png"
             width={500}
             height={500}
             alt='Logo'
            /> */}

        </div>
        
        <div className='my-9 flex bg-blue-500 justify-center py-3 text-2xl'>
            <div className='text-white mx-20 hover:text-yellow-300'>Home</div>
            <div className='text-white mx-20 hover:text-yellow-300'>Add Entry</div>
            <div className='text-white mx-20 hover:text-yellow-300'>Manage Entries</div>
        </div>
        </div>
  )
}