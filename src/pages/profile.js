import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Profile = () => {
  const { data: session, status } = useSession();
  // const x=useSession();

  const router = useRouter();
  if (status === "loading") {
  
    return <p>Loading...</p>;
  }
  if (!session || session === null || session === undefined) {
    router.push("/login");
  }
  console.log(session.user.email);

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    router.replace("/");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Profile</h1>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSignOut}
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-lg rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          SignOut
        </button>
      </div>
      {session && (
        <div className="flex gap-6 justify-center">
          {/* <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p> */}
        </div>
      )}
    </div>
  );
};

export default Profile;
