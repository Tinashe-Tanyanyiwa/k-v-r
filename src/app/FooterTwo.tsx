import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import WhatsApp from "@/../public/images/whitewhatsapp.svg";
import Facebook from "@/../public/images/whitefacebook.svg";
import Instagram from "@/../public/images/instagram.svg";
import phone from "@/../public/images/phone.svg";
import whatsapp from "@/../public/images/whatsapp.svg";
import mail from "@/../public/images/mail.svg";

function FooterTwo() {
  return (
    <div className=" pt-[52px] bg-[#000000] w-full  ">
      <div className="">
        <div className="px-[48px]    grid grid-cols-3 z-1">
          <div className=" col-span-1 z-1 ">
            <div className="flex justify-center items-center ">
              <Image
                src={logo}
                width={300}
                height={40}
                alt="Kavara Kavara Logo"
              />
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[352px] my-[32px] ">
                <p className=" font-roboto font-normal text-lg leading-[27px] tracking-normal text-center text-justify text-white">
                  Kavara Kavara is your ultimate destination for scrumptious
                  grilled and smoked dishes, ideal for any gathering. We pride
                  ourselves on delivering tantalizing flavors that keep your
                  guests happy and engaged in conversation and laughter! Whether
                  you're throwing a backyard barbecue or organizing a corporate
                  event, we're always ready to provide you with the finest
                  culinary experience.
                </p>
              </div>
            </div>
            <div className="mr-[48px] flex items-center gap-[24px] justify-center ">
              <Image
                src={WhatsApp}
                height={30}
                width={30}
                alt="African girls outside"
                className="inline-block  "
                // layout="fill"
              />
              <Image
                src={Facebook}
                height={30}
                width={30}
                alt="African girls outside"
                className="inline-block "
                // layout="fill"
              />
              <Image
                src={Instagram}
                height={30}
                width={30}
                alt="African girls outside"
                className="inline-block"
                // layout="fill"
              />
            </div>
          </div>
          <div className=" col-span-1 z-1 max-h-0">
            <div className=" w-full gap-[52px] ">
              <h2 className="text-center font-roboto font-bold text-xl leading-[100%] tracking-normal">
                Useful Links
              </h2>
              <p className=" text-center  my-[32px]  text-[#E2231A] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
                Home
              </p>

              <p className=" text-center my-[32px] text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
                Menu
              </p>
            </div>
          </div>
          <div className=" col-span-1 z-1 max-h-0">
            <div className="flex justify-center items-center">
              <div>
                <div className="flex justify-center items-center ">
                  <h2 className="mb-[32px] font-roboto font-bold text-xl leading-[100%] tracking-normal">
                    Contact Us
                  </h2>
                </div>
                <div className=" grid gap-y-[22px]">
                  <div className="w-full flex justify-left items-center ">
                    <div>
                      <Image
                        src={phone}
                        width={23}
                        height={23}
                        className="inline-block"
                        alt=" Kavara Kavara Logo"
                      />
                      <p className="ml-[12px] inline-block text-center text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
                        +263 776 890 765
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-left items-center ">
                    <div>
                      <Image
                        src={mail}
                        width={23}
                        height={23}
                        className="inline-block"
                        alt=" Kavara Kavara Logo"
                      />
                      <p className="ml-[12px] inline-block text-center  text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
                        kavarkavar.info
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-left items-center ">
                    <div>
                      <Image
                        src={whatsapp}
                        width={23}
                        height={23}
                        className="inline-block"
                        alt=" Kavara Kavara Logo"
                      />
                      <p className="ml-[12px] inline-block text-center  text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
                        +263 776 890 765
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[32px] mb-[52px] px-[48px] pt-[52px]   grid grid-cols-1 z-1">
          <div className=" col-span-1 z-1 ">
            <p className="text-white text-center">
              © 2025 Kavara Kavara. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
