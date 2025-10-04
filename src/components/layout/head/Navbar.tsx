"use client";

import Link from "next/link";
import { JSX, useState } from "react";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-center mt-5 px-4" dir="rtl">
      <nav
        className="
            relative flex items-center w-[678px] h-[120px] px-6 rounded-[25px] shadow-lg
            bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50
            border border-indigo-100
          "
      >
        <div className="text-4xl font-black text-indigo-700 select-none mr-4 z-10">
          M
        </div>

        <ul className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-12 text-gray-700 font-medium text-lg z-0">
          <li className="relative group">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-indigo-600"
            >
              خانه
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/blog"
              className="transition-colors duration-300 hover:text-indigo-600"
            >
              وبلاگ
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/resume"
              className="transition-colors duration-300 hover:text-indigo-600"
            >
              رزومه
            </Link>
            <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <button
          className="lg:hidden flex flex-col justify-between w-7 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-1 w-full bg-indigo-700 rounded-md transition-all duration-300" />
          <span className="block h-1 w-full bg-indigo-700 rounded-md transition-all duration-300" />
          <span className="block h-1 w-full bg-indigo-700 rounded-md transition-all duration-300" />
        </button>

        {isOpen && (
          <ul
            className="
                absolute top-[130px] right-0 w-full flex flex-col items-center gap-6
                py-6 bg-white/80 backdrop-blur-md rounded-b-2xl shadow-md lg:hidden z-10
              "
          >
            <li>
              <Link
                href="/"
                className="hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                وبلاگ
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                رزومه
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
