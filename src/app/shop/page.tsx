import React from "react";
import Shop from "./Shop";
import Navigation from "../Navigation";
import HeroTwo from "../HeroTwo";

function page() {
  return (
    <div className="h-[100vh] bg-white items-center justify-items-center min-h-screen    font-[family-name:var(--font-geist-sans)]">
      <Navigation></Navigation>
      <HeroTwo></HeroTwo>
      <Shop></Shop>
    </div>
  );
}

export default page;
