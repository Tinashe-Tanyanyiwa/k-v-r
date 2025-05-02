import React from "react";
import Image from "next/image";
import background from "@/../public/images/herobackgroundtwo.png";
import buttonback from "@/../public/images/vector3.png";
import buttonbacktwo from "@/../public/images/vector4.png";
import rectangle from "@/../public/images/rectangle.png";

function HeroTwo() {
  return (
    <div className="mb-176 relative w-full grid grid-cols-1 h-[1703px]">
      <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />{" "}
      <div className="mt-[339px] mx-[254px] col-span-1 z-1 ">
        <div className="flex align-center justify-center">
          <div className="relative  px-[17px]  w-[931.8px] h-[741.4px] ">
            <Image
              src={rectangle}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="mx-[32px] my-[208px] relative flex  items-center justify-center">
              <div>
                <h1 className="mb-[66px] font-roboto font-bold text-6xl leading-[86px] tracking-[-0.5px] text-center text-white">
                  Bringing People Together Over Fire & Flavor
                </h1>
                <p className="font-roboto font-medium text-[20px] leading-none tracking-1percent text-center text-white">
                  Authentic Grilling. Natural Cooking. Unforgettable Taste
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[96px]">
          <div className="flex align-center justify-center">
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={buttonback}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white z-1 relative">Explore our Menu</p>
            </button>
          </div>
          <div className="flex align-center justify-center mt-[28px]">
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={buttonbacktwo}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white z-1 relative">Explore our Menu</p>
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-[96px] font-roboto font-bold text-[48px] leading-[57.6px] tracking--0.5 text-center text-white">
            March 25
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
