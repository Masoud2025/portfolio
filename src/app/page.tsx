import Navbar from "@/components/layout/head/Navbar";
import AuroraBackground from "@/components/ui/background";
// import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      <Projects />
      <AuroraBackground />
    </div>
  );
}
