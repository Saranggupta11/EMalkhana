import React from 'react'
import { useSession } from 'next-auth/react';

const Profile = () => {

    const   { data: session, status } = useSession();
    console.log(session);

  return (
    <div>
        <h1>Profile</h1>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        {/* <p>{session.user.psName}</p>
        <p>{session.user.role}</p> */}
    </div>
  )
}

export default Profile