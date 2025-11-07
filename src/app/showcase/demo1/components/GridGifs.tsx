"use client";
import Image from "next/image";
import gif1 from "../assets/images/card1.webp";
import gif2 from "../assets/images/card2.gif";
import gif3 from "../assets/images/card3.gif";
import gif4 from "../assets/images/card33.gif";

export default function GridCards_gif() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image alt="" src={gif1} width={350} className="rounded-3xl"/>
      <Image alt="" src={gif2} width={350} className="rounded-3xl"/>
      <Image alt="" src={gif3} width={350} className="rounded-3xl"/>
      <Image alt="" src={gif4} width={350} className="rounded-3xl"/>
    </div>
  );
}
