import React from "react";
import Image from "next/image";
import about from "@/../public/images/about.png";
import niggasbrai from "@/../public/images/niggasbrai.png";

function About() {
  return (
    <div className="w-full mb-[347px] relative">
      <div>
        <div className="w-full bg-[#020D0A80] h-[1165px] absolute z-1"> </div>
        <div className="h-[1165px] relative  w-full grid grid-cols-1 ">
          <Image
            src={about}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
          <div className="z-2 mt-[214px] mx-[254px] col-span-1  ">
            <div className="flex align-center justify-center">
              <div className="  px-[17px]  w-[931.8px] h-[600px] ">
                <div className="mx-[32px]  relative flex  items-center justify-center">
                  <div>
                    <h1 className="text-white mb-[50px] font-roboto font-semibold italic text-[124px] leading-[100%] tracking-normal text-center">
                      About Us
                    </h1>
                    <p className="text-white mb-[28px] font-roboto font-semibold italic text-2xl leading-none tracking-normal text-center">
                      Crafting flavors with natural cooking, where sizzles and
                      aroma meet the finest fresh ingredients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[48px] flex items-center justify-center ">
        <div
          className="  absolute justify-center align-center flex w-[1344px]   z-1 flex flex-col items-center bg-black rounded-3xl "
          style={{ top: "600px" }}
        >
          <div className="h-[736px] relative  w-full grid grid-cols-2 ">
            <div className="  col-span-1  ">
              <div className="mx-[44px] my-[64px]">
                <h1 className="text-[#E2231A] mb-[50px] font-roboto font-bold text-4xl leading-none tracking-tight align-middle">
                  Our Story
                </h1>
                <p className="text-white mb-[28px] font-roboto font-normal text-2xl leading-none tracking-tight text-justify">
                  Kavara Kavara kicked off as a cozy family venture launched by
                  two adventurous brothers right in the vibrant heart of Harare.
                  Fueled by our passion for outdoor cooking and a promise to use
                  only the freshest ingredients and natural cooking, we aimed to
                  whip up a dining experience that bursts with the bold flavors
                  of grilled and smoked meats. Fast forward to today, and Kavara
                  Kavara has transformed into a foodie paradise, cherished by
                  locals and visitors alike for its fun outdoorsy atmosphere,
                  lively conversations, laughter echoing through the air,
                  commitment to sustainability, and active role in the
                  community!
                </p>
              </div>
            </div>
            <div className="relative col-span-1  ">
              <Image
                src={niggasbrai}
                alt="2 african grill masters  grilling meat outdoors from a distance showcasing outdoor culture "
                layout="fill"
                objectFit="cover"
                className="rounded-3xl absolute inset-0 "
              />
              <div className="absolute inset-0 bg-[linear-gradient(88.68deg,#000000_-2.84%,rgba(0,0,0,0)_98.88%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
