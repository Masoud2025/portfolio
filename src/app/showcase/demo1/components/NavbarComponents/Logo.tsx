"use client";
import Image from "next/image";
import Logoimg from "../../assets/images/Logo.png";
import { JSX } from "react";

export default function Logo(): JSX.Element {
  return (
    <div>
      <Image alt="" src={Logoimg} width={500} height={500} />
    </div>
  );
}
