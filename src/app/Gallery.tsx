import React from "react";
import Image from "next/image";
import galleryOne from "@/../public/images/gallery1.png";
import galleryTwo from "@/../public/images/gallery2.png";
import galleryThree from "@/../public/images/gallery3.png";
import galleryFour from "@/../public/images/gallery4.png";

function Gallery() {
  return (
    <div className="pt-[176px] w-full ">
      <h1 className="mb-[32px] w-full  text-black  mb-2 font-roboto font-bold text-[64px] leading-none tracking-[-2%] text-center  ">
        Our Gallery
      </h1>
      <div className="mx-[48] grid grid-cols-2 md:grid-cols-3  justify-items-center gap-0">
        {/* <div className="grid gap-4"> */}
        <div className="w-full h-[400px]">
          <Image
            src={galleryOne}
            height={400}
            width={400}
            alt="Outdoor food market grill"
            className="h-full w-full object-cover"
            // layout="fill"
          />
        </div>
        <div className="w-full h-[400px]">
          <Image
            src={galleryTwo}
            height={400}
            width={400}
            alt="Outdoor food market grill"
            className="h-[400px] w-full object-cover"
            // layout="fill"
          />
        </div>
        <div className="w-full h-[400px]">
          <Image
            src={galleryTwo}
            height={422}
            width={400}
            alt="Outdoor food market grill"
            className="h-full w-full object-cover"
            // layout="fill"
          />
        </div>
      </div>
      <div className="mx-[48] grid grid-cols-2 md:grid-cols-2  mb-[16px]  justify-items-center gap-0">
        <div className="w-full h-[400px]">
          <Image
            src={galleryThree}
            height={422}
            width={400}
            alt="Outdoor food market grill"
            className="h-full w-full object-cover"
            // layout="fill"
          />
        </div>
        <div className="w-full h-[400px]">
          <Image
            src={galleryFour}
            height={422}
            width={400}
            alt="Outdoor food market grill"
            className="h-full w-full object-cover"
            // layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
