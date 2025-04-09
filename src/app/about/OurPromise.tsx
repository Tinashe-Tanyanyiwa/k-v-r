import React from "react";
import Image from "next/image";
import promise from "@/../public/images/promise.png";

function OurPromise() {
  return (
    <div className="w-full relative">
      <div>
        <div className="w-full bg-[#00000085] h-[698px] absolute z-1"> </div>
        <div className="h-[698px] relative  w-full grid grid-cols-1 ">
          <Image
            src={promise}
            alt="a platter of grilled, tender, bbq plate "
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
                      Our promise
                    </h1>
                    <p className="mb-[28px] font-roboto font-bold text-[32px] leading-[1] tracking-[-0.02em] text-center">
                      We promise backyard moments that sizzle with joy. To
                      create unforgettable grilled dining experiences, one bite
                      at a time
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

export default OurPromise;
