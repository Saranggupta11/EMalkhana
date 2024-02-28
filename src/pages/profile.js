import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = () => {
  // const x=useSession();
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      try{
        const res = await axios.get("/api/user");
        console.log("res", res.data.user);
        setUserData(res.data.user);
      }
      catch(err){
        console.log("Error", err);
        if(err.response.status === 409){
          router.push("/login")
        }
      }
      
    }
    fetchData();
  }, [router]);

  const handleSignOut = async (e) => {
    e.preventDefault();
    const res = await axios.delete("/api/login");
    console.log("res", res);
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
      <div>
        <h2 className="text-lg font-semibold">User Information</h2>
        <div>
          <p>
            <span className="font-semibold">User Id:</span> {userData?.userId}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {userData?.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {userData?.email}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {userData?.role}
          </p>
          <p>
            <span className="font-semibold">PS Name:</span> {userData?.psName}
          </p>
          <p>
            <span className="font-semibold">Last Updated Date</span>{" "}
            {new Date(userData?.updatedAt).toLocaleDateString()}{" "}
            {new Date(userData?.updatedAt).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
