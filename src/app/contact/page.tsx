import React from "react";
import Contact from "./Contact";
import Navigation from "../Navigation";
import GetInTouch from "./GetInTouch";
import SendUsAMessage from "./SendUsAMessage";
import FAQ from "./FAQ";
import FooterTwo from "../FooterTwo";

function page() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen ">
      <Navigation></Navigation>
      <Contact></Contact>
      <GetInTouch></GetInTouch>
      <SendUsAMessage></SendUsAMessage>
      <FAQ></FAQ>
      <FooterTwo></FooterTwo>
    </div>
  );
}

export default page;
