"use client";

import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import Enamad from "../assets/images/enamad.png";
import Neshanmeli from "../assets/images/Nehanmeli.jpg";
import { ArrowUp } from "lucide-react";

export default function Footer(): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-gray-800 py-12 px-6 md:px-20 border-t border-gray-200 rtl">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* چهار ستون اصلی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-right">
          {/* پشتیبانی */}
          <div>
            <h2 className="text-lg font-semibold mb-4">تماس با پشتیبانی</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>📧 support@example.com</li>
              <li>⏰ همه‌روزه از ۹ تا ۲۱</li>
            </ul>
          </div>

          {/* اپلیکیشن */}
          <div>
            <h2 className="text-lg font-semibold mb-4">دانلود اپلیکیشن</h2>
            <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded-lg transition">
                📱 نسخه اندروید
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded-lg transition">
                🍎 نسخه iOS
              </button>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div>
            <h2 className="text-lg font-semibold mb-4">با ما همراه باشید</h2>
            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <i className="ri-instagram-line"></i>
              </Link>
              <Link
                href="https://telegram.org"
                target="_blank"
                className="hover:text-sky-500 transition"
              >
                <i className="ri-telegram-line"></i>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-gray-700 transition"
              >
                <i className="ri-twitter-x-line"></i>
              </Link>
            </div>
          </div>

          {/* نماد اعتماد */}
          <div>
            <h2 className="text-lg font-semibold mb-4">نماد اعتماد</h2>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <Link href="https://enamad.ir" target="_blank">
                <Image
                  src={Enamad}
                  alt="Enamad"
                  width={40}
                  height={80}
                  className="rounded-md border border-gray-200 object-contain"
                />
              </Link>
              <Link href="https://namad.ir" target="_blank">
                <Image
                  src={Neshanmeli}
                  alt="Neshanmeli"
                  width={80}
                  height={80}
                  className="rounded-md border border-gray-200 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* بخش پایینی */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} تمامی حقوق برای سایت شما محفوظ است.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition"
          >
            <ArrowUp size={18} />
            رفتن به بالا
          </button>
        </div>
      </div>
    </footer>
  );
}
