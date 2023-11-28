// pages/login.js
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("userId:", userId);
    console.log("Password:", password);

    const res=await axios.post("http://localhost:3000/api/user", {
      userId: userId,
      password: password,
    });
    console.log(res);
  };

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
          <div class=" lg:w-1/4">
            <h2 class="text-gray-900 text-center text-2xl mb-1 font-medium title-font">
              IO Login
            </h2>

            <div class="relative mb-4">
              <label for="userId" class="leading-7 text-sm text-gray-600">
                userId
              </label>
              <input
                type="userId"
                id="userId"
                name="userId"
                onChange={(e) => setuserId(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex justify-center">
            <button
              onClick={handleLogin}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
