"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f8f6ff] to-[#e7e3ff] pt-20 pb-10 text-gray-700 overflow-hidden">
      {/* Glow Background Circles */}
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-[#543CDF]/30 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[15rem] h-[15rem] bg-[#ff6b6b]/30 rounded-full blur-3xl opacity-60 animate-pulse delay-300" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-right"
      >
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#543CDF] mb-4">
            LearnEasy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            یادگیری هیچ‌وقت آسون‌تر از امروز نبوده. آموزش آنلاین، در هرجا و
            هرزمان ✨
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-[#543CDF]">
            لینک‌های سریع
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                خانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                دوره‌ها
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                مدرسین
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-[#543CDF]">پشتیبانی</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                حریم خصوصی
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] transition">
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-[#543CDF]">
            ما را دنبال کنید
          </h4>
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <Link
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Instagram className="text-[#ff6b6b]" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Twitter className="text-[#543CDF]" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Youtube className="text-red-500" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
            >
              <Linkedin className="text-blue-600" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 border-t border-gray-300/50 pt-6 text-center text-gray-500 text-sm relative z-10"
      >
        © {new Date().getFullYear()} LearnEasy — Made with Love 💜 𝓜𝕵
      </motion.div>
    </footer>
  );
}
