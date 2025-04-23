// // "use client";
// // import Link from "next/link";
// // import { Disclosure } from "@headlessui/react";
// // import { useEffect, useState } from "react";
// // import UserDropdown from "./UserDropdown";

// // export default function Navbar() {
// //   const [idUser, setIdUser] = useState(null);
// //   const [user, setUser] = useState(null);
// //   const navigation = ["Home", "Services", "Portfolio", "Contact"];

// //   // 1) Grab userId from localStorage on mount
// //   useEffect(() => {
// //     const storedId = localStorage.getItem("userId");
// //     if (storedId) {
// //       setIdUser(storedId);
// //     }
// //   }, []);

// //   // 2) Fetch user data when we have an idUser
// //   useEffect(() => {
// //     if (!idUser) return;

// //     async function getUserById() {
// //       try {
// //         const response = await fetch(`http://localhost:8000/ELACO/${idUser}`);
// //         if (!response.ok) {
// //           throw new Error(`The error is: ${response.statusText}`);
// //         }
// //         const data = await response.json();
// //         setUser(data.user);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     }

// //     getUserById();
// //   }, [idUser]);

// //   return (
// //     <div className="w-full  ">
// //       <nav className="container mx-auto relative flex flex-wrap items-center justify-center py-3 lg:justify-between xl:px-0">
// //         <Disclosure>
// //           {({ open }) => (
// //             <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
// //               {/* Logo */}
// //               <Link
// //                 href="/"
// //                 className="flex items-center space-x-0.5 text-xl font-medium text-gray-900"
// //               >
// //                 <span className="font-bold text-blue-900">ELA</span>
// //                 <span className="font-bold text-[#1af0cb]">CO</span>
// //                 <span className="text-blue-900 font-bold  ">working space</span>
// //               </Link>

// //               {/* Mobile menu button */}
// //               <Disclosure.Button
// //                 aria-label="Toggle Menu"
// //                 className="px-2 py-1 ml-auto text-blue-950 rounded-md lg:hidden hover:text-amber-500 focus:outline-none"
// //               >
// //                 <svg
// //                   className="w-6 h-6 fill-current"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   {open ? (
// //                     <path
// //                       fillRule="evenodd"
// //                       clipRule="evenodd"
// //                       d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828
// //                          a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828
// //                          a1 1 0 0 1 1.414-1.414l4.829 4.828
// //                          4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829
// //                          4.828 4.828z"
// //                     />
// //                   ) : (
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M4 5h16a1 1 0 0 1 0 2H4
// //                          a1 1 0 1 1 0-2zm0 6h16
// //                          a1 1 0 0 1 0 2H4
// //                          a1 1 0 0 1 0-2zm0 6h16
// //                          a1 1 0 0 1 0 2H4
// //                          a1 1 0 0 1 0-2z"
// //                     />
// //                   )}
// //                 </svg>
// //               </Disclosure.Button>

// //               {/* Mobile menu */}
// //               <Disclosure.Panel className="w-full my-4 lg:hidden">
// //                 {/* 
// //                   flex-col items-center -> stacked center on xs
// //                   gap-4 -> spacing between nav and user section
// //                   sm:flex-row sm:justify-between -> row layout on sm+ 
// //                 */}
// //                 <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
// //                   {/* Nav links (centered on xs, left on sm+) */}
// //                   <div className="flex flex-wrap justify-center gap-2">
// //                     {navigation.map((item, index) => (
// //                       <Link
// //                         key={index}
// //                         href="/"
// //                         className="px-4 py-2 text-md font-medium text-blue-900 font-extrabold
// //                                    hover:text-amber-500 rounded-md hover:bg-gray-50 transition-colors"
// //                       >
// //                         {item}
// //                       </Link>
// //                     ))}
// //                   </div>

// //                   {/* User dropdown or Login/Signup (centered on xs, right on sm+) */}
// //                   <div className="flex gap-3">
// //                     {idUser ? (
// //                       <UserDropdown user={user} />
// //                     ) : (
// //                       <>
// //                         <Link
// //                           href="/login"
// //                           className="px-4 py-2 text-center text-gray-600 
// //                                      border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
// //                         >
// //                           Login
// //                         </Link>
// //                         <Link
// //                           href="/signup"
// //                           className="px-4 py-2 text-center text-white 
// //                                     bg-yellow-400 hover:bg-yellow-300  rounded-md  transition-colors"
// //                         >
// //                           Sign Up
// //                         </Link>
// //                       </>
// //                     )}
// //                   </div>
// //                 </div>
// //               </Disclosure.Panel>
// //             </div>
// //           )}
// //         </Disclosure>

// //         {/* Desktop menu */}
// //         <div className="hidden text-center lg:flex lg:items-center">
// //           <ul className="flex items-center space-x-1">
// //             {navigation.map((menu, index) => (
// //               <li key={index}>
// //                 <Link
// //                   href="/"
// //                   className="px-4 py-2 text-md font-bold text-blue-950
// //                              rounded-md hover:text-amber-500 hover:bg-gray-50 transition-colors"
// //                 >
// //                   {menu}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Desktop buttons */}
// //         <div className="hidden lg:flex items-center space-x-3">
// //           {idUser ? (
// //             <UserDropdown user={user} />
// //           ) : (
// //             <>
// //               <Link
// //                 href="/login"
// //                 className="px-4 py-2 text-sm font-medium text-gray-600
// //                            hover:text-blue-600 transition-colors"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 href="/signup"
// //                 className="px-4 py-2 text-sm font-medium text-gray-950
// //                          bg-yellow-400 hover:bg-yellow-300  rounded-md transition-colors shadow-sm"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // "use client";

// // import Link from "next/link";
// // import { Disclosure } from "@headlessui/react";
// // import {
// //   FaFacebook,
// //   FaInstagram,
// //   FaTiktok,
// //   FaLinkedin,
// // } from "react-icons/fa";

// // // Dummy navigation and user values for illustration
// // const navigation = ["Home", "Services", "Portfolio", "Contact"];
// // const idUser = false;
// // const user = null;

// // export default function Navbar() {
// //   return (
// //     <div className="w-full ">
// //       <nav className="container mx-auto relative flex flex-wrap items-center justify-center py-3 lg:justify-between xl:px-0">
// //         <Disclosure>
// //           {({ open }) => (
// //             <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
// //               {/* Logo */}
// //               <Link
// //                 href="/"
// //                 className="flex items-center space-x-0.5 text-xl font-medium text-gray-900"
// //               >
// //                 <span className="font-bold text-blue-900">ELA</span>
// //                 <span className="font-bold text-[#1af0cb]">CO</span>
// //                 <span className="text-blue-900 font-bold">working space</span>
// //               </Link>

// //               {/* Mobile menu button */}
// //               <Disclosure.Button
// //                 aria-label="Toggle Menu"
// //                 className="px-2 py-1 ml-auto text-blue-950 rounded-md lg:hidden hover:text-amber-500 focus:outline-none"
// //               >
// //                 <svg
// //                   className="w-6 h-6 fill-current"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   {open ? (
// //                     <path
// //                       fillRule="evenodd"
// //                       clipRule="evenodd"
// //                       d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828
// //                          a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828
// //                          a1 1 0 0 1 1.414-1.414l4.829 4.828
// //                          4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829
// //                          4.828 4.828z"
// //                     />
// //                   ) : (
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M4 5h16a1 1 0 0 1 0 2H4
// //                          a1 1 0 1 1 0-2zm0 6h16
// //                          a1 1 0 0 1 0 2H4
// //                          a1 1 0 0 1 0-2zm0 6h16
// //                          a1 1 0 0 1 0 2H4
// //                          a1 1 0 0 1 0-2z"
// //                     />
// //                   )}
// //                 </svg>
// //               </Disclosure.Button>

// //               {/* Mobile menu */}
// //               <Disclosure.Panel className="w-full my-4 lg:hidden">
// //                 <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
// //                   {/* Nav Links */}
// //                   <div className="flex flex-wrap justify-center gap-2">
// //                     {navigation.map((item, index) => (
// //                       <Link
// //                         key={index}
// //                         href="/"
// //                         className="px-4 py-2 text-md font-medium text-blue-900 font-extrabold hover:text-amber-500 rounded-md hover:bg-gray-50 transition-colors"
// //                       >
// //                         {item}
// //                       </Link>
// //                     ))}
// //                   </div>

// //                   {/* Login / Signup */}
// //                   <div className="flex gap-3">
// //                     {idUser ? (
// //                       <UserDropdown user={user} />
// //                     ) : (
// //                       <>
// //                         <Link
// //                           href="/login"
// //                           className="px-4 py-2 text-center text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
// //                         >
// //                           Login
// //                         </Link>
// //                         <Link
// //                           href="/signup"
// //                           className="px-4 py-2 text-center text-white bg-yellow-400 hover:bg-yellow-300 rounded-md transition-colors"
// //                         >
// //                           Sign Up
// //                         </Link>
// //                       </>
// //                     )}
// //                   </div>
// //                 </div>
// //               </Disclosure.Panel>
// //             </div>
// //           )}
// //         </Disclosure>

// //         {/* Desktop menu links */}
// //         <div className="hidden text-center lg:flex lg:items-center">
// //           <ul className="flex items-center space-x-1">
// //             {navigation.map((menu, index) => (
// //               <li key={index}>
// //                 <Link
// //                   href="/"
// //                   className="px-4 py-2 text-md font-bold text-blue-950 rounded-md hover:text-amber-500 hover:bg-gray-50 transition-colors"
// //                 >
// //                   {menu}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Desktop buttons and social icons */}
// //         <div className="hidden lg:flex items-center space-x-3">
// //           {idUser ? (
// //             <UserDropdown user={user} />
// //           ) : (
// //             <>
// //               <Link
// //                 href="/login"
// //                 className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 href="/signup"
// //                 className="px-4 py-2 text-sm font-medium text-gray-950 bg-yellow-400 hover:bg-yellow-300 rounded-md transition-colors shadow-sm"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}

// //           {/* Social Icons */}
// //           <div className="flex items-center space-x-2 ml-4 text-blue-900 text-lg">
// //             <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
// //               <FaFacebook className="hover:text-blue-900 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
// //               <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://tiktok.com" target="_blank" aria-label="TikTok">
// //               <FaTiktok className="hover:text-black transition-transform hover:scale-110" />
// //             </Link>
           
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }
// // "use client";

// // import Link from "next/link";
// // import { useState, useRef, useEffect } from "react";
// // import { FaChevronDown, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

// // const navigation = [
// //   { name: "Home", href: "/homepage" },
// //   {
// //     name: "Services",
// //     submenu: [
// //       { name: "Coworking Zone", href: "/services/coworking" },
// //       { name: "Private Zone", href: "/services/private" },
// //       { name: "Meeting Zone", href: "/services/meeting" },
// //       { name: "Domiciliation", href: "/services/domiciliation" },
// //     ],
// //   },
// //   { name: "Portfolio", href: "/portfolio" },
// //   { name: "Contact", href: "/contact" },
// // ];

// // const idUser = false;
// // const user = null;

// // export default function Navbar() {
// //   const [openDropdown, setOpenDropdown] = useState(false);
// //   const dropdownRef = useRef(null);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setOpenDropdown(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <div className="w-full  sticky top-0 z-50">
// //       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
// //         {/* Logo */}
// //         <Link href="/" className="flex items-center text-2xl font-bold text-blue-900 space-x-1">
// //           <span className="text-blue-900">ELA</span>
// //           <span className="text-[#1af0cb]">CO</span>
// //           <span className="text-blue-900  ">working space</span>
// //         </Link>

// //         {/* Navigation Links */}
// //         <div className="hidden lg:flex items-center space-x-6">
// //           {navigation.map((menu, index) =>
// //             !menu.submenu ? (
// //               <Link
// //                 key={index}
// //                 href={menu.href}
// //                 className="text-blue-950 font-bold hover:text-amber-500 transition-colors"
// //               >
// //                 {menu.name}
// //               </Link>
// //             ) : (
// //               <div key={index} className="relative" ref={dropdownRef}>
// //                 <button
// //                   onClick={() => setOpenDropdown(!openDropdown)}
// //                   className="flex items-center gap-1 text-blue-950 font-bold hover:text-amber-500 transition-colors"
// //                 >
// //                   {menu.name}
// //                   <FaChevronDown
// //                     className={`transition-transform duration-200 ${
// //                       openDropdown ? "rotate-180" : ""
// //                     }`}
// //                     size={14}
// //                   />
// //                 </button>
// //                 {openDropdown && (
// //                   <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-lg rounded-lg py-2 z-50">
// //                     {menu.submenu.map((subItem, subIndex) => (
// //                       <li key={subIndex}>
// //                         <Link
// //                           href={subItem.href}
// //                           className="block px-4 py-2 text-sm  font-bold  text-blue-900 hover:bg-gray-100 hover:text-amber-500 transition-colors"
// //                         >
// //                           {subItem.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </div>
// //             )
// //           )}
// //         </div>

// //         {/* Auth + Social Icons */}
// //         <div className="hidden lg:flex items-center space-x-4">
// //           {idUser ? (
// //             <UserDropdown user={user} />
// //           ) : (
// //             <>
// //               <Link
// //                 href="/login"
// //                 className="text-sm text-gray-600 hover:text-blue-600"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 href="/signup"
// //                 className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}
// //           <div className="flex space-x-2 text-blue-900 text-lg">
// //             <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
// //               <FaFacebook className="hover:text-blue-600 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
// //               <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
// //               <FaTiktok className="hover:text-black transition-transform hover:scale-110" />
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // 
// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState, useRef, useEffect } from "react";
// // import { FaChevronDown, FaFacebook, FaInstagram, FaTiktok, FaBars, FaTimes } from "react-icons/fa";

// // const navigation = [
// //   { name: "Home", href: "/homepage" },
// //   {
// //     name: "Services",
// //     submenu: [
// //       { name: "Coworking Zone", href: "/services/coworking" },
// //       { name: "Private Zone", href: "/services/private" },
// //       { name: "Meeting Zone", href: "/services/meeting" },
// //       { name: "Domiciliation", href: "/services/domiciliation" },
// //     ],
// //   },
// //   { name: "Portfolio", href: "/portfolio" },
// //   { name: "Contact", href: "/contact" },
// // ];

// // const idUser = false;
// // const user = null;

// // export default function Navbar() {
// //   const [openDropdown, setOpenDropdown] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const dropdownRef = useRef(null);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setOpenDropdown(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <div className="w-full sticky top-0 z-50 ">
// //       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
// //         {/* Logo */}
// //         <Link href="/homepage" className="flex items-center text-2xl font-bold text-blue-900 space-x-1">
// //           <span className="text-blue-900">ELA</span>
// //           <span className="text-[#1af0cb]">CO</span>
// //           <span className="text-blue-900">working space</span>
// //         </Link>

// //         {/* Hamburger (Mobile) */}
// //         <div className="lg:hidden">
// //           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-blue-900 text-2xl">
// //             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
// //           </button>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <div className="hidden lg:flex items-center space-x-6">
// //           {navigation.map((menu, index) =>
// //             !menu.submenu ? (
// //               <Link
// //                 key={index}
// //                 href={menu.href}
// //                 className="text-blue-950 font-bold hover:text-amber-500 transition-colors"
// //               >
// //                 {menu.name}
// //               </Link>
// //             ) : (
// //               <div key={index} className="relative" ref={dropdownRef}>
// //                 <button
// //                   onClick={() => setOpenDropdown(!openDropdown)}
// //                   className="flex items-center gap-1 text-blue-950 font-bold hover:text-amber-500 transition-colors"
// //                 >
// //                   {menu.name}
// //                   <FaChevronDown
// //                     className={`transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`}
// //                     size={14}
// //                   />
// //                 </button>
// //                 {openDropdown && (
// //                   <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-lg rounded-lg py-2 z-50">
// //                     {menu.submenu.map((subItem, subIndex) => (
// //                       <li key={subIndex}>
// //                         <Link
// //                           href={subItem.href}
// //                           className="block px-4 py-2 text-sm font-bold text-blue-900 hover:bg-gray-100 hover:text-amber-500 transition-colors"
// //                         >
// //                           {subItem.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </div>
// //             )
// //           )}
// //         </div>

// //         {/* Desktop Auth + Social */}
// //         <div className="hidden lg:flex items-center space-x-4">
// //           {idUser ? (
// //             <UserDropdown user={user} />
// //           ) : (
// //             <>
// //               <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
// //                 Login
// //               </Link>
// //               <Link
// //                 href="/signup"
// //                 className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
// //               >
// //                 Sign Up
// //               </Link>
// //             </>
// //           )}
// //           <div className="flex space-x-2 text-blue-900 text-lg">
// //             <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
// //               <FaFacebook className="hover:text-blue-600 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
// //               <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
// //             </Link>
// //             <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
// //               <FaTiktok className="hover:text-black transition-transform hover:scale-110" />
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white text-black z-50 px-8 py-1 space-y-1">
// //           {/* Logo */}
// //           <div className="flex items-center justify-between">
// //             <Link href="/homepage" className="text-xl font-bold tracking-widest">
// //               <Image
// //                 src="/rem-removebg-preview.png"
// //                 alt="Coworking Space"
// //                 width={100}
// //                 height={80}
// //                 className="object-contain"
// //               />
// //             </Link>
// //             <button onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">
// //               <FaTimes />
// //             </button>
// //           </div>

// //           {/* Nav Items */}
// //           <nav className="space-y-4">
// //             {navigation.map((menu, index) =>
// //               !menu.submenu ? (
// //                 <Link
// //                   key={index}
// //                   href={menu.href}
// //                   className="block font-bold hover:text-yellow-400 transition-colors"
// //                   onClick={() => setMobileMenuOpen(false)}
// //                 >
// //                   {menu.name}
// //                 </Link>
// //               ) : (
// //                 <div key={index}>
// //                   <div className="flex items-center justify-between font-bold hover:text-yellow-400">
// //                     {menu.name}
// //                     <FaChevronDown size={14} />
// //                   </div>
// //                   <div className="ml-4 mt-2 space-y-2">
// //                     {menu.submenu.map((subItem, subIndex) => (
// //                       <Link
// //                         key={subIndex}
// //                         href={subItem.href}
// //                         className="block text-sm text-black  hover:text-yellow-400"
// //                         onClick={() => setMobileMenuOpen(false)}
// //                       >
// //                         {subItem.name}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )
// //             )}
// //           </nav>

// //           {/* Auth + Social (Mobile) */}
// //           <div className="pt-4 border-t border-gray-200">
// //             {idUser ? (
// //               <UserDropdown user={user} />
// //             ) : (
// //               <div className="space-y-2">
// //                 <Link href="/login" className="block text-sm text-gray-600 hover:text-blue-600">
// //                   Login
// //                 </Link>
// //                 <Link
// //                   href="/signup"
// //                   className="block text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
// //                 >
// //                   Sign Up
// //                 </Link>
// //               </div>
// //             )}
// //             <div className="flex space-x-4 mt-4 text-blue-900 text-xl">
// //               <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
// //                 <FaFacebook />
// //               </Link>
// //               <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
// //                 <FaInstagram />
// //               </Link>
// //               <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
// //                 <FaTiktok />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // function UserDropdown({ user }) {
// //   // Implement your user dropdown component here
// //   return <div>User dropdown</div>;
// // }
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import {
//   FaChevronDown,
//   FaFacebook,
//   FaInstagram,
//   FaTiktok,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import UserDropdown from "./UserDropdown";

// const navigation = [
//   { name: "Home", href: "/homepage" },
//   {
//     name: "Services",
//     submenu: [
//       { name: "Coworking Zone", href: "/services/coworking" },
//       { name: "Private Zone", href: "/services/private" },
//       { name: "Meeting Zone", href: "/services/meeting" },
//       { name: "Domiciliation", href: "/services/domiciliation" },
//     ],
//   },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [idUser, setIdUser] = useState(null);
//   const [user, setUser] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const storedId = localStorage.getItem("userId");
//     if (storedId) {
//       setIdUser(storedId);
//     }
//   }, []);

//   useEffect(() => {
//     if (!idUser) return;

//     async function getUserById() {
//       try {
//         const res = await fetch(`http://localhost:8000/ELACO/${idUser}`);
//         if (!res.ok) throw new Error("Failed to fetch user");
//         const data = await res.json();
//         setUser(data.user);
//       } catch (error) {
//         console.error("User fetch error:", error);
//       }
//     }

//     getUserById();
//   }, [idUser]);

//   return (
//     <div className="w-full sticky top-0 ">
//       <nav
//         className={`container mx-auto flex items-center justify-between py-4 px-6 transition-colors duration-300 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         {/* Logo */}
//         <Link href="/homepage" className="flex items-center text-2xl font-bold text-blue-900 space-x-1">
//           <span className="text-blue-900">ELA</span>
//           <span className="text-[#1af0cb]">CO</span>
//           <span className="text-blue-900">working space</span>
//         </Link>

//         {/* Mobile Menu Icon */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="text-blue-900 text-2xl"
//           >
//             {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {navigation.map((menu, index) =>
//             !menu.submenu ? (
//               <Link
//                 key={index}
//                 href={menu.href}
//                 className="text-blue-900 font-bold hover:text-amber-500 transition-colors"
//               >
//                 {menu.name}
//               </Link>
//             ) : (
//               <div key={index} className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setOpenDropdown(!openDropdown)}
//                   className="flex items-center gap-1 text-blue-900 font-bold hover:text-amber-500 transition-colors"
//                 >
//                   {menu.name}
//                   <FaChevronDown
//                     className={`transition-transform duration-200 ${openDropdown ? "rotate-180" : ""}`}
//                     size={14}
//                   />
//                 </button>
//                 {openDropdown && (
//                   <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-lg rounded-lg py-2 z-50">
//                     {menu.submenu.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         <Link
//                           href={subItem.href}
//                           className="block px-4 py-2 text-sm font-bold text-blue-900 hover:bg-gray-100 hover:text-amber-500 transition-colors"
//                         >
//                           {subItem.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             )
//           )}
//         </div>

//         {/* Desktop Auth + Social */}
//         <div className="hidden lg:flex items-center space-x-4">
//           {idUser ? (
//             <UserDropdown user={user} />
//           ) : (
//             <>
//               <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
//                 Login
//               </Link>
//               <Link
//                 href="/signup"
//                 className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//           <div className="flex space-x-2 text-blue-900 text-lg">
//             <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
//               <FaFacebook className="hover:text-blue-600 transition-transform hover:scale-110" />
//             </Link>
//             <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
//               <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
//             </Link>
//             <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
//               <FaTiktok className="hover:text-black transition-transform hover:scale-110" />
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-8 py-1 space-y-1">
//           <div className="flex items-center justify-between">
//             <Link href="/homepage" className="text-xl font-bold tracking-widest">
//               <Image
//                 src="/rem-removebg-preview.png"
//                 alt="Coworking Space"
//                 width={100}
//                 height={80}
//                 className="object-contain"
//               />
//             </Link>
//             <button onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">
//               <FaTimes />
//             </button>
//           </div>

//           {/* Mobile Nav Items */}
//           <nav className="space-y-4 mt-4">
//             {navigation.map((menu, index) =>
//               !menu.submenu ? (
//                 <Link
//                   key={index}
//                   href={menu.href}
//                   className="block font-bold hover:text-yellow-400 transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {menu.name}
//                 </Link>
//               ) : (
//                 <div key={index}>
//                   <div className="flex items-center justify-between font-bold hover:text-yellow-400">
//                     {menu.name}
//                     <FaChevronDown size={14} />
//                   </div>
//                   <div className="ml-4 mt-2 space-y-2">
//                     {menu.submenu.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         href={subItem.href}
//                         className="block text-sm hover:text-yellow-400"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )
//             )}
//           </nav>

//           {/* Mobile Auth + Social */}
//           <div className="pt-4 border-t border-gray-200">
//             {idUser ? (
//               <UserDropdown user={user} />
//             ) : (
//               <div className="space-y-2">
//                 <Link href="/login" className="block text-sm text-gray-600 hover:text-blue-600">
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="block text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//             <div className="flex space-x-4 mt-4 text-blue-900 text-xl">
//               <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
//                 <FaFacebook />
//               </Link>
//               <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
//                 <FaInstagram />
//               </Link>
//               <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
//                 <FaTiktok />
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import UserDropdown from "./UserDropdown";

const navigation = [
  { name: "Home", href: "/homepage" },
  {
    name: "Services",
    submenu: [
      { name: "Coworking Zone", href: "/services/openspace" },
      { name: "Private Zone", href: "/services/officeroom" },
      { name: "Meeting Zone", href: "/services/meetingroom" },
      { name: "Domiciliation", href: "/services/domiciliation" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(false);
      }
    };

    // delay to avoid race condition when clicking inside the dropdown
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) setIdUser(storedId);
  }, []);

  useEffect(() => {
    if (!idUser) return;

    async function getUserById() {
      try {
        const res = await fetch(`http://localhost:8000/ELACO/${idUser}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error("User fetch error:", error);
      }
    }

    getUserById();
  }, [idUser]);

  return (
    <div className="w-full sticky top-0 z-50">
      <nav
        className={`container mx-auto flex items-center justify-between py-4 px-6 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/homepage" className="flex items-center text-2xl font-bold text-blue-900 space-x-1">
          <span className="text-blue-900">ELA</span>
          <span className="text-[#1af0cb]">CO</span>
          <span className="text-blue-900">working space</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-blue-900 text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((menu, index) =>
            !menu.submenu ? (
              <Link
                key={index}
                href={menu.href}
                className="text-blue-900 font-bold hover:text-amber-500 transition-colors"
              >
                {menu.name}
              </Link>
            ) : (
              <div key={index} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center gap-1 text-blue-900 font-bold hover:text-amber-500 transition-colors"
                >
                  {menu.name}
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </button>
                {openDropdown && (
                  <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-100 shadow-lg rounded-lg py-2 z-50">
                    {menu.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm font-bold text-blue-900 hover:bg-gray-100 hover:text-amber-500 transition-colors"
                          onClick={() => setOpenDropdown(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
        </div>

        {/* Desktop Auth + Social */}
        <div className="hidden lg:flex items-center space-x-4">
          {idUser ? (
            <UserDropdown user={user} />
          ) : (
            <>
              <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
              >
                Sign Up
              </Link>
            </>
          )}
          <div className="flex space-x-2 text-blue-900 text-lg">
            <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
              <FaFacebook className="hover:text-blue-600 transition-transform hover:scale-110" />
            </Link>
            <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
              <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
            </Link>
            <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
              <FaTiktok className="hover:text-black transition-transform hover:scale-110" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-8 py-1 space-y-1 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/homepage" className="text-xl font-bold tracking-widest">
              <Image
                src="/rem-removebg-preview.png"
                alt="Coworking Space"
                width={100}
                height={80}
                className="object-contain"
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl">
              <FaTimes />
            </button>
          </div>

          <nav className="space-y-4 mt-4">
            {navigation.map((menu, index) =>
              !menu.submenu ? (
                <Link
                  key={index}
                  href={menu.href}
                  className="block font-bold hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              ) : (
                <div key={index}>
                  <div className="flex items-center justify-between font-bold hover:text-yellow-400">
                    {menu.name}
                    <FaChevronDown size={14} />
                  </div>
                  <div className="ml-4 mt-2 space-y-2">
                    {menu.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block text-sm hover:text-yellow-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="pt-4 border-t border-gray-200">
            {idUser ? (
              <UserDropdown user={user} />
            ) : (
              <div className="space-y-2">
                <Link href="/login" className="block text-sm text-gray-600 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <div className="flex space-x-4 mt-4 text-blue-900 text-xl">
              <Link href="https://www.facebook.com/ElacoCoworkingBorjCedria" target="_blank">
                <FaFacebook />
              </Link>
              <Link href="https://www.instagram.com/elaco_coworking_space/" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="https://www.tiktok.com/@elacocowrkingspace?lang=fr" target="_blank">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
