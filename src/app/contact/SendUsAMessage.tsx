import React from "react";

function SendUsAMessage() {
  return (
    <div className="w-full bg-[#105742]">
      <div className="pb-[48px] pt-[96px] relative  w-full grid grid-cols-2 ">
        <div className=" flex justify-center items-center col-span-1  ">
          {/* <div className="w-full h-full"> */}
          <div className="w-full">
            <h2 className=" mb-[36px] w-full  text-white  inline-block font-roboto font-bold text-[34px] leading-[40px] tracking-[-2%] text-center">
              {" "}
              Send Us A Message
            </h2>
            <form className="mx-[60px]">
              <div className="flex justify-center items-center gap-[20px] w-[100%] mb-[16px]">
                <input
                  className="text-[#00000099] font-outfit font-normal text-[15px] leading-[20px] tracking-normal leading-[20px] tracking-[-0.5%] inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#CFDBD6] "
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                ></input>
                <input
                  className="text-[#00000099] font-outfit font-normal text-[15px] leading-[20px] tracking-normal inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#CFDBD6]"
                  id="surname"
                  type="text"
                  placeholder="Last name"
                ></input>
              </div>
              <input
                className="text-[#00000099] font-outfit font-normal text-[15px] leading-[20px] tracking-[-0.5%] mb-[16px] inline-block w-full h-[48px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#CFDBD6]"
                id="email"
                type="text"
                placeholder="Email"
              ></input>
              <div className="inline-block w-full">
                <input
                  className="text-[#00000099] font-outfit font-normal text-[15px] leading-[20px] tracking-[-0.5%] mb-[20px] w-full  h-[124px] min-h-[72px] gap-2 p-[14px] rounded-[16px]  bg-[#CFDBD6]"
                  id="message"
                  type="text"
                  placeholder="Message (optional)"
                ></input>
              </div>
              <div className="w-full flex justify-center items-center ">
                <button className=" primaryredbackground w-[400px] h-[44px] rounded-[16px] py-[14px] px-[32px] flex justify-center items-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" col-span-1 flex justify-center items-center">
          <div className=" w-[646px]  max-w-[800px] gap-[24px] border-b-[var(--strokeWidth)] rounded-tl-[64px] rounded-tr-[16px] rounded-br-[64px] rounded-bl-[16px] p-[32px] bg-[#739788]">
            <div>
              <h2 className="mt-[41px] mb-[24px] w-full  text-[#183C37]  inline-block font-roboto font-bold text-[44px] leading-none tracking-normal text-center">
                {" "}
                Get the latest news and offers
              </h2>
              <p className="font-roboto font-normal text-[22px] leading-none tracking-normal text-center  my-[32px]  text-[#183C37] text-base">
                Join our vibrant community by subscribing to our newsletter!
                Stay informed with the latest updates, exclusive insights, and
                special offers delivered straight to your inbox.
              </p>
              <div className="w-full flex justify-center items-center ">
                <input
                  className="text-[#00000099] font-outfit font-normal text-[15px] leading-[20px] tracking-[-0.5%] mb-[16px] inline-block w-[400px] h-[44px] min-h-[44px] gap-2 p-[14px] rounded-[16px]  bg-[#CFDBD6]"
                  id="email"
                  type="text"
                  placeholder="Email address"
                ></input>
              </div>
              <div className="w-full flex justify-center items-center ">
                <button className=" primaryredbackground w-[400px] h-[44px] rounded-[16px] py-[14px] px-[32px] flex justify-center items-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendUsAMessage;
