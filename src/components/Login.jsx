// pages/login.js
import axios from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    console.log("userId:", userId);
    console.log("Password:", password);
    try {
      const res=await signIn("credentials",{
        userId,password,redirect:false
      });
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
          <div className=" lg:w-1/4">
            <h2 className="text-gray-900 text-center text-2xl mb-1 font-medium title-font">
              IO Login
            </h2>

            <div className="relative mb-4">
              <label htmlFor="userId" className="leading-7 text-sm text-gray-600">
                userId
              </label>
              <input
                type="userId"
                id="userId"
                name="userId"
                onChange={(e) => setuserId(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
