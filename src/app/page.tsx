import Image from "next/image";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen    font-[family-name:var(--font-geist-sans)]">
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <Menu></Menu>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
