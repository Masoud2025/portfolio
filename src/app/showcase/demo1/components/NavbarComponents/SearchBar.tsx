"use client";

import { JSX } from "react";
import { Search } from "lucide-react";
export default function SearchBar({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="  ..جست و جو کنید "
        className={`bg-gray-100 w-[25rem] h-[40px] rounded-[9px] text-right    ${className}`}
      />
      <Search className="w-[35px] h-[40px]  cursor-pointer hover:bg-gray-400 rounded-2xl absolute left-" />
    </div>
  );
}
