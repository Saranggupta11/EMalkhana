// import React from "react";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

// export default function Navbar  () {
//   const menus = [
//     { name: "Home", link: "/", icon: MdOutlineDashboard },
//     { name: "Add Entry", link: "/addproperty", icon: AiOutlineUser },
//     { name: "Manage Entries", link: "/manageEnteries", icon: FiMessageSquare },
//     { name: "Profile", link: "/profile", icon: TbReportAnalytics },
//     { name: "File Manager", link: "/", icon: FiFolder },
//     { name: "Cart", link: "/", icon: FiShoppingCart },
//     { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
//     { name: "Setting", link: "/", icon: RiSettings4Line },
//   ];
//   const [open, setOpen] = useState(true);
//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-[#0e0e0e] min-h-screen ${
//           open ? "w-72" : "w-16"
//         } duration-500 text-gray-100 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus?.map((menu, i) => (
//             <Link
//               href={menu?.link}
//               key={i}
//               className={` ${
//                 menu?.margin && "mt-5"
//               } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
//             >
//               <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//               <h2
//                 style={{
//                   transitionDelay: `${i + 3}00ms`,
//                 }}
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {menu?.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//               >
//                 {menu?.name}
//               </h2>
//             </Link>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default function Navbar() {
//   return (
//     <div>
//       <div className="flex justify-center mt-10">
//         <Image
//              src="/images/logo.png"
//              width={100}
//              height={100}
//              className="rounded-full mr-auto ml-auto"
//              alt='Logo'
//             />
//         <div className="flex items-center">
//         <div className="text-5xl font-black text-cente text-blue-600">
//           Jharkhand Police E-Malkhana
//         </div>
//         </div>
//         <Image
//              src="/images/logo.png"
//              width={100}
//              height={100}
//              className="rounded-full mr-auto ml-auto"
//              alt='Logo'
//             />
//       </div>

//       <div className="my-9 flex bg-blue-500 justify-center py-3 text-2xl">
//         <div className="text-white mx-20 hover:text-yellow-300">
//           <Link href="/">Home</Link>
//           </div>
//         <div className="text-white mx-20 hover:text-yellow-300">
//           <Link href="/addproperty">Add Entry</Link></div>
//         <div className="text-white mx-20 hover:text-yellow-300">
//           <Link href="/manageEnteries">Manage Entries</Link>
//         </div>
//         <div className="text-white mx-20 hover:text-yellow-300">
//           <Link href="/profile">Profile</Link>
//         </div>
//       </div>
//     </div>
//   );
// }import React from "react";
import AddEntryModal from "./AddEntryModal"; // Import your AddEntryModal component

export default function Navbar() {
  const [openEntryModal, setOpenEntryModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      {/* Logo */}
      <div className="flex items-center mr-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            className="rounded-full mr-auto ml-auto"
            alt="Logo"
          />{" "}
          <span className="font-semibold text-xl tracking-tight text-blue-700">
            E-Malkhana
          </span>
        </Link>
        <span className="ml-2 font-semibold text-xl pl-10 text-black">
          Cases: 12
        </span>
      </div>

      {/* Menu Toggle Button (for mobile) */}
      <div className="block lg:hidden">
        <button
          id="nav"
          className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        {/* Search Input */}
        <div
          className="mx-auto text-gray-600 lg:block hidden"
          style={{ display: "flex" }}
        >
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none "
            type="search"
            name="search"
            placeholder="Search"
            style={{ flex: "1", minWidth: "0", width: "500px" }} // Allow input to grow
          />
          <button type="submit" style={{ marginLeft: "-28px" }}>
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              style={{
                enableBackground: "new 0 0 56.966 56.966",
                width: "20px",
                height: "20px",
              }}
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>

        {/* Menu Buttons */}
        <div className="flex justify-end items-center">
          {/* Add Entry Button */}
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 transform transition-transform duration-300 hover:scale-105"
            onClick={() => setOpenEntryModal(true)}
          >
            Add Entry
          </button>

          {/* Export Button */}
          <div className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 transform transition-transform duration-300 hover:scale-105">
            Export
          </div>

          {/* Print Button */}
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 transform transition-transform duration-300 hover:scale-105"
          >
            Print
          </button>

          {/* Profile Link */}
          <div className="ml-2 px-5 py-2.5 me-2 mb-2">
            <Link
              href="/profile"
              className="block text-md  rounded text-blue-700 font-bold   transform transition-transform duration-300 hover:scale-105"
            >
              <AiOutlineUser size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* AddEntryModal */}
      {openEntryModal && (
        <AddEntryModal
          openEntryModal={openEntryModal}
          setOpenEntryModal={setOpenEntryModal}
        />
      )}
    </nav>
  );
}
