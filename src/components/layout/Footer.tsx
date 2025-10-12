"use client";

import Link from "next/link";
import { JSX } from "react";
import { Facebook, Instagram, Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer(): JSX.Element {
  // تابع برگشت به بالا
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full flex justify-center mt-16 px-4" dir="rtl">
      <div
        className="
          flex flex-col md:flex-row items-center justify-between
          w-[950px] min-h-[180px] px-8 rounded-[25px]
          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
          shadow-2xl border border-gray-700 text-gray-100
          backdrop-blur-lg
        "
      >
        {/* بخش دسترسی سریع */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold text-white mb-1">دسترسی سریع</h2>
          <ul className="flex flex-col gap-1 text-gray-400 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-400 transition-colors"
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-indigo-400 transition-colors"
              >
                وبلاگ
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="hover:text-indigo-400 transition-colors"
              >
                رزومه
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-400 transition-colors"
              >
                تماس با من
              </Link>
            </li>
          </ul>
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl font-bold text-white mb-1">
            شبکه‌های اجتماعی
          </h2>
          <div className="flex gap-5">
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* بخش اطلاعات و دکمه برگشت */}
        <div className="flex flex-col items-center md:items-end gap-3 mt-6 md:mt-0">
          <p className="text-gray-400 text-sm text-center md:text-right">
            طراحی و توسعه توسط{" "}
            <span className="text-indigo-400 font-semibold">مسعود جعفری</span>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded-xl shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
            <span>بازگشت به بالا</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
