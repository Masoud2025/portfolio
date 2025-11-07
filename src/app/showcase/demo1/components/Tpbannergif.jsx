"use client";
import Image from "next/image";
import topBannerGif from "../assets/images/Top_banner_gif.gif";

export default function TopBannerGif() {
  return (
    <div>
      <Image
        src={topBannerGif}
        alt="top banner gif"
        width={1200}
        height={300}
        unoptimized
        className="w-full"
      />
    </div>
  );
}
