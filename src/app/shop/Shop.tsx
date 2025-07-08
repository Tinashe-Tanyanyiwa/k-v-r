import React from "react";
import Image from "next/image";
import grillingtool from "@/../public/images/grillingtool.png";
import toolstwo from "./toolstwo.json";

function Shop() {
  return (
    <div className=" pt-[140px] pb-[52px] w-full ">
      <div>
        <h1 className="text-black  font-roboto font-bold text-[72px] leading-[86px] tracking-[-0.5px] text-center">
          Built for the Fire. Crafted for the Flavor
        </h1>
        <p className="px-[320px] mb-[72px] font-roboto font-medium text-[22px] leading-normal tracking-[-0.02em] text-center  text-[#E2231A]">
          Our handpicked grilling gear blends rugged quality with fiery passion
          – made for serious grillers and smoky dreamers alike.
        </p>
      </div>
      <div className="  grid grid-cols-3 z-1   ">
        {toolstwo.map((item) => (
          <div
            key={item.id}
            className="relative col-span-1 flex justify-center"
          >
            <div className="w-[420px]  gap-4 rounded-[1px] p-4 bg-[#105742] relative">
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
              <h1 className="absolute bottom-0 left-0 p-2 text-white font-roboto font-bold text-[60px] leading-[86px] tracking-[-0.5px]">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
