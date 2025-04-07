"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import logo2 from "@/../public/images/logo2.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname(); // Use usePathname instead
  const [navClass, setNavClass] = useState("relative");
  const [color, setColor] = useState("bg-white");
  const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    setNavClass(pathname === "/" ? "absolute" : "relative");
    setColor(pathname === "/" ? "bg-[#0000001F]" : "bg-white");
    setLogoSrc(pathname === "/" ? logo : logo2); // Use pathname here
  }, [pathname]);

  return (
    <nav
      className={`${color} ${navClass} top-0 left-0 right-0 z-2 border-gray-200 w-full`}
    >
      <div className=" flex flex-wrap items-center justify-between mx-auto pl-4 pr-[48px] h-[112px]">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <Image
            src={logoSrc}
            width={200}
            height={48}
            alt="Kavara Kavara Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="gap-[52px] font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-transparent ">
            <li>
              <Link
                href="/"
                className="border-b-3 border-[#C81C16] block py-2  text-white font-roboto font-medium text-[15px] leading-[20px] tracking-[]x"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-black py-2 font-roboto font-medium text-[15px] leading-[20px] tracking-[]"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-black py-2 font-roboto font-medium text-[15px] leading-[20px] tracking-[]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="block text-black py-2 font-roboto font-medium text-[15px] leading-[20px] tracking-[]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
