import React from "react";
import Image from "next/image";
import aboutUs from "@/../public/images/aboutUs.png";
import green from "@/../public/images/green.png";
import chefs from "@/../public/images/chefs.png";
import meat from "@/../public/images/meat.png";
import campfire from "@/../public/images/campfire.png";

function AboutTwo() {
  return (
    <div className=" pt-[176px]  w-full px-[48px]">
      <div className=" h-[433px]  grid grid-cols-3 z-1   ">
        <div className="relative h-full p-[52px] bg-black col-span-1  ">
          <Image
            src={meat}
            alt="Chefs cooking"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="relative h-full bg-[#0D4737] col-span-1 flex justify-start">
          <Image
            src={green}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className=" py-[150px] px-[52px] relative ">
            <h1 className="mb-[12px] text-white font-roboto font-bold text-[36px] leading-tight tracking--2 text-center align-middle">
              Nature's Embrace
            </h1>
            <p className="text-white font-roboto font-normal text-[24px] leading-display-small tracking--2 text-center align-middle">
              Out here, we cook with flame – not just for the heat, but for the
              connection it sparks. No shortcuts, just fire, smoke, and time.
            </p>
          </div>
        </div>
        <div className="h-full relative p-[52px] bg-black col-span-1  ">
          <Image
            src={meat}
            alt="Chefs cooking"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
      </div>
      <div className=" h-[433px]  grid grid-cols-3 z-1   ">
        <div className="relative bg-[#0D4737] col-span-1 flex justify-start">
          <Image
            src={green}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="py-[150px] px-[52px] relative ">
            <h1 className="mb-[12px] text-white font-roboto font-bold text-[36px] leading-tight tracking--2 text-center align-middle">
              The Fire's Lesson
            </h1>
            <p className="   text-white font-roboto font-normal text-[24px] leading-display-small tracking--2 text-center align-middle">
              Tenderness wasn't given. It was earned. Through countless trials,
              we learned the subtle dance of heat and time.
            </p>
          </div>
        </div>
        <div className="relative p-[52px] bg-black col-span-1  ">
          <Image
            src={chefs}
            alt="Meat on grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="relative bg-[#0D4737] col-span-1 flex justify-start">
          <Image
            src={green}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="py-[150px] px-[52px] relative ">
            <h1 className="mb-[12px] text-white font-roboto font-bold text-[36px] leading-tight tracking--2 text-center align-middle">
              The Fire's Lesson
            </h1>
            <p className="   text-white font-roboto font-normal text-[24px] leading-display-small tracking--2 text-center align-middle">
              Tenderness wasn't given. It was earned. Through countless trials,
              we learned the subtle dance of heat and time.
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[441px]  grid grid-cols-3 z-1   ">
        <div className="relative p-[52px] bg-black col-span-1  ">
          <Image
            src={campfire}
            alt="Chefs cooking"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="relative bg-[#0D4737] col-span-1 flex justify-start">
          <Image
            src={green}
            alt="Outdoor food market grill"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="py-[150px] px-[52px] relative ">
            <h1 className="mb-[12px] text-white font-roboto font-bold text-[36px] leading-tight tracking--2 text-center align-middle">
              The Shared Feast
            </h1>
            <p className="   text-white font-roboto font-normal text-[24px] leading-display-small tracking--2 text-center align-middle">
              This isn't just food. It's the joy of creation, the thrill of the
              grill, shared with those who savor it.
            </p>
          </div>
        </div>
        <div className="relative p-[52px] bg-black col-span-1  ">
          <Image
            src={chefs}
            alt="Chefs cooking"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;
