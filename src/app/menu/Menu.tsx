import React from "react";
import Image from "next/image";
import menubg from "@/../public/images/menubg.png";
import rectangle from "@/../public/images/rectangle2.png";

function Menu() {
  return (
    <div className="relative w-full grid grid-cols-1 h-[1712px]">
      <Image
        src={menubg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="mt-[335px] mx-[254px] col-span-1 z-1 ">
        <div className="flex align-center justify-center">
          <div className="relative flex items-center justify-center px-[17px]  w-[947px] h-[507px] ">
            <Image
              src={rectangle}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="mx-[32px] my-[95px] relative flex  items-center justify-center">
              <div>
                <h1 className="mb-[152px] font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center">
                  Our Menu
                </h1>
                <p className="px-[189px] font-roboto font-medium text-[28px] leading-[39.2px] tracking-normal text-center text-center">
                  Where Fire Meets Flavor, and Every Bite Tells a Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
