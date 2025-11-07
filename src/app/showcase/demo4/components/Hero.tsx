"use client";

import Image from "next/image";
import Hero_image from "../assets/herimage.webp";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative mt-10 rounded-[2rem] overflow-hidden 
                      shadow-2xl 
                      bg-gradient-to-r from-blue-500 to-blue-400
                      ring-4 ring-blue-300/50 ring-offset-4 ring-offset-blue-100"
      >
        {/* Soft blurred background for glow effect */}
        <div className="absolute inset-0 rounded-[2rem] bg-blue-500/30 blur-xl"></div>

        <Image
          src={Hero_image}
          alt="Hero image"
          className="relative z-10 w-[1600px] h-[362px] rounded-[2rem] object-cover"
        />

        {/* Optional overlay for extra smooth effect */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-blue-700/20 to-transparent z-20"></div>
      </div>
    </div>
  );
}
