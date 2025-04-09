import React from "react";
import Image from "next/image";
import sauces from "@/../public/images/sauces.png";

function BringFHome() {
  return (
    <div className="pb-[104px] w-full relative">
      <div className="h-[698px]  relative  w-full grid grid-cols-1 ">
        {" "}
        <Image
          src={sauces}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 "
        />{" "}
        <div className="z-2 mt-[281px] mx-[254px] col-span-1  ">
          <div className="flex align-center justify-center">
            <div className="  px-[17px]  w-[931.8px] h-[741.4px] ">
              <div className="mx-[32px]  relative flex  items-center justify-center">
                <div>
                  <h1 className="mb-[32px] font-inter font-normal text-[48px] leading-[52px] tracking-[-0.025em] text-center ">
                    Bring the Flavor Home
                  </h1>
                  <div className="w-full flex justify-center">
                    <button className="bg-[#FEFBFA] w-[259px] h-[52px] pt-[14px] pr-[32px] pb-[14px] pl-[32px] rounded-[16px] font-inter font-medium text-[20px] leading-[24px] tracking-normal text-[#281B1B] ">
                    Get Your Braai Pack!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BringFHome;
