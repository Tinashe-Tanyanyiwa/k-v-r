import React from "react";
import menuitems from "@/app/menuitems.json";
import menuMeat from "@/../public/images/menumeat.png";
import Image from "next/image";
import meats from "@/app/meats.json";
import burgers from "@/app/burgers.json";
import hotpot from "@/app/hotpot.json";
import sizzsidedish from "@/app/sizzsidedish.json";
import grillButton from "@/../public/images/grillButton.png";

function MenuTwo() {
  return (
    <div className=" pt-[140px] w-full ">
      {/* <h1 className="] w-full  text-black  mb-[80px] font-roboto font-bold text-[48px] leading-[57.6px] tracking--0.5 text-center  ">
        Taste The Sizzle
      </h1> */}
      <div>
        <h1 className="text-black  font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center">
          Taste the Sizzle
        </h1>
        <p className="px-[320px] mb-[72px] font-roboto font-medium text-[22px] leading-normal tracking-[-0.02em] text-center  text-[#E2231A]">
          Grilled to perfection, smoked to capture every flavor – our menu is a
          celebration of fire and the finest ingredients. It’s more than just
          food. It’s a way of life.
        </p>
      </div>
      <div className="mb-[44px] mx-[48px] gap-[24px] grid justify-center  grid-cols-2    ">
        <div className=" items-center justify-center  col-span-1 ">
          {" "}
          <h3 className=" w-full  text-black  mb-2 font-roboto font-bold text-3xl leading-[46.8px] tracking-tight  ">
            Savory Grilled Meats
          </h3>
        </div>
        <div className=" items-center flex justify-end col-span-1 ">
          <div className={` flex align-center justify-center `}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={grillButton}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white font-roboto font-normal text-2xl leading-none tracking-normal align-middle z-1 relative">
                See the Whole Grill
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[100px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {meats.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center  rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="">
                <div className="w-full h-[453px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full "
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 ">
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
          <div className={` flex align-center justify-center `}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={grillButton}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white font-roboto font-normal text-2xl leading-none tracking-normal align-middle z-1 relative">
                See the Whole Grill
              </p>
            </button>
          </div>
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
                <div className="w-full h-[453px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full "
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 ">
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
          <div className={` flex align-center justify-center `}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={grillButton}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white font-roboto font-normal text-2xl leading-none tracking-normal align-middle z-1 relative">
                See the Whole Grill
              </p>
            </button>
          </div>
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
                <div className="w-full h-[453px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full "
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 ">
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
          <div className={` flex align-center justify-center `}>
            <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
              <Image
                src={grillButton}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <p className="text-white font-roboto font-normal text-2xl leading-none tracking-normal align-middle z-1 relative">
                See the Whole Grill
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[176px] mx-[48px] gap-[24px] grid justify-center  grid-cols-3    ">
        {sizzsidedish.map((item) => (
          <div
            key={item.id}
            className=" items-center justify-center  col-span-1  "
          >
            <div className="w-full flex justify-center place-center rounded-tl-[52px] rounded-tr-[16px] rounded-br-[52px] rounded-bl-[16px] ">
              <div className="w-full">
                <div className="w-full h-[453px] relative">
                  <Image
                    src={item.image}
                    layout="fill"
                    objectFit="cover"
                    className="h-[336px] w-full "
                    alt="A perfectly grilled steak with grill marks"
                  />
                </div>
                <div className="bg-black w-full  gap-3  pr-5 pb-5 pl-5 ">
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
