"use client";
import Image from "next/image";
import pcBanner from "../assets/images/pcbanner.jpg";
import Headphone from "../assets/images/headphone.jpg";
import MouseKeyboardImage from "../assets/images/keyboradmouse.jpg";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative flex flex-col items-center mt-[-6rem]">
      {/* 🔹 Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-11/12 lg:w-[90%] h-20 md:h-28 mt-28 rounded-md flex items-center justify-center shadow-md">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold tracking-wide">
          به کامپیوتر برمی‌گردیم 💻
        </h1>
      </div>

      {/* 🔹 Cards Section */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mt-8 lg:mt-12 w-11/12 lg:w-[90%]">
        {/* 🟢 Large Card */}
        <div className="w-full lg:w-2/3 relative overflow-hidden rounded-2xl shadow-lg h-64 sm:h-80 lg:h-[55vh]">
          <svg width="0" height="0">
            <clipPath id="number-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.06,0 H0.78 Q0.8,0 0.8,0.05 V0.15 Q0.8,0.2 0.82,0.2 H0.98 Q1,0.2 1,0.25 V0.85 Q1,1 0.94,1 H0.06 Q0,1 0,0.85 V0.15 Q0,0 0.06,0 Z" />
            </clipPath>
          </svg>

          <Image
            src={pcBanner}
            alt="PC Banner"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            style={{ clipPath: "url(#number-clip)" }}
          />
          <div className="absolute bottom-6 left-6 bg-white/80 text-gray-900 px-4 py-2 rounded-lg text-lg md:text-2xl font-bold shadow-sm backdrop-blur-sm">
            تا ۵۰٪ تخفیف روی محصولات دیجیتال ⚡
          </div>
        </div>

        {/* 🟡 Small Cards */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          {/* Keyboard + Mouse */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 sm:h-64 lg:flex-1">
            <Image
              src={MouseKeyboardImage}
              alt="Keyboard and Mouse"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/80 text-gray-900 px-3 py-1 rounded-md text-sm md:text-base font-semibold backdrop-blur-sm">
              ست کیبورد و ماوس 🎮
            </div>
          </div>

          {/* Headphone */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group h-48 sm:h-64 lg:flex-1">
            <Image
              src={Headphone}
              alt="Headphone"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-3 bg-white/80 text-gray-900 px-3 py-1 rounded-md text-sm md:text-base font-semibold backdrop-blur-sm">
              هدفون‌های حرفه‌ای 🎧
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
