"use client";

import Image from "next/image";
import { JSX } from "react";
import profilePic from "../../../public/bg.jpg";

export default function AboutMe(): JSX.Element {
  return (
    <section className="w-full flex justify-center mt-16 px-4" dir="rtl">
      <div
        className="
          flex flex-col md:flex-row items-center justify-between
          w-[950px] min-h-[250px] px-8 py-6 rounded-[25px]
          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
          shadow-2xl border border-gray-700 text-gray-100
          backdrop-blur-lg
          gap-6
        "
      >
        {/* عکس پروفایل */}
        <div className="flex-shrink-0">
          <Image
            src={profilePic}
            alt="عکس مسعود جعفری"
            width={150}
            height={150}
            className="rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>

        {/* متن درباره من */}
        <div className="flex-1 flex flex-col justify-center gap-3 text-center md:text-right">
          <h2 className="text-2xl font-bold text-white">درباره من</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            من{" "}
            <span className="text-indigo-400 font-semibold">مسعود جعفری</span>{" "}
            هستم؛ توسعه‌دهنده‌ی وبی که با تمرکز بر{" "}
            <span className="text-indigo-400 font-semibold">Next.js</span>،
            <span className="text-indigo-400 font-semibold">React</span> و
            <span className="text-indigo-400 font-semibold">TypeScript</span>{" "}
            تجربه‌ی ساخت رابط‌های مدرن و سریع را دارم. به طراحی‌های مینیمال،
            عملکرد بالا و تجربه‌ی کاربری روان اهمیت می‌دهم و همیشه سعی می‌کنم
            بین زیبایی و کارایی تعادل ایجاد کنم. هدفم این است که از هر پروژه
            چیزی تازه یاد بگیرم، استانداردهای بالاتری برای خودم تعریف کنم و در
            مسیر تبدیل شدن به یک توسعه‌دهنده‌ی فول‌استک حرفه‌ای حرکت کنم.
          </p>
        </div>
      </div>
    </section>
  );
}
