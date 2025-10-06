"use client";

import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="flex flex-col justify-start items-center py-32 px-5 text-center">
      <h1
        className="
    relative 
    inline-block 
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
    font-extrabold tracking-wide mb-6 text-black 
    transition-all duration-700 ease-out 
    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
    hover:scale-110
  "
      >
        <span className="relative z-10">مسعود جعفری</span>
        {/* نور و موج */}
        <span
          className="
      absolute inset-0 
      bg-gradient-to-r from-transparent via-white/40 to-transparent 
      opacity-0 hover:opacity-100 
      blur-2xl 
      animate-pulse
    "
        ></span>
        <span
          className="
      absolute inset-0 
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent,transparent)] 
      scale-0 hover:scale-150 
      transition-transform duration-700 ease-out 
      rounded-full
    "
        ></span>
      </h1>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-gray-800 hover:bg-amber-100 ">
        برنامه نویس
      </h2>
    </section>
  );
}
