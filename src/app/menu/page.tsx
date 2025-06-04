import React from "react";
import Navigation from "../Navigation";
import Menu from "./Menu";
import ExploreMenu from "./ExploreMenu";
import BringFHome from "./BringFHome";
import Services from "../Services";
import FooterTwo from "../FooterTwo";
import HeroTwo from "../HeroTwo";

function page() {
  return (
    <div className="h-[100vh] bg-white items-center justify-items-center min-h-screen">
      <Navigation></Navigation>
      {/* <Menu></Menu> */}
      <HeroTwo></HeroTwo>
      <ExploreMenu></ExploreMenu>
      <BringFHome></BringFHome>
      <Services></Services>
      <FooterTwo></FooterTwo>
    </div>
  );
}

export default page;
