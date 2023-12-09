import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Addproperty from './Addproperty'

export default function dashboard() {
  return (
    <div>
        <Navbar/>
        {/* <Homepage /> */}
        <Addproperty/>        

    </div>
  )
}
