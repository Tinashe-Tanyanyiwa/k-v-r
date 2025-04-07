import React from "react";
import Contact from "./Contact";
import Navigation from "../Navigation";

function page() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen ">
        <Navigation></Navigation>
      <Contact></Contact>
    </div>
  );
}

export default page;
