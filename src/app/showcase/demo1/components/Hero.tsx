"use client";
import pic from '../assets/images/placeholder.png'
import { JSX } from "react";
export default function Hero(): JSX.Element {
  return (
    <section className="relative flex flex-col items-center mt-[-2rem]">
      {/* Top Banner */}
      <div className="bg-blue-600 w-11/12 lg:w-[90%] h-20 md:h-28 mt-28 border-2 rounded-[4px] flex items-center justify-center ">
        <h1 className="text-center text-white text-lg md:text-2xl">
          به مدرسه بر میگردیم
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-8 lg:mt-12 w-11/12 lg:w-[90%]">
        {/* Large Card */}
        <div className="bg-green-400 w-full lg:w-2/3 h-64 lg:h-[50vh] rounded-2xl flex items-center justify-center">
          <span className="text-5xl lg:text-8xl font-bold">50</span>
        </div>
        {/* Small Cards Vertical Stack */}
        <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3">
          <div className="bg-amber-400 w-full h-32 lg:h-[24vh] rounded-2xl flex items-center justify-center">
            <span className="text-3xl lg:text-5xl font-bold">40</span>
          </div>
          <div className="bg-yellow-500 w-full h-32 lg:h-[24vh] rounded-2xl flex items-center justify-center">
            <span className="text-3xl lg:text-5xl font-bold">30</span>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <svg
          viewBox="0 0 500 200"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="hero-clip">
              <path d="M30,0H390A10,10 0,0,1 400,10V30A10,10 0,0,0 410,40H490A10,10 0,0,1 500,50V170A30,30 0,0,1 470,200H30A30,30 0,0,1 0,170V30A30,30 0,0,1 30,0Z" />
            </clipPath>
          </defs>

          <image
            href={pic.src}
            width="500"
            height="200"
            clipPath="url(#hero-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </section>
  );
}
