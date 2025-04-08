import React from "react";
import Phone from "@/../public/images/phone.svg";
import WhatsApp from "@/../public/images/whatsapp.svg";
import Email from "@/../public/images/mail.svg";
import Image from "next/image";

function GetInTouch() {
  return (
    <div>
      <div className="h-[698px] relative  w-full grid grid-cols-1 ">
        <div className=" mt-[82px] mb-[116px] mx-[254px] col-span-1  ">
          <h1 className="text-black mb-[18px] font-roboto font-semibold text-[64px] leading-[100%] tracking-normal text-center">
            Get in Touch
          </h1>
          <p className="mx-[322px] mb-[50px] text-black font-roboto font-medium text-[22px] leading-[24px] tracking-normal text-center">
            We are here to help you with any inquiries or support you need.
            Reach out to us through any of the contact methods below.
          </p>
          <div className="w-full flex align-center justify-center">
            <div className="gap-[36px] flex justify-around items-center mb-[160px]">
              <div
                className="w-[200px] h-[172px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
             border-2 border-[#1B2824B8] 
            p-[18px] 
            bg-[#F4F4F4] 
            "
              >
                {" "}
                <div className="flex justify-center w-full">
                  <Image
                    src={Phone}
                    height={39}
                    width={39}
                    alt="African girls outside"
                    className="mr-[12px] ml-[16px] s "
                    // layout="fill"
                  />
                </div>
                <p className="mt-[12px] mb=[4px] w-full text-center text-black font-roboto font-semibold text-[18px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  Phone
                </p>
                <p className="mt-[12px]  w-full text-center text-black font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%]">
                  {" "}
                  +263 776 890 765
                </p>
                <p className="mt-[4px] mb=[4px] w-full text-center text-black font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  +263 776 890 765
                </p>
              </div>
              <div
                className="w-[200px] h-[172px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
             border-2 border-[#1B2824B8] 
            p-[18px] 
            bg-[#F4F4F4] 
            "
              >
                {" "}
                <div className="flex justify-center w-full">
                  <Image
                    src={WhatsApp}
                    height={40}
                    width={40}
                    alt="African girls outside"
                    className="mr-[12px] ml-[16px] s "
                    // layout="fill"
                  />
                </div>
                <p className="mt-[12px] mb=[4px] w-full text-center text-black font-roboto font-semibold text-[18px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  WhatsApp
                </p>
                <p className="mt-[12px]  w-full text-center text-black font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  +263 776 890 765
                </p>
              </div>
              <div
                className="w-[200px] h-[172px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
             border-2 border-[#1B2824B8] 
            p-[18px] 
            bg-[#F4F4F4] 
            "
              >
                {" "}
                <div className="flex justify-center w-full">
                  <Image
                    src={Email}
                    height={40}
                    width={40}
                    alt="African girls outside"
                    className="mr-[12px] ml-[16px] s "
                    // layout="fill"
                  />
                </div>
                <p className="mt-[12px] mb=[4px] w-full text-center text-black font-roboto font-semibold text-[18px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  Phone
                </p>
                <p className="mt-[12px]  w-full text-center text-black font-roboto font-normal text-[16px] leading-[20px] tracking-[-0.5%] align-middle">
                  {" "}
                  Kavarakavara.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
