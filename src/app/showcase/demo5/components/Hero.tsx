"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import top_flash from "../assets/heading-svg.svg";
import shape_for_mark_heading_text_svg from "../assets/heading-svg2.svg";

export default function Hero(): JSX.Element {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen ">
      {/* Background Decorative Circles */}
      <div className="absolute -left-24 top-24 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute left-[20%] bottom-10 w-[28rem] h-[28rem] bg-blue-300/40 rounded-full blur-3xl animate-pulse delay-200" />
      <div className="absolute right-10 top-32 w-[22rem] h-[22rem] bg-green-300/40 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Top SVGs */}
      <Image
        alt=""
        src={top_flash}
        width={180}
        className="absolute right-[12%] top-[14%] opacity-80"
      />
      <Image
        alt=""
        src={shape_for_mark_heading_text_svg}
        width={120}
        className="absolute left-[20%] top-[22%] opacity-80"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 sm:px-0"
      >
        <h1 className="text-[52px] sm:text-[70px] font-extrabold leading-tight text-gray-900 drop-shadow-sm">
          آموزش آنلاین{" "}
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] text-white px-6 py-2 rounded-3xl shadow-lg">
            آسان
          </span>
          <br />
          در هرجا و هرزمان
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          یه راه تو زندگی داریم: زندگی رو انقدر با چیزهای خوب پر کنیم که وقت
          واسه چیزهای بد نمونه.
        </p>
        <sub className="mt-2 block text-gray-500 text-sm">— فرهنگ هلاکویی</sub>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-[#543CDF] text-white px-8 py-4 rounded-3xl font-semibold shadow-lg hover:bg-[#6c52ff] transition-colors duration-300"
        >
          از امروز یادگیری را شروع کنید
        </motion.button>
      </motion.div>
    </section>
  );
}
