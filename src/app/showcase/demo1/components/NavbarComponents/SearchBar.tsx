"use client";

import { JSX } from "react";
import { Search } from "lucide-react";

export default function SearchBar(): JSX.Element {
  return (
    <div className="w-full flex justify-center mt-4 px-4 z-10 ml-[-20%] ">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
        <Search
          size={20}
          className="absolute left-[190%] top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder=" محصول ، برند یا دسته بندی مورد نظر خود را جست و جو کنید"
          className="w-[150%] h-14 rounded-2xl pl-4 pr-10 bg-[#F0F0F0] border border-gray-200 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 placeholder-gray-400 ml-[15rem] text-right"
        />
      </div>
    </div>
  );
}
