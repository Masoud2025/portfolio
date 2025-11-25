// import ResponsiveSimulator from "@/components/ui/ResponsiveSimulator";

import Footer from "../components/NewFooter";
import NewHero from "../components/NewHero";
import NEWPROJECT from "../components/NEWPROJECT";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-between items-center">
        <NewHero />
        <NEWPROJECT />
        <Footer/>
      </div>
    </div>
  );
}
