import React from "react";
import Image from "next/image";
import aboutUs from "@/../public/images/aboutUs.png";
import grill from "@/../public/images/grill.png";

function GrillJourney() {
  return (
    <div className=" py-[176px] w-full ">
      <div className="mx-[48px] h-[624px]  grid grid-cols-2 z-1   ">
        <div className="relative col-span-1 ">
          <Image
            src={grill}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="p-[52px] bg-[#105742] col-span-1  ">
          <h1 className="text-white font-roboto font-bold text-5xl leading-[68px] tracking-[-0.02em] text-center">
            Our Grilling Journey: From Basics to Brilliance
          </h1>
          <p className=" py-[52] font-roboto font-normal text-xl leading-8 tracking-normal text-white text-justify">
            Our grilling adventure began with a passion for outdoor cooking. It
            started with curiosity and the ambition to craft the ultimate
            grilled dishes. We concentrated on mastering the fundamentals,
            ensuring our meats were always tender and juicy. As we gained
            confidence, we experimented with various spices and seasonings to
            develop unique flavors. Our guiding principle has always been 'keep
            trying,' which encourages us to face challenges head-on and learn
            from our experiences, driving us to improve with each attempt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrillJourney;
