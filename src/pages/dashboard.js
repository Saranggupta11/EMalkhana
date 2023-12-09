import React from "react";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleSignOut}>Sign Out</button>

        <div>{session?.user?.userId}</div>
        <div>{session?.user?.role}</div>
    </>
  );
};

export default Dashboard;
