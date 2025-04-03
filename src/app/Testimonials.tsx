import React from "react";
import testimonials from "@/app/testimonial.json";
import africangirl from "@/../public/images/africangirl.png";
import Image from "next/image";
import Star from "@/../public/images/star.svg";
import Testi from "@/../public/images/testimonials.png";

const starImages = Array(5).fill(africangirl);

function Testimonials() {
  return (
    <div className="pt-[176px] w-full pb-[176px] ">
      <h1 className="mb-[52px] w-full  text-black  mb-2 font-roboto font-bold text-[64px] leading-none tracking-[-2%] text-center  ">
        Client Testimonials
      </h1>
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hidden  mx-[48]   justify-items-center gap-[32px]">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#FBFEFD]  custom-box w-[400px] flex-shrink-0 inline-block max-w-sm overflow-hidden w-[400px] h-[294px]  
            rounded-tl-[32px] rounded-tr-[8px] 
            rounded-br-[32px] rounded-bl-[8px] 
            border-t-[var(--strokeWidth)] 
            p-[16px]"
          >
            <div className="w-full">
              <Image
                src={africangirl}
                height={36}
                width={36}
                alt="African girls outside"
                className="mr-[12px] ml-[16px] inline-block  rounded-[999px] object-cover"
                // layout="fill"
              />
              <p className="inline-block text-[#000000] ffont-roboto font-bold text-[22px] leading-[16px] tracking-[] align-middle">
                {item.name}
              </p>
            </div>
            <div className="w-full ml-[16px] pt-[16px]">
              {starImages.map((image, index) => (
                <Image
                  key={index}
                  src={Star}
                  height={19}
                  width={20}
                  alt="African girls outside"
                  className="inline-block mr-[10px]  inline-block  rounded-[999px] object-cover"
                  // layout="fill"
                />
              ))}
            </div>
            <div className="w-full px-[16px] py-[16px] ">
              <p className="text-[#000000] text-base">{item.paragraph}</p>
            </div>
            <div className="w-full">
              <Image
                src={Testi}
                height={108}
                width={108}
                alt="African girls outside"
                className="mx-[16px]   rounded object-cover"
                // layout="fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
