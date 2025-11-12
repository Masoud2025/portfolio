"use client";

import { Github, Linkedin, ListIndentDecrease, Moon } from "lucide-react";
import Image from "next/image";
import Logo from "../images/Logo.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed  top-0 left-0 z-50 px-6 py-4 mt-4">
      <div>
        <div
          className="hidden md:flex flex-row-reverse items-center justify-between content-between
 mx-auto gap-9 flex-nowrap"
        >
          <Image
            className="flex-initial self-start mr-8"
            alt=""
            src={Logo}
            width={50}
          />
          <div className="flex flex-row-reverse gap-6">
            <a href="" className="">
              خانه
            </a>
            <a href="">کارای من </a>
            <a href="">رزومه</a>
            <a href="">نوشته ها</a>
            <a href="">راه ارتباطی </a>
            <a href="">گیت هاب</a>
            <a href="">لینکدین</a>
          </div>
          <div>
            <select name="" id="" className="ml-6">
              <option value="fa">fa</option>
              <option value="en">en</option>
            </select>
            <select name="" id="" className="ml-6">
              <option value="Dark">Dark </option>
              <option value="light">light</option>
            </select>
          </div>
        </div>
        {/* Mobile view navbar */}
        <div className="md:hidden  mr-14">
          <div className="flex justify-end items-center">
            <button onClick={() => setOpen(!open)}>
              <ListIndentDecrease
                size={50}
                className="cursor-pointer"
                color="gray"
              />
            </button>
          </div>
          {open && (
            <div className="w-screen h-screen z-10  bg-gray-100 rounded-lg shadow-md transition-all duration-300">
              <div className="flex flex-col gap-20 mt-[-6rem] p-60 justify-center items-center text-4xl">
                <a href="" className="">
                  خانه
                </a>
                <a href="">کارای من </a>
                <a href="">رزومه</a>
                <a href="">نوشته ها</a>
                <a href="">راه ارتباطی </a>
                <a href="">گیت هاب</a>
                <a href="">لینکدین</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
