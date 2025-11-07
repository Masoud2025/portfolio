"use client";

import Image from "next/image";
import { JSX } from "react";
import card1 from "../assets/images/soti-tasviri-finalfont.png";
import card2 from "../assets/images/lavazemkhoonegi-finalfont.png";
import card3 from "../assets/images/abzar.png";
import card4 from "../assets/images/motormobile.png";

export default function GridCategory(): JSX.Element {
  return (
    <div className="flex flex-row justify-center items-center gap-20">
      <div className="flex flex-col">
        <Image src={card1} alt="" width={500} height={100} />
        <Image src={card2} alt="" width={500} height={100} />
      </div>
      <div className="flex flex-col">
        <Image src={card3} alt="" width={500} height={100} />
        <Image src={card4} alt="" width={500} height={100} />
      </div>
    </div>
  );
}
