import React from "react";
import About from "./About";
import Navigation from "../Navigation";
import Services from "../Services";
import GrillJourney from "./GrillJourney";
import GrillMasterPro from "./GrillMasterPro";
import OurPromise from "./OurPromise";
import OurTeam from "./OurTeam";
import ExploreMenu from "./ExploreMenu";
import FooterTwo from "../FooterTwo";

function page() {
  return (
    <div className=" bg-white items-center justify-items-center min-h-screen">
      <Navigation></Navigation>
      <About></About>
      <Services></Services>
      <GrillJourney></GrillJourney>
      <GrillMasterPro></GrillMasterPro>
      <OurPromise></OurPromise>
      <OurTeam></OurTeam>
      <ExploreMenu></ExploreMenu>
      <FooterTwo></FooterTwo>
    </div>
  );
}

export default page;
