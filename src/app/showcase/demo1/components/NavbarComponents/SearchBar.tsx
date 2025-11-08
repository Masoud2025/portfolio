"use client";

import { JSX } from "react";
import { Search } from "lucide-react";

export default function SearchBar(): JSX.Element {
  return (
    <div className="w-full flex justify-center px-4 mt-6">
      <div className="relative w-full max-w-lg">
        <Search
          size={22}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="محصول، برند یا دسته‌بندی مورد نظر خود را جست‌وجو کنید"
          className="w-full h-12 sm:h-14 rounded-2xl pr-12 pl-4 bg-[#F0F0F0] border border-gray-200 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 placeholder-gray-400 text-right"
        />
      </div>
    </div>
  );
}
