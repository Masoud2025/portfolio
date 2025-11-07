"use client";

import { JSX } from "react";
import { Flame } from "lucide-react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-[#1a1a1a] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      {/* برند */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-tr from-orange-500 to-red-500 p-2 rounded-xl shadow-md">
          <Flame size={34} className="text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          <span className="text-orange-500">Kavan</span>
          <span className="text-white"> & </span>
          <span className="text-orange-400">Aida</span>
        </h1>
      </div>

      {/* شعار برند */}
      <p className="hidden sm:block text-gray-300 font-medium text-lg italic tracking-wide">
        «Where Taste Meets Passion»
      </p>
    </nav>
  );
}
