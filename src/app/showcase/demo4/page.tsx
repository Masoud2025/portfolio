"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProfilePicture from "./components/Profile_pic";
import Projects from "./components/Projects";

export default function Project4Demo() {
  return (
    <div >
      <Hero />
      <ProfilePicture />
      <div className="mt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
