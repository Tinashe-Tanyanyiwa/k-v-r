import React from "react";
import Image from "next/image";
import background from "@/../public/images/herobackground.png";
import cardImage from "@/../public/images/homecard.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full grid grid-cols-1 h-[1352px]">
      <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className=" col-span-1 z-1 max-h-0">
        <p className=" pb-[96px] text-[124px] font-[Roboto] font-light pt-[96px] px-[43px] italic leading-[120px] tracking-[-2%] text-center">
          Savor the tender grilled and smoked meats, made with fresh ingredients
          for a delightful experience.
        </p>
        <div className="w-full flex items-center justify-center gap-6">
          <div className="inline-block">
            <button className=" primaryredbackground w-[208px] h-[52px] rounded-[16px] py-[14px] px-[32px]">
              View Menu
            </button>
          </div>
          <div className="inline-block">
            <button className="primarygreenbackground w-[208px] h-[52px] rounded-[16px] py-[14px] px-[32px]">
              Find Us
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full absolute justify-center align-center flex"
        style={{ bottom: "-239px" }}
      >
        <Link
          href="#"
          className="justify-center  md:flex-row md:w-[1344px] h-[698px] w-[1344px]  z-1 flex flex-col items-center primarygreenbackground border border-gray-200 rounded-3xl shadow-sm  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="ml-[72px]">
            <Image
              src={cardImage}
              width={578}
              height={578}
              className="rounded-br-[100px] rounded-tl-[100px]  rounded-lg"
              alt="A chef grilling tender meats over an open flame "
              style={{ height: "578px", width: "578px", objectFit: "cover" }}
            />
          </div>
          <div className="w-[654px] flex  flex-col justify-between p-4 leading-normal justify-center align-center">
            <div className="">
              <h3 className="mb-[48px] text-white font-roboto font-normal text-4xl leading-[52px] tracking-tight text-center">
                Catch Us On The Move!
              </h3>
              <p className=" mb-[24px] font-jakarta font-normal text-base leading-6 tracking-normal text-center text-white">
                Open: 11 AM - 9 PM
              </p>
              <p className=" mb-[24px] font-jakarta font-normal text-base leading-6 tracking-normal text-center text-white">
                Next Stop: Stables Market, Flavor Town
              </p>
              <div
                className="flex justify-center
            "
              >
                <button className="border-2 border-solid border-[#E2231A] border-x-4 border-y-2  text-black font-roboto font-medium text-base leading-6 tracking-normal bg-white w-[208px] h-[52px] rounded-[16px] py-[14px] px-[32px]">
                  Get Location
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
