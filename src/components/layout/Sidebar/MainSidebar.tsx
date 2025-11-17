"use client";
import Image from "next/image";
import { useState } from "react";
import profilePicture from "../../../../public/Masoud-Jafari-resume-removebg-preview.png";
import { ArrowDown, Moon, Sun } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`
        w-[90%] md:h-[580px] md:w-[260px]
        rounded-[30px]  shadow-lg
        mx-auto 
        transition-all duration-500
        relative
        /* Desktop → fixed sidebar */
        md:fixed md:top-10 md:left-44

        ${
          theme === "light"
            ? "bg-white text-black "
            : "bg-[#1E1E1F] text-white "
        }
      `}
    >
      {/* Profile image */}
      <div
        className={`h-[100px] w-[100px] mx-auto mt-8 rounded-full overflow-hidden
          ${theme === "light" ? "bg-gray-200" : "bg-[#373738]"}`}
      >
        <Image
          alt=""
          src={profilePicture}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Name and job title */}
      <div className="flex flex-col items-center mt-4">
        <h1 className="font-black text-3xl">Masoud Jafari</h1>

        <h1
          className={`
            text-center mt-4 text-xl rounded-[10px] w-[80%] py-3
            ${theme === "light" ? "bg-gray-300" : "bg-[#2B2B2C]"}
          `}
        >
          Software Engineer
        </h1>
      </div>

      {/* Mobile open/close button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden mx-auto mt-3 flex justify-center"
      >
        <div
          className={`
            p-4 rounded-2xl transition-all duration-300
            ${open ? "rotate-180" : ""}
            ${theme === "light" ? "bg-gray-400" : "bg-[#2F6D4D]"}
          `}
        >
          <ArrowDown color="#FFBD5D" size={18} />
        </div>
      </button>

      {/* Sidebar info */}
      <div
        className={`
          overflow-hidden transition-all duration-700
          ${open ? "max-h-[400px] p-4" : "max-h-0 p-0"}
          md:max-h-full md:p-4
        `}
      >
        <div className="flex flex-col space-y-2">
          <h1>Email: example@mail.com</h1>
          <h1>Phone: +98 912 345 6789</h1>
          <h1>Location: Tehran, Iran</h1>

          <ul className="flex space-x-3 mt-3">
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>

            <li>
              <Moon onClick={toggleTheme} className="cursor-pointer" />
            </li>
            <li>
              <Sun onClick={toggleTheme} className="cursor-pointer" />
            </li>

            <li>FA | EN</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
