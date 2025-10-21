"use client";

import { JSX } from "react";
import { Plus } from "lucide-react";

export default function Menu(): JSX.Element {
  const items = [
    "باقلوا",
    "قهوه",
    "چای",
    "کاپوچینو",
    "ماچا",
    "اسپرسو دابل",
    "چیپس و پنیر",
    "پیتزا ایتالیایی",
  ];

  return (
    <div className="grid items-center w-[50%] h-screen float-right bg-white relative ">
      <div className="grid grid-cols-4 gap-4 absolute bottom-[78%]  left-[54%] -translate-x-1/2 w-[90%]">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-amber-100 flex flex-col items-center justify-center rounded-2xl shadow-md p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="font-semibold text-gray-800 text-lg">{item}</span>
            <Plus className="text-gray-600 mt-2" size={22} />
          </div>
        ))}
      </div>
    </div>
  );
}
