"use client";

import { JSX } from "react";
import PersianDate from "./ShamsyDate";
export default function Navbar(): JSX.Element {
  return (
    <div className="flex gap-2 group justify-end items-center mt-6 mr-4">
      <PersianDate />
    </div>
  );
}
