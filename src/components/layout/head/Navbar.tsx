"use client";

import Link from "next/link";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <header className="w-full flex justify-center mt-8 px-4" dir="rtl">
      <nav
        className="
          flex items-center justify-between
          w-[950px] h-[130px] px-8 rounded-[25px]
          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
          shadow-2xl border border-gray-700 text-gray-100
          backdrop-blur-lg
        "
      >
        {/* بخش معرفی شخصی */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            مســـــــــعود جــــــــــــــــــعفری
          </h1>
         
          <p className="text-gray-400 text-sm">
             توسعه دهنده وب 
          </p>
        </div>

        {/* منو لینک‌ها */}
        <ul className="flex gap-10 text-gray-300 text-lg font-medium">
          <li className="relative group">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-indigo-400"
            >
              خانه
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/blog"
              className="transition-colors duration-300 hover:text-indigo-400"
            >
              وبلاگ
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/resume"
              className="transition-colors duration-300 hover:text-indigo-400"
            >
              رزومه
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
