"use client";

import HeroPortfolioSection from "./Hero";
import FrostedGlassNavbar from "./Navbar";

// import DraggableThemeSlider from "./Themes";

export default function DemosPage() {
  return (
    <section className="bg-blue-100 min-h-screen">
      <FrostedGlassNavbar/>
      <HeroPortfolioSection/>
      {/* <DraggableThemeSlider /> */}
    </section>
  );
}
