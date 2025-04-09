import React from "react";
import africangirl from "@/../public/images/africangirl.png";
import Image from "next/image";
import team from "@/app/about/team.json";
import Team from "@/../public/images/team.png";

const starImages = Array(5).fill(africangirl);

function OurTeam() {
  return (
    <div className="pt-[176px] w-full pb-[176px] ">
      <h1 className="mb-[52px] w-full  text-black  mb-2 font-roboto font-bold text-[64px] leading-[52px] tracking-[-0.02em] text-center  ">
        Meet Our Team
      </h1>
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hidden  mx-[48]   justify-items-center gap-[32px]">
        {team.map((item) => (
          <div
            key={item.id}
            className="relative   custom-box flex-shrink-0 inline-block max-w-sm overflow-hidden w-[288px] h-[282px] gap-[18px] pb-[24px] rounded-tl-[56px] rounded-tr-[12px] rounded-br-[56px] rounded-bl-[12px] border border-[1.5px]"
          >
            <Image
              src={item.image}
              alt="Meat on sticks, beef cuts"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            <div className="z-2 w-full h-full relative flex  items-end justify-center">
              <div className="flex justify-center items-center bg-[#FFFFFF] w-[252px] h-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] rounded-tl-[44px] rounded-tr-[8px] rounded-br-[44px] rounded-bl-[8px] pl-[12px] ">
                <div>
                  <h4 className="font-outfit font-semibold text-[15px] leading-[20px] tracking-normal text-[#1B2824]">
                    {item.name}
                  </h4>
                  <h4 className="font-outfit font-normal text-[15px] leading-[20px] tracking-normal text-[#E2231A]">
                    {item.position}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
