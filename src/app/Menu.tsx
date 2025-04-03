"use client";

import React, { useState } from "react";
import menu from "@/app/menu.json";
import menuitems from "@/app/menuitems.json";
import menuMeat from "@/../public/images/menumeat.png";
import Image from "next/image";

function Menu() {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown state
  };

  return (
    <div className="pt-[176px] w-full ">
      <h1 className="mb-[32px] w-full  text-black  mb-2 font-roboto font-bold text-[64px] leading-none tracking-[-2%] text-center  ">
        Explore Our Menu
      </h1>
      <div className="mx-[48] mb-[16px]  gap-[24px] grid justify-around  grid-cols-4    ">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center bg-[#105742] text-black font-roboto font-semibold text-[24px] leading-none tracking-[] text-center w-full h-[100px] gap-[12px] border-3 border-gray-300 rounded-tl-[52px] rounded-tr-[12px] rounded-br-[52px] rounded-bl-[12px] col-span-1  "
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="mt-[48] mx-[48] mb-[16px] gap-[24px] grid justify-between grid-cols-2    ">
        <div className="col-span-1">
          <form>
            <label
              htmlFor="search"
              className="mb-2  text-sm font-medium text-white sr-only text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
                    strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
                    strokeWidth="2" // Changed from stroke-width to strokeWidth
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className=" h-[36] bg-[#E2231A] block w-[480]  ps-10 text-sm   rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 placeholder-white text-white font-roboto font-normal text-sm leading-5 tracking-normal "
                placeholder="Search reviews..."
                required
              />
            </div>
          </form>
        </div>
        <div className="col-span-1 justify-end flex">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full  flex  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-[#E2231A]  ring-gray-300 ring-inset "
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Sort by
                <svg
                  className="-mr-1 size-5 text-[#E2231A]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}{" "}
            {isOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-[64px]  gap-[24px] grid justify-center  grid-cols-3    ">
        {menuitems.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div>
                <Image
                  src={menuMeat}
                  width={432}
                  height={336}
                  className="h-[336px] rounded-tl-[52px] rounded-tr-[16px]"
                  alt="A perfectly grilled steak with grill marks"
                  // style={{ objectFit: "cover" }}
                />
                <div className="bg-black w-[432]  gap-3 pt-4 pr-5 pb-5 pl-5 rounded-br-[52px] rounded-bl-[16px]">
                  <div className=" py-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white inline-block font-roboto font-bold text-[22px] leading-none tracking-[] mb-2">
                        {item.name}
                      </span>
                      <span className="inline-block">
                        <p className="text-white font-roboto font-semibold text-xl leading-none tracking-normal">
                          {item.price}
                        </p>
                      </span>
                    </div>
                    <p className="pt-[12px] text-white text-justify font-roboto font-normal text-[18px] leading-none tracking-[] ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div> */}
      <nav
        aria-label="Page navigation example"
        className="flex justify-end mr-[50px]"
      >
        <ul className=" mr-[48px] flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px] bg-[#E2231A] text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="z-10 flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px]  text-black"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="z-10 flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px]  text-black"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="z-10 flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px]  text-black"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="z-10 flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px]  text-black"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px] p-[8px] border-[var(--strokeWidth)] bg-[#E2231AEB]"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
}

export default Menu;
