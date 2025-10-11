"use client";

import { JSX } from "react";
import { ShoppingBag } from "lucide-react";
export default function Shopping(): JSX.Element {
  return (
    <div>
      <div className="flex">
        <h1 className="border-2 border-green-50 p-2 rounded-2xl hover:bg-amber-50 cursor-pointer ">
          سبد خرید0
        </h1>
        <ShoppingBag className="absolute mt-2 ml-2 left-[1rem]" />
      </div>
    </div>
  );
}
