import React from "react";
import menuitems from "@/app/menuitems.json";
import menuMeat from "@/../public/images/menumeat.png";
import Image from "next/image";
import meats from "@/app/meats.json";
import burgers from "@/app/burgers.json";
import hotpot from "@/app/hotpot.json";
import sizzsidedish from "@/app/sizzsidedish.json";

function MenuTwo() {
  return (
    <div className=" pt-[124px] w-full ">
      <h1 className="] w-full  text-black  mb-2 font-roboto font-bold text-[48px] leading-[57.6px] tracking--0.5 text-center  ">
        Taste The Sizzle
      </h1>
      <div className="mb-[44px] mx-[48px] gap-[24px] grid justify-center  grid-cols-2    ">
        <div className=" items-center justify-center  col-span-1 ">
          {" "}
          <h3 className=" w-full  text-black  mb-2 font-roboto font-bold text-3xl leading-[46.8px] tracking-tight  ">
            Savory Grilled Meats
          </h3>
        </div>
        <div className=" items-center flex justify-end col-span-1 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li className="">
                <a
                  href="#"
                  className="text-black flex items-center justify-center w-9 h-9 rounded-lg border-2 border-[#E2231A]  p-2 transform "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>

              <li className="ml-[32px]">
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border bg-[#E2231AEB] p-2"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
        </div>
      </div>
      <div className="mb-[100px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {meats.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="">
                <div className="w-full h-[336px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full rounded-tl-[52px] rounded-tr-[16px]"
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 rounded-br-[52px] rounded-bl-[16px]">
                  <div className=" py-1">
                    <p className=" pt-[16px] text-center text-white font-roboto font-medium text-[28px] leading-[39.2px] tracking-0">
                      {item.price}
                    </p>

                    <div className=" pt-[12px] text-center text-white  font-roboto font-medium text-[28px] leading-[39.2px] tracking-0 text-center">
                      {item.name}
                    </div>

                    <p className="pt-[12px] text-white text-justify font-roboto font-normal text-base leading-7 tracking-normal align-middle ">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[64px] mx-[48px] gap-[24px] grid justify-center  grid-cols-2    ">
        <div className=" items-center justify-center  col-span-1 ">
          {" "}
          <h3 className="mb-[32px] w-full  text-black  mb-2 font-roboto font-bold text-3xl leading-[46.8px] tracking-tight  ">
            Burgers
          </h3>
        </div>
        <div className=" items-center flex justify-end col-span-1 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li className="">
                <a
                  href="#"
                  className="text-black flex items-center justify-center w-9 h-9 rounded-lg border-2 border-[#E2231A]  p-2 transform "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>

              <li className="ml-[32px]">
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border bg-[#E2231AEB] p-2"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
        </div>
      </div>
      <div className="mb-[100px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {burgers.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="">
                <div className="w-full h-[336px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full rounded-tl-[52px] rounded-tr-[16px]"
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 rounded-br-[52px] rounded-bl-[16px]">
                  <div className=" py-1">
                    <p className=" pt-[16px] text-center text-white font-roboto font-medium text-[28px] leading-[39.2px] tracking-0">
                      {item.price}
                    </p>

                    <div className=" pt-[12px] text-center text-white  font-roboto font-medium text-[28px] leading-[39.2px] tracking-0 text-center">
                      {item.name}
                    </div>

                    <p className="pt-[12px] text-white text-justify font-roboto font-normal text-base leading-7 tracking-normal align-middle ">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[64px] mx-[48px] gap-[24px] grid justify-center  grid-cols-2    ">
        <div className=" items-center justify-center  col-span-1 ">
          {" "}
          <h3 className="mb-[32px] w-full  text-black  mb-2 font-roboto font-bold text-3xl leading-[46.8px] tracking-tight  ">
            Hot pot
          </h3>
        </div>
        <div className=" items-center flex justify-end col-span-1 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li className="">
                <a
                  href="#"
                  className="text-black flex items-center justify-center w-9 h-9 rounded-lg border-2 border-[#E2231A]  p-2 transform "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>

              <li className="ml-[32px]">
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border bg-[#E2231AEB] p-2"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
        </div>
      </div>
      <div className="mb-[100px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {hotpot.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="w-full">
                <div className="w-full h-[336px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full rounded-tl-[52px] rounded-tr-[16px]"
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 rounded-br-[52px] rounded-bl-[16px]">
                  <div className=" py-1">
                    <p className=" pt-[16px] text-center text-white font-roboto font-medium text-[28px] leading-[39.2px] tracking-0">
                      {item.price}
                    </p>

                    <div className=" pt-[12px] text-center text-white  font-roboto font-medium text-[28px] leading-[39.2px] tracking-0 text-center">
                      {item.name}
                    </div>

                    <p className="pt-[12px] text-white text-justify font-roboto font-normal text-base leading-7 tracking-normal align-middle ">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[64px] mx-[48px] gap-[24px] grid justify-center  grid-cols-2    ">
        <div className=" items-center justify-center  col-span-1 ">
          {" "}
          <h3 className="mb-[32px] w-full  text-black  mb-2 font-roboto font-bold text-3xl leading-[46.8px] tracking-tight  ">
            Sizzling Side Dishes
          </h3>
        </div>
        <div className=" items-center flex justify-end col-span-1 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
              <li className="">
                <a
                  href="#"
                  className="text-black flex items-center justify-center w-9 h-9 rounded-lg border-2 border-[#E2231A]  p-2 transform "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>

              <li className="ml-[32px]">
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border bg-[#E2231AEB] p-2"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
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
        </div>
      </div>
      <div className="mb-[100px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {sizzsidedish.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="w-full">
                <div className="w-full h-[336px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full rounded-tl-[52px] rounded-tr-[16px]"
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 rounded-br-[52px] rounded-bl-[16px]">
                  <div className=" py-1">
                    <p className=" pt-[16px] text-center text-white font-roboto font-medium text-[28px] leading-[39.2px] tracking-0">
                      {item.price}
                    </p>

                    <div className=" pt-[12px] text-center text-white  font-roboto font-medium text-[28px] leading-[39.2px] tracking-0 text-center">
                      {item.name}
                    </div>

                    <p className="pt-[12px] text-white text-justify font-roboto font-normal text-base leading-7 tracking-normal align-middle ">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuTwo;
