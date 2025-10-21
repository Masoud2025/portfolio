import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/head/Navbar";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import AboutMe from "@/components/ui/Aboutme";
import AuroraBackground from "@/components/ui/background";
import Contact from "@/components/ui/Contact";
import SideProjects from "@/components/ui/HalfPAgeProjects";
import Hero from "@/components/ui/Hero";
import LeftHalft from "@/components/ui/LeftHalft";
import PrjectsUI from "@/components/ui/NewProjects";
// import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <PrjectsUI />
      <AuroraBackground />
      <Contact />
      <Footer />
      {/* <Sidebar /> */}
      {/* <SideProjects /> */}
      {/* <LeftHalft /> */}
    </div>
  );
}
