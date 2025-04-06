import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import AboutTwo from "./AboutTwo";
import Menu from "./Menu";
import MenuTwo from "./MenuTwo";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroTwo from "./HeroTwo";

export default function Home() {
  return (
    <div className="bg-white items-center justify-items-center min-h-screen    font-[family-name:var(--font-geist-sans)]">
      <Navigation></Navigation>
      {/* <Hero></Hero> */}
      <HeroTwo></HeroTwo>
      {/* <About></About> */}
      <AboutTwo></AboutTwo>
      {/* <Menu></Menu> */}
      <MenuTwo></MenuTwo>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
