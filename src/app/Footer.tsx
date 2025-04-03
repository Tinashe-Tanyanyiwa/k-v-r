import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo2.png";
import WhatsApp from "@/../public/images/whitewhatsapp.svg";
import Facebook from "@/../public/images/whitefacebook.svg";
import Instagram from "@/../public/images/instagram.svg";

function Footer() {
  return (
    <div className="flex justify-between  w-full bg-[#1B2824] h-[112px]">
      <div className="ml-[48px] flex items-center justify-center">
        {" "}
        <Image src={logo} width={162} height={48} alt="Kavara Kavara Logo" />
      </div>
      <div className="inline-block ">
        <div className="h-full w-full gap-[52px] flex items-center justify-center">
          <p className=" inline-block text-center  my-[32px]  text-[#E2231A] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
            Home
          </p>
          <p className="inline-block text-center my-[32px]  text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
            Menu
          </p>
          <p className="inline-block text-center my-[32px] text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
            About Us
          </p>
          <p className="inline-block text-center  my-[32px]  text-[white] text-base font-roboto font-medium text-[16px] leading-[20px] tracking-[]">
            Contact Us
          </p>
        </div>
      </div>
      <div className="inline-block">
        <div className="mr-[48px] flex items-center gap-[24px] justify-center h-full w-full">
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
    </div>
  );
}

export default Footer;
