import React from "react";
import Image from "next/image";
import faq from "@/../public/images/faq.png";
import Down from "@/../public/images/down.svg";
import faqjs from "@/app/contact/faq.json"

function FAQ() {
  return (
    <div className="w-full">
      <div className="mx-[48px] pb-[226px] pt-[96px] relative grid grid-cols-2 ">
        <div className=" flex justify-left items-center col-span-1  ">
          {" "}
          <div className="w-[512px] h-[400px] bg-[#020D0A80]  absolute z-1">
            {" "}
          </div>
          <div className="flex align-center justify-center">
            <div className="relative  px-[17px]  w-[512px] h-[400px] ">
              <Image
                src={faq}
                alt="Meat on sticks, beef cuts"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="z-2 w-full h-full relative flex  items-center justify-center">
                <div>
                  <h1 className="text-white pl-[12px] font-roboto font-semibold text-[48px] leading-[52px] tracking-normal text-left">
                    Frequently Asked Questions
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  col-span-1  ">
          <div className="w-full">
            <div id="accordion-collapse" data-accordion="collapse">
              {faqjs.map((item) => (
                <div  key={item.id}>
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5  w-[646px] h-[80px]  pt-[28px] pb-[28px] border-t-[1.5px] border-t-[#496E6333]"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                    >
                      <div>
                        <p className=" mr-[4px] text-[#000000] inline-block font-roboto font-semibold text-[22px] leading-[24px] tracking-normal">
                         {item.question}
                        </p>
                        <p className="text-[#000000] inline-block font-roboto font-normal text-[18px] leading-[24px] tracking-normal">
                        {item.hint}
                        </p>
                      </div>

                      <Image
                        src={Down}
                        height={6}
                        width={12}
                        alt="African girls outside"
                        className="inline-block "
                        // layout="fill"
                      />
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        hello world
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
