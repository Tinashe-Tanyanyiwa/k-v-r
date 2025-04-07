import React from "react";
import Navigation from "../Navigation";
import Image from "next/image";
import backgroundcontact from "@/../public/images/contacthero.png";

function Contact() {
  return (
    <div className="w-full relative">
      {/* <Navigation></Navigation> */}
      <div>
        <div className=" relative bg-[#020D0A80] w-full grid grid-cols-1 ">
          <Image
            src={backgroundcontact}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 "
          />
          <div className="mt-[214px] mx-[254px] col-span-1  ">
            <div className="flex align-center justify-center">
              <div className="  px-[17px]  w-[931.8px] h-[741.4px] ">
                <div className="mx-[32px]  relative flex  items-center justify-center">
                  <div>
                    <h1 className="mb-[50px] font-roboto font-bold text-6xl leading-[86px] tracking-[-0.5px] text-center">
                      Contact Us
                    </h1>
                    <p className="mb-[28px] font-roboto font-medium text-[20px] leading-none tracking-1percent text-center">
                      Mon-Fri: 11am - 10pm, Sat-Sun: 9am - 11pm
                    </p>
                    <p className="font-roboto font-medium text-[20px] leading-none tracking-1percent text-center">
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
