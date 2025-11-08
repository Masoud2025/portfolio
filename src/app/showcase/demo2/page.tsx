"use client";

import { JSX } from "react";
import MotivationalQuote from "./components/MotivationalQuote";
import Navbar from "./components/Navbar";

export default function Project2Demo(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center bg-transparent px-4 py-10">
      <MotivationalQuote />
      <Navbar />
    </div>
  );
}
