"use client";

import { BellRing, MessageCircleDashed, Search, User } from "lucide-react";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <div className="bg-white w-10/12 flex  flex-row-reverse justify-around      items-center p-4 shadow-sm float-left">
      <h1 className="font-semibold text-[28px]">داشبورد</h1>
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl w-[250px]">
        <Search size={20} className="text-[#5a5881]" />
        <input
          type="text"
          placeholder="جست‌وجو..."
          className="bg-transparent outline-none w-full text-right placeholder:text-gray-500"
        />
      </div>
      <BellRing className="text-[#5a5881]" />
      <MessageCircleDashed className="text-[#5a5881]" />
      <User className="bg-gray-300 rounded-4xl text-[#5a5881]" />
      <h1>سپهر صادقی</h1>
    </div>
  );
}
