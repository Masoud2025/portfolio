"use client";

import { JSX } from "react";
import { ShoppingBag } from "lucide-react";
export default function Shopping(): JSX.Element {
  return (
    <div>
      <div className="mt-4 ml-4 hidden md:block">
        <ShoppingBag color="gray" />
      </div>
    </div>
  );
}
