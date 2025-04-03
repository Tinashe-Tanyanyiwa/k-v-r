import React from "react";
import Image from "next/image";
import Phone from "@/../public/images/phone.svg";
import WhatsApp from "@/../public/images/whatsapp.svg";
import Email from "@/../public/images/email.svg";

function Contact() {
  return (
    <div className=" w-full pb-[176px] ">
      <div className="mx-[48]  grid grid-cols-2 md:grid-cols-2  justify-items-center gap-0">
        <div className="bg-[black] w-full h-full flex ">
          <div>
            {" "}
            <h2 className="mt-[96px] mb=[96px] w-full  text-white  inline-blockfont-roboto font-bold text-[34px] leading-[40px] tracking-[-2%] text-center">
              {" "}
              Contact Us
            </h2>
            <p className="font-roboto font-normal text-[20px] leading-[24px] tracking-[] text-center ml-[48px] my-[44px] mr-[64px] text-[white] text-base">
              We are here to help you with any inquiries or support you need.
              Reach out to us through any of the contact methods below.
            </p>
            <div className="flex justify-around items-center mb-[160px]">
              <div
                className="w-[164px] h-[152px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
            pt-[18px] 
            bg-[#FBFEFD] 
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
                className="w-[164px] h-[152px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
            pt-[18px] 
            bg-[#FBFEFD] 
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
                className="w-[164px] h-[152px] 
            rounded-tl-[32px] rounded-tr-[12px] 
            rounded-br-[32px] rounded-bl-[12px] 
            pt-[18px] 
            bg-[#FBFEFD] 
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
        <div className="bg-[#105742] w-full h-full">
          <div></div>{" "}
          <p className="mt-[96px] mb=[96px] w-full  text-white  inline-blockfont-roboto font-bold text-[34px] leading-[40px] tracking-[-2%] text-center">
            {" "}
            Message Us
          </p>
          <p className="font-roboto font-normal text-[20px] leading-[24px] tracking-[] text-center ml-[48px] my-[32px] mr-[64px] text-[white] text-base">
            Get in touch with us for location or inquiries.
          </p>
          <form className="mx-[60px]">
            <div className="flex justify-center items-center gap-[20px] w-[100%] mb-[16px]">
              <input
                className="text-[#FFFFFF] font-roboto font-normal text-[15px] leading-[20px] tracking-[-0.5%] inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#FFFFFF52] "
                id="firstname"
                type="text"
                placeholder="First Name"
              ></input>
              <input
                className="text-[#FFFFFF] font-roboto font-normal text-[15px] leading-[20px] tracking-[-0.5%] inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#FFFFFF52]"
                id="surname"
                type="text"
                placeholder="Surname"
              ></input>
            </div>
            <input
              className="text-[#FFFFFF] font-roboto font-normal text-[15px] leading-[20px] tracking-[-0.5%] mb-[16px] inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#FFFFFF52]"
              id="email"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="font-roboto font-normal text-[15px] leading-[20px] tracking-[-0.5%] mb-[20px] inline-block w-full h-[48px] min-h-[72px] gap-2 p-[14px] rounded-[16px]  bg-[#FFFFFF52]"
              id="message"
              type="text"
              placeholder="Message (optional)"
            ></input>
            <div className="w-full flex justify-center items-center ">
              <button className=" primaryredbackground w-[400px] h-[52px] rounded-[16px] py-[14px] px-[32px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
