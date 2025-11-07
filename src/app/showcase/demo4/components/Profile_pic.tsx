"use client";

import Image from "next/image";
import masoud_jafari_image from "../assets/Masoud-Jafari-resume.jpg";

export default function ProfilePicture() {

  return (
    <div className="absolute top-80 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <div
        className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[110px] lg:h-[110px] rounded-full overflow-hidden border-2 border-dashed transition-all duration-300`}
      >
        <Image
          src={masoud_jafari_image}
          alt="Profile image"
          className="w-full h-full object-cover object-[center_top]"
          style={{ objectPosition: "center 10%" }}
        />
      </div>

      <h1
        className={`mt-3 text-center font-semibold transition-colors duration-300 text-amber-100`}
      >
        Masoud Jafari Front end Developer
      </h1>
    </div>
  );
}
