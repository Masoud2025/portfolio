"use client";
import Image from "next/image";
import { useState } from "react";
import profilePicture from "../../../../public/Masoud-Jafari-resume-removebg-preview.png";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { motion } from "framer-motion";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`
        w-full md:w-[260px]
        rounded-[30px] shadow-lg
        transition-all duration-500
        mx-auto md:mx-0
        md:sticky md:top-10
        ${theme === "light" ? "bg-white text-black" : "bg-[#111111] text-white"}
      `}
    >
      {/* Profile image */}
      <div
        className={`h-[110px] w-[110px] mx-auto mt-8 rounded-full overflow-hidden
          ${theme === "light" ? "bg-gray-200" : "bg-[#373738]"}`}
      >
        {/* 
        <Image
          alt="profile"
          src={profilePicture}
          className="h-full w-full object-cover object-top"
        />
        */}
      </div>

      {/* Name + job title */}
      <div className="flex flex-col items-center mt-4">
        <h1 className="font-black text-3xl">Name Lastname</h1>

        <h1
          className={`
            text-center mt-4 text-xl rounded-[10px] w-[80%] py-3
            ${theme === "light" ? "bg-gray-300" : "bg-[#2B2B2C]"}
          `}
        >
          Job Title
        </h1>
      </div>

      {/* Mobile open/close button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden mx-auto mt-4 flex justify-center"
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
        <div className="flex flex-col space-y-3">
          <h1>Email: example@mail.com</h1>
          <h1>Phone: +98 912 345 6789</h1>
          <h1>Location: Tehran, Iran</h1>

          <ul className="flex space-x-3 mt-3">
            <li><Github className="cursor-pointer" /></li>
            <li><Linkedin className="cursor-pointer" /></li>

            <li>
              <Moon onClick={toggleTheme} className="cursor-pointer" />
            </li>
            <li>
              <Sun onClick={toggleTheme} className="cursor-pointer" />
            </li>

            <li>FA | EN</li>
          </ul>

          {/* Icons grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          >
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span className="text-sm sm:text-base">example@mail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span className="text-sm sm:text-base">+1 234 567 890</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span className="text-sm sm:text-base">Toronto, Canada</span>
            </div>

            <div className="flex items-center space-x-2">
              <Github size={20} />
              <span className="text-sm sm:text-base">github.com/example</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
