import React from "react";
import Image from "next/image";
import aboutUs from "@/../public/images/aboutUs.png";

function About() {
  return (
    <div className=" pt-[300px] w-full ">
      <div className=" h-[698px]  grid grid-cols-2 z-1   ">
        <div className="p-[52px] bg-black col-span-1  ">
          <h1 className="text-whiteont-roboto font-bold text-[64px] leading-none tracking-[-2%] text-center">
            Kavara Kavara
          </h1>
          <p className=" py-[52] font-roboto font-normal text-[32px] leading-[52px] tracking-[-2%] text-justify text-white">
            Kavara Kavara is where the art of grilling meets the passion for
            flavor. Our menu features a delightful array of grilled and smoked
            meats, crafted with the finest ingredients and served in a warm,
            inviting atmosphere. Join us for an unforgettable dining experience
            that celebrates the joy of good food and great company.
          </p>
          <div className="flex justify-center">
            <button className=" font-roboto font-medium text-base leading-6 primaryredbackground w-[208px] h-[52px] rounded-[16px] py-[14px] px-[32px]">
              View Menu
            </button>
          </div>
        </div>
        <div className="relative col-span-1 flex justify-start">
          <Image
            src={aboutUs}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
