import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Image
             src="/images/logo.png"
             width={150}
             height={150}
             alt='Logo'
            />
        <div className="text-5xl font-black text-cente text-blue-600">
          Jharkhand Police E-Malkhana
        </div>
        <Image
             src="/images/logo.png"
             width={150}
             height={150}
             alt='Logo'
            />
      </div>

      <div className="my-9 flex bg-blue-500 justify-center py-3 text-2xl">
        <div className="text-white mx-20 hover:text-yellow-300">
          <Link href="/">Home</Link>
          </div>
        <div className="text-white mx-20 hover:text-yellow-300">
          <Link href="/addproperty">Add Entry</Link></div>
        <div className="text-white mx-20 hover:text-yellow-300">
          <Link href="/manageEnteries">Manage Entries</Link>
        </div>
        <div className="text-white mx-20 hover:text-yellow-300">
          <Link href="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
}
