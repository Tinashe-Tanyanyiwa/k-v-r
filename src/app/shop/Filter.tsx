import React from "react";
import Image from "next/image";
import plus from "@/../public/images/plus.svg";
import filters from "./filters.json";
import filteredtools from "./filteredtools.json";

function Filter() {
  return (
    <div className="mx-[48px]">
      <div className="mb-[140px]  w-[100%]">
        <div className=" grid grid-cols-12 mb-[33px]  ">
          <div className=" col-span-3 flex justify-center items-center">
            <h3 className="  font-roboto font-medium text-[22px] leading-tight tracking-[0.5%]  h-[26px] opacity-100">
              Filter by
            </h3>
          </div>
          <div className=" col-span-9 flex justify-around items-center">
            <h3 className="text-center font-roboto font-normal text-[18px] leading-[27px] tracking-[0%]  h-[26px] opacity-100">
              Clear filters
            </h3>
            <h3 className="text-center font-roboto font-medium text-[18px] leading-[27px] tracking-[0%]  h-[26px] opacity-100">
              Hide filter
            </h3>
            <h3 className="text-center ont-public-sans font-normal text-[15px] leading-[20px] tracking-[-0.5%] text-right h-[26px] opacity-100">
              27 items
            </h3>
          </div>
        </div>
        <div className=" grid grid-cols-12  gap-[32px]  ">
          <div className=" col-span-3 justify-center   w-[100%]">
            <div className="grid w-[100%]">
              {filters.map((item) => (
                <div
                  key={item.id}
                  className="flex mb-[24px] justify-between  w-[100%]"
                >
                  <p className="font-roboto font-medium text-[22px] leading-tight tracking-[0.5%] h-[26px] opacity-100">
                    {item.name}
                  </p>
                  <Image
                    src={plus}
                    height={30}
                    width={30}
                    alt="African girls outside"
                    className="inline-block  "
                    // layout="fill"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" col-span-9 flex justify-around items-center">
            <div className=" grid grid-cols-12 gap-[24px] w-[100%] ">
              {filteredtools.map((item) => (
                <div key={item.id} className=" flex-shrink-0 col-span-4">
                  <div className="w-[420px] h-[594px] gap-4 rounded-[1px] p-4 bg-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
