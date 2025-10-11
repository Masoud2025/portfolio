"use client";

import { JSX } from "react";
import Logo from "./NavbarComponents/Logo";
import Links from "./NavbarComponents/Links";
import SearchBar from "./NavbarComponents/SearchBar";
import JoinButton from "./NavbarComponents/JoinButton";
import Shopping from "./NavbarComponents/ShoppingCart";

export default function Navbar(): JSX.Element {
  return (
    <header className="border-b-2 border-gray-200 h-32  ">
      <section className="flex items-center justify-between px-4 py-2 w-full">
        {/*  On the left Shopping + JoinButton */}
        <div className="flex items-center gap-4">
          <Shopping />
          <JoinButton />
        </div>

        {/*  SearchBar on the middle */}
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>

        {/* Logo on the Right */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
      </section>
      <Links />
    </header>
  );
}
