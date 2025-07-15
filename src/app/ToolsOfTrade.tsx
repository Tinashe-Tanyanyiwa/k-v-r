import React from "react";
import Image from "next/image";
import braii from "@/../public/images/braii.png";
import buttonback from "@/../public/images/vector3.png";
import tools from "./tools.json";

function ToolsOfTrade() {
  return (
    <div className="pb-[176px]">
      <div>
        <h1 className="text-black  font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center">
          Tools of the Trade
        </h1>
        <p className="px-[320px] mb-[52px] font-roboto font-medium text-[22px] leading-normal tracking-[-0.02em] text-center  text-[#E2231A]">
          Gather round, stoke the coals, and cook with purpose. From campfire
          classics to backyard feasts, every tool has a story.
        </p>
      </div>
      <div className="flex whitespace-nowrap overflow-auto scrollbar-hide justify-center items-center gap-4 mb-[72px] ">
        {tools.map((item) => (
          <div key={item.id} className=" flex-shrink-0 col-span-1">
            <div className="w-[420px]  gap-4 rounded-[1px] p-4 bg-gray-200">
              <div className="">
                <div className="flex justify-end  ">
                  <div className="my-[16px] mr-[16px] absolute h-[32px]   gap-[10px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] rounded-[18px] bg-black">
                    <p className="text-white font-roboto font-medium text-[14px] leading-[16.8px] tracking-[-0.02em]">
                      {item.brandname}
                    </p>
                  </div>
                </div>
                {/* <div className=""> */}
                <div className="w-[388px] h-[432px] flex align-center justify-center">
                  <Image
                    src={item.image}
                    height={432}
                    width={388}
                    alt="African girls outside"
                    className="mr-[12px] ml-[16px] rounded-md object-contain  h-auto"
                    // layout="fill"
                  />
                </div>
              </div>
              <div className="mt-[16px]">
                <h1 className="text-[#B11D1D] font-roboto font-medium text-[28px] leading-[39.2px] text-center">
                  ${item.price}
                </h1>
                <h3 className="mt-[4px] text-center text-black font-roboto font-medium text-[20px] leading-[32px] ">
                  {item.description}
                </h3>
              </div>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className={` flex align-center justify-center mb-[50px]`}>
        <button className="relative text-white  w-[440px] h-[62px] rounded-[4px] py-[14px] px-[32px]">
          <Image
            src={buttonback}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <p className="font-roboto font-normal text-[22px] leading-[1] tracking-[0] align-middle text-white z-1 relative">
            Tools of the Trade
          </p>
        </button>
      </div>
    </div>
  );
}

export default ToolsOfTrade;
