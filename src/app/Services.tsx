"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import green from "@/../public/images/green.png";
import blank from "@/../public/images/blank.png";
import services from "@/app/services.json";
import chefstwo from "@/../public/images/chefstwo.png";
import servbutt from "@/../public/images/servbutt.svg";
import { usePathname } from "next/navigation";

function Services() {
  const pathname = usePathname();
  const [title, setTitle] = useState("Our Services");
  const [backg, setBackg] = useState(blank);

  useEffect(() => {
    setTitle(pathname === "/" ? "Our Flame-Fired Services" : "Our Services");
    setBackg(pathname === "/" ? green : blank);
  }, [pathname]);

  return (
    <div className="mb-[124px] relative bg-[#0D4737] w-full ">
      <Image
        src={backg}
        alt="Outdoor food market grill"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="py-[124px] relative">
        <h1 className=" w-full  text-white  mb-2 font-roboto font-bold text-[48px] leading-[57.6px] tracking--0.5 text-center  ">
          Flame-Fired Services
        </h1>
        <p className="  mb-[24px] text-white font-roboto font-normal text-base leading-[100%] tracking-[1%] text-center">
          Real fires, real flavors, real experiences. Whether it's an open flame
          or a backyard get-together, we've got you covered.
        </p>
        <div className="w-full flex align-center justify-center">
          <div className="mt-[52px] mb-[44px] mx-[48px]  gap-[18px] grid justify-center  grid-cols-3    ">
            {services.map((item) => (
              <div
                key={item.id}
                className=" items-center justify-center  col-span-1 "
              >
                <div className="w-[416px]">
                  <div>
                    <div className="w-full flex align-center justify-center">
                      <Image
                        src={item.image}
                        height={420}
                        width={416}
                        alt="African girls outside"
                        className="mr-[12px] ml-[16px] rounded-md "
                        // layout="fill"
                      />
                    </div>

                    <h1 className="mb-[12px] mt-[24px] text-[#FBFEFD] font-roboto font-medium text-2xl leading-[39.2px] text-center">
                      {item.name}
                    </h1>
                    <p className="  mb-[24px] text-white font-roboto font-normal text-base leading-[100%] tracking-[1%] text-center">
                      {item.paragraph}
                    </p>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
