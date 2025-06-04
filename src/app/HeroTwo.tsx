"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import background from "@/../public/images/herobackgroundtwo.png";
import buttonback from "@/../public/images/vector3.png";
import buttonbacktwo from "@/../public/images/vector4.png";
import rectangle from "@/../public/images/rectangle.png";
import { usePathname } from "next/navigation";

function HeroTwo() {
  const pathname = usePathname(); // Use usePathname instead
  const [visible, setVisible] = useState("block");

  useEffect(() => {
    if (pathname === "/" ) {
      setVisible("block");
    }  else {
      setVisible("hidden");
    }
  }, [pathname]);

  return (
    <div className=" relative w-full grid grid-cols-1 h-[1252px]">
      <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />{" "}
      <div className="absolute inset-0 bg-black opacity-20 z-1" />
      <div className="mt-[300px] mx-[252px] col-span-1 z-2 ">
        <div className="mb-[72px] flex align-center justify-center">
          <div className="relative  px-[17px]    ">
            <div className=" flex  items-center justify-center">
              <div className="">
                <h1 className=" h-[131px] mb-4 font-roboto font-medium text-[112px] leading-none tracking-[0.1em] text-center text-white">
                  Fire. Flavor. Family.
                </h1>
                <p className=" font-roboto font-medium text-[36px] leading-none tracking-[1%] text-center text-white">
                  Real food, real fire, real moments. <br /> Out here, the grill
                  crackles, the stories flow, and the flavors <br /> come alive.
                  Gather round, feed the fire, and let the good <br /> times
                  roll.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className={`${visible} flex align-center justify-center`}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={buttonback}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white z-1 relative">Feed The Fire</p>
            </button>
          </div>
          <div className={`${visible} flex align-center justify-center mt-[28px]`}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={buttonbacktwo}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white z-1 relative">Give it a try</p>
            </button>
          </div>
        </div>
        <div className="mt-[72px]">
          <p className="h-[47px] font-roboto font-bold text-[36px] leading-[46.8px] tracking-[-0.2%] text-center text-white">
            Next PopUp
          </p>
          <h1 className="mt-[12px] font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center text-white">
            March 25
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
