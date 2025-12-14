// import ResponsiveSimulator from "@/components/ui/ResponsiveSimulator";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Heero";
import TopBar from "../components/Navbar";
import NaviBar from "../components/NaviBar";
import Projects from "../components/Projectss";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen ">
        <TopBar></TopBar>
        <NaviBar></NaviBar>
        <Hero></Hero>
        <Projects />
        <Contact/>
        <Footer />
        {/* <Hero></Hero> */}
        {/* <ItGuy></ItGuy> */}
        {/* <AuroraBackground></AuroraBackground> */}
        {/* <CubeHero></CubeHero> */}
      </div>
    </div>
  );
}
