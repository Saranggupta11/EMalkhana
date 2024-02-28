import React from 'react'
import ManageEntDetails from '@/components/ManageEntDetails'
import ManageEntDetailsData from '../components/ManageEntDetailsData'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ManageEntries = () => {

  return (
    <div>
        {/* <ManageEntDetails/> */}
        <ManageEntDetailsData/>
    </div>
  )
}

export default ManageEntries