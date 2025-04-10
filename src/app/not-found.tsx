import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import four from "@/../public/images/four.png";
import ExploreMenu from "./about/ExploreMenu";
import FooterTwo from "./FooterTwo";

export default function NotFound() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen">
      <Navigation></Navigation>
      <div className="h-[632px] mb-[28px]  w-full grid grid-cols-1 ">
        <div className="  col-span-1 z-1 ">
          <div className="flex align-center justify-center">
            <div className="flex  justify-center px-[17px]  w-full h-[507px] ">
              <div className="mx-[32px]  relative flex  justify-center">
                <div>
                  <div className="mt-[150px] mb-[70px] flex justify-center items-center">
                    <h1 className="inline-block font-roboto font-bold text-[204px] leading-none tracking-[-0.02em] text-black text-center">
                      4
                    </h1>
                    <Image
                      src={four}
                      width={228.75}
                      height={204}
                      alt="404 Logo"
                      className="inline-block mx-[32px]"
                    />
                    <h1 className="inline-block font-roboto font-bold text-[204px] leading-none tracking-[-0.02em] text-black text-center">
                      4
                    </h1>
                  </div>
                  <p className=" mx-[90px] text-black font-roboto font-normal text-[32px] leading-none tracking-[-0.02em] text-center">
                    Uh-oh! It seems we've misplaced the page you wanted. But
                    hey, our mouthwatering grilled and smoked meats are still
                    hot and ready to serve!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[76px]">
        <ExploreMenu></ExploreMenu>
      </div>
      <FooterTwo></FooterTwo>
    </div>
  );
}
