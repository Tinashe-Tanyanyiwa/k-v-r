import React from "react";
import Image from "next/image";
import about from "@/../public/images/about.png";
import grill1 from "@/../public/images/grill1.png";
import grill2 from "@/../public/images/grill2.png";
import grill3 from "@/../public/images/grill3.png";
import grill4 from "@/../public/images/grill4.png";
import grill5 from "@/../public/images/grill5.png";

function GrillMasterPro() {
  return (
    <div className="pb-[176px] pt-[124px] w-full ">
      <h1 className=" w-full  text-black  pb-[52px] font-roboto font-bold text-6xl leading-[68px] tracking-[-0.02em] text-center  ">
        The Grill Master's Process: How We Create Delicious{" "}
      </h1>
      <div className="h-[448px] px-[48px] relative  w-full grid grid-cols-3 ">
        <div className="relative col-span-1  ">
          <Image
            src={grill1}
            alt="outdoor food culture"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </div>
        <div className="bg-[#000000]  col-span-1 flex justify-center items-center ">
          <div>
            <h1 className="text-white pb-[10px] font-roboto font-bold text-[22px] leading-[1] tracking-normal text-center">
              Sourcing the best
            </h1>
            <p className="text-white font-roboto font-normal text-[18px] leading-[1] tracking-normal text-center">
              We select only the highest quality, fresh ingredients.
            </p>
          </div>
        </div>
        <div className=" relative col-span-1  ">
          {" "}
          <Image
            src={grill2}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </div>
      </div>{" "}
      <div className="h-[448px] px-[48px] relative  w-full grid grid-cols-3 ">
        <div className="bg-[#000000]  col-span-1 flex justify-center items-center ">
          <div>
            <h1 className="text-white pb-[10px] font-roboto font-bold text-[22px] leading-[1] tracking-normal text-center">
              Mastering the basics
            </h1>
            <p className="text-white font-roboto font-normal text-[18px] leading-[1] tracking-normal text-center">
              Our focus is on temperature control and grilling technique
            </p>
          </div>
        </div>
        <div className=" relative col-span-1  ">
          {" "}
          <Image
            src={grill3}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </div>
        <div className="bg-[#000000]  col-span-1 flex justify-center items-center ">
          <div>
            <h1 className="text-white pb-[10px] font-roboto font-bold text-[22px] leading-[1] tracking-normal text-center">
              Flavor infusion
            </h1>
            <p className="text-white font-roboto font-normal text-[18px] leading-[1] tracking-normal text-center">
              We carefully select and apply spices and seasoning
            </p>
          </div>
        </div>
      </div>
      <div className="h-[448px] px-[48px] relative  w-full grid grid-cols-3 ">
        <div className="relative col-span-1  ">
          <Image
            src={grill4}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </div>
        <div className="bg-[#000000]  col-span-1 flex justify-center items-center ">
          <div>
            <h1 className="text-white pb-[10px] font-roboto font-bold text-[22px] leading-[1] tracking-normal text-center">
              Quality check
            </h1>
            <p className="text-white font-roboto font-normal text-[18px] leading-[1] tracking-normal text-center">
              We ensure the quality of food before its served
            </p>
          </div>
        </div>
        <div className=" relative col-span-1  ">
          {" "}
          <Image
            src={grill5}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default GrillMasterPro;
