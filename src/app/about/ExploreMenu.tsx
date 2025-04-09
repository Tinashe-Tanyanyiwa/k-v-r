import React from "react";
import Image from "next/image";
import dish from "@/../public/images/dish.png";

function ExploreMenu() {
  return (
    <div className="w-full pb-[224px] relative">
      <div>
        <div className=" w-full bg-[#00000033] h-[698px] absolute z-1"> </div>
        <div className="h-[698px] relative  w-full grid grid-cols-1 ">
          <Image
            src={dish}
            alt="A platter of assorted grilled and smoked meats garnished with herbs on a rustic wooden table."
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
          <div className="z-2 mt-[214px] mx-[254px] col-span-1  ">
            <div className="flex align-center justify-center">
              <div className="  px-[17px]   h-[741.4px] ">
                <div className="mx-[32px]  relative flex  items-center justify-center">
                  <div>
                    <h1 className="mb-[50px] font-roboto font-bold text-[92px] leading-[120px] tracking-[-0.02em] text-center">
                      Explore our menu and find your favorite dish!
                    </h1>
                    <div className="flex align-center justify-center">
                      <button className=" w-[156px] h-[48px] pt-[12px] pr-[28px] pb-[12px] pl-[28px] rounded-[8px] bg-[#E2231A]">
                        View Menu
                      </button>
                    </div>
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

export default ExploreMenu;
