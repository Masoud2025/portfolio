"use client";

import Image from "next/image";
import { JSX } from "react";
import { Code2, Globe, Rocket } from "lucide-react";
import profilePic from "../../app/showcase/demo4/assets/Masoud-Jafari-resume.jpg";

export default function Persona(): JSX.Element {
  return (
    <section className="w-full flex justify-center mt-16 px-4" dir="rtl">
      <div
        className="
          flex flex-col md:flex-row items-center justify-between
          w-[950px] min-h-[280px] px-8 py-6 rounded-[25px]
          bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
          shadow-2xl border border-gray-700 text-gray-100
          backdrop-blur-lg gap-6
          transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-800/40
        "
      >
        {/* Profile Picture */}
        <div className="relative w-[160px] h-[160px] flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-indigo-500 blur-lg opacity-40"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <Image
              src={profilePic}
              alt="Masoud Jafari"
              width={160}
              height={160}
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Persona Info */}
        <div className="flex-1 flex flex-col justify-center gap-3 text-center md:text-right">
          <h2 className="text-3xl font-bold text-white">مسعود جعفری</h2>
          <p className="text-indigo-400 font-semibold text-lg">
            برنامه‌نویس و توسعه‌دهنده وب
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            تمرکزم بر ساخت وب‌سایت‌های مدرن، تمیز و سریع است. هدفم ایجاد
            تجربه‌های دیجیتال ساده و کاربرپسند می‌باشد.
          </p>

          {/* Skills / Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
              <Code2 size={16} /> <span>Front-End</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
              <Globe size={16} /> <span>Next.js</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-700">
              <Rocket size={16} /> <span>Progressive Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
