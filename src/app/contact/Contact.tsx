import React from "react";
import Image from "next/image";
import backgroundcontact from "@/../public/images/contacthero.png";

function Contact() {
  return (
    <div className="w-full relative">
      <div>
        <div className="w-full bg-[#020D0A80] h-[698px] absolute z-1"> </div>
        <div className="h-[698px] relative  w-full grid grid-cols-1 ">
          <Image
            src={backgroundcontact}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
          <div className="z-2 mt-[214px] mx-[254px] col-span-1  ">
            <div className="flex align-center justify-center">
              <div className="  px-[17px]  w-[931.8px] h-[741.4px] ">
                <div className="mx-[32px]  relative flex  items-center justify-center">
                  <div>
                    <h1 className="mb-[50px] font-roboto font-semibold italic text-[124px] leading-[100%] tracking-normal text-center">
                      Contact Us
                    </h1>
                    <p className="mb-[28px] font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%] text-center">
                      Mon-Fri: 11am - 10pm, Sat-Sun: 9am - 11pm
                    </p>
                    <p className="font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%] text-center">
                      We're ready to be wherever you need us!
                    </p>
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

export default Contact;
