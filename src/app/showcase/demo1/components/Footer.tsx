"use client";

import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Instagram, PhoneCall, Send, Twitter } from "lucide-react";
import Namads from "../../../../../public/AllNamadsTest.png";

export default function Footer(): JSX.Element {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-gradient-to-b from-[#f9fafb] to-[#f0f2f5] border-t border-gray-200 text-gray-700 rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 ml-[.5rem]">
              پشتیبانی و ارتباط
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-gray-600">
              <li className="flex">
                <PhoneCall size={19} color="gray" />
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li>📧 support@bigshop.com</li>
              <li>⏰ همه‌روزه از ساعت ۹ تا ۲۱</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 ml-[2rem]">
              دانلود اپلیکیشن
            </h2>
            <div className="flex flex-col items-start space-y-3 text-sm">
              <button className="w-[160px] border border-gray-300 bg-white hover:bg-gray-50 hover:shadow-md text-gray-700 py-2.5 px-4 rounded-xl transition-all duration-200">
                📱 نسخه اندروید
              </button>
              <button className="w-[160px] border border-gray-300 bg-white hover:bg-gray-50 hover:shadow-md text-gray-700 py-2.5 px-4 rounded-xl transition-all duration-200">
                🍎 نسخه iOS
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 ml-[2rem]">
              ما را دنبال کنید
            </h2>
            <div className="flex justify-start gap-5">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://telegram.org"
                target="_blank"
                className="bg-sky-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Send size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-black text-white p-3 rounded-full hover:scale-110 transition-transform shadow-sm"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 ml-[6rem]">
              نماد اعتماد
            </h2>
            <div className="flex items-center gap-4">
              <Link href="https://namad.ir" target="_blank">
                <Image
                  src={Namads}
                  alt="Namads"
                  width={920}
                  height={700}
                  className="p-2   transition-all"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p className="text-right md:text-right">
            © {new Date().getFullYear()}&nbsp; Made with love ❤️ 𝓜𝕵
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <ArrowUp size={18} />
            رفتن به بالا
          </button>
        </div>
      </div>
    </footer>
  );
}
