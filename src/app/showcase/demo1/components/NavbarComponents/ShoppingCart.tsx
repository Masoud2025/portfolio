"use client";

import { JSX } from "react";
import { LogIn, ShoppingCart } from "lucide-react";

export default function Shopping(): JSX.Element {
  return (
    <div className="hidden md:flex items-center gap-4 mt-5 ml-11">
      <button className="flex items-center gap-2 border-2 border-red-500 px-4 py-2 rounded-2xl text-red-600 font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-md">
        <span>ثبت‌نام | ورود</span>
        <LogIn className="w-5 h-5" />
      </button>

      <div className="relative cursor-pointer">
        <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          3
        </span>
      </div>
    </div>
  );
}
