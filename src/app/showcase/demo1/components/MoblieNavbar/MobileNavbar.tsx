"use client";

import { JSX } from "react";
import {
  HomeIcon,
  ShoppingBasket,
  Grid2x2,
  CircleUserRound,
} from "lucide-react";
import Link from "next/link";

export default function MobileNavbar(): JSX.Element {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-amber-200 h-16 flex flex-row-reverse justify-center items-center gap-10 md:hidden shadow-[0_-2px_6px_rgba(0,0,0,0.1)] z-50 py-6">
      <Link href={"/showcase/demo1"}>
        <HomeIcon size={28} color="gray" strokeWidth={1.3} />
      </Link>
      <Grid2x2 size={28} color="gray" strokeWidth={1.3} />
      <ShoppingBasket size={28} color="gray" strokeWidth={1.3} />
      <CircleUserRound size={28} color="gray" strokeWidth={1.3} />
    </nav>
  );
}
