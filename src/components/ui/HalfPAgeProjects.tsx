"use client";

import { JSX } from "react";
import pic1 from "../../app/showcase/demo1/assets/images/keyboradmouse.jpg";
import Image from "next/image";

export default function SideProjects(): JSX.Element {
  return (
    <section className="fixed top-0 right-24 h-screen w-[45%] p-6 overflow-y-auto scrollbar-none">
      <div className="flex flex-col gap-10">
        {/* First row: two small images */}
        <div className="flex justify-end gap-6">
          <Image
            alt="Project 1"
            src={pic1}
            className="rounded-xl flex-shrink-0"
            width={400}
            height={250}
          />
          <Image
            alt="Project 2"
            src={pic1}
            className="rounded-xl flex-shrink-0"
            width={400}
            height={250}
          />
        </div>

        {/* Big image */}
        <div className="flex justify-end">
          <Image
            alt="Big Project"
            src={pic1}
            className="rounded-xl flex-shrink-0"
            width={830}
            height={400}
          />
        </div>

        {/* Second row: two small images */}
        <div className="flex justify-end gap-6">
          <Image
            alt="Project 3"
            src={pic1}
            className="rounded-xl flex-shrink-0"
            width={400}
            height={250}
          />
          <Image
            alt="Project 4"
            src={pic1}
            className="rounded-xl flex-shrink-0"
            width={400}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
