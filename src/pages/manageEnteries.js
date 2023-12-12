import React from 'react'
import ManageEntDetails from '@/components/ManageEntDetails'
import ManageEntDetailsData from '../components/ManageEntDetailsData'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ManageEnteries = () => {
  const { data: session, status } = useSession()
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session || session === null || session === undefined) {
    router.push("/login");
  }
  return (
    <div>
        <ManageEntDetails/>
        <ManageEntDetailsData/>
    </div>
  )
}

export default ManageEnteries