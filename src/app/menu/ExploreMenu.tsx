import React from "react";
import Image from "next/image";
import burgers from "@/../public/images/burgers.png";
import fries from "@/../public/images/fries.png";
import Card from "./Card";

function ExploreMenu() {
  return (
    <div className="w-full">
      <div className="w-full  mt-[208px] relative flex  items-center justify-center">
        <div className="w-full">
          <h1 className="text-black  font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center">
            Explore our Menu
          </h1>
          <p className="px-[320px] mb-[72px] font-roboto font-medium text-[22px] leading-normal tracking-[-0.02em] text-center  text-[#E2231A]">
            Juicy, grilled patties served in a soft bun, topped with fresh
            lettuce, tomatoes, and your choice of condiments.
          </p>

          <div className="mb-[140px] h-[1028px]  grid grid-cols-[7fr_8fr]  ">
            <div className=" w-[calc(100%*7/15)] bg-[#00000033] h-[1028px] absolute z-1">
              {" "}
            </div>
            <div className="relative  col-span-1 ">
              <Image
                src={burgers}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="pb-[140px] z-2 w-full h-full relative flex  items-end justify-center">
                <div>
                  <h1 className="pl-[48px] text-white font-roboto font-extrabold text-[80px] leading-normal tracking-normal align-middle">
                    Signature Grilled meats
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-[52px] bg-[#105742] col-span-1 flex items-center justify-center">
              <Card></Card>
            </div>
          </div>
          <div className="mb-[140px] h-[1028px]  grid grid-cols-[8fr_7fr]  ">
            <div className="p-[52px] bg-[#105742] col-span-1 flex items-center justify-center">
              <Card></Card>
            </div>
            <div className="right-0 w-[calc(100%*7/15)] bg-[#00000033] h-[1028px] absolute z-1">
              {" "}
            </div>
            <div className="relative  col-span-1 ">
              <Image
                src={burgers}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="pb-[140px] z-2 w-full h-full relative flex  items-end justify-center">
                <div className="w-full">
                  <h1 className="pl-[48px]  text-white font-roboto font-extrabold text-[80px] leading-normal tracking-normal align-left">
                    Burgers
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[140px] h-[1028px]  grid grid-cols-[7fr_8fr]  ">
            <div className=" w-[calc(100%*7/15)] bg-[#00000033] h-[1028px] absolute z-1">
              {" "}
            </div>
            <div className="relative  col-span-1 ">
              <Image
                src={burgers}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="pb-[140px] z-2 w-full h-full relative flex  items-end justify-center">
                <div>
                  <h1 className="pl-[48px] text-white font-roboto font-extrabold text-[80px] leading-normal tracking-normal align-middle">
                    Hot Pot
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-[52px] bg-[#105742] col-span-1 flex items-center justify-center">
              <Card></Card>
            </div>
          </div>
          <div className="mb-[140px] h-[1028px]  grid grid-cols-[8fr_7fr]  ">
            <div className="p-[52px] bg-[#105742] col-span-1 flex items-center justify-center">
              <Card></Card>
            </div>
            <div className="right-0 w-[calc(100%*7/15)] bg-[#00000033] h-[1028px] absolute z-1">
              {" "}
            </div>
            <div className="relative  col-span-1 ">
              <Image
                src={fries}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="pb-[140px] z-2 w-full h-full relative flex  items-end justify-center">
                <div className="w-full">
                  <h1 className="pl-[48px]  text-white font-roboto font-extrabold text-[80px] leading-normal tracking-normal align-left">
                    Sizzling Sides
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[140px] h-[1028px]  grid grid-cols-[7fr_8fr]  ">
            <div className=" w-[calc(100%*7/15)] bg-[#00000033] h-[1028px] absolute z-1">
              {" "}
            </div>
            <div className="relative  col-span-1 ">
              <Image
                src={burgers}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="pb-[140px] z-2 w-full h-full relative flex  items-end justify-center">
                <div>
                  <h1 className="pl-[48px] text-white font-roboto font-extrabold text-[80px] leading-normal tracking-normal align-middle">
                    Burgers
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-[52px] bg-[#105742] col-span-1 flex items-center justify-center">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMenu;
