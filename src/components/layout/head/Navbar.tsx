"use client";

import PersianDate from "@/app/showcase/demo2/components/ShamsyDate";
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";

export default function Navbar(): JSX.Element {
  return (
    <header className="w-full flex justify-center mt-8 px-4" dir="rtl">
      <motion.nav
        initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          flex items-center justify-between
          w-[950px] h-[130px] px-8 rounded-[25px]
          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
          shadow-2xl border border-gray-700 text-gray-100
          backdrop-blur-lg
        "
      >
        {/* معرفی */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="md:text-3xl text-[12px] font-extrabold text-white tracking-wide">
            مســـــــــعود جــــــــــــــــــعفری
          </h1>
          <p className="text-gray-400 text-sm">توسعه دهنده وب</p>
        </motion.div>

        {/* لینک‌ها با Stagger */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex gap-10 text-gray-300 text-lg font-medium"
        >
          {[
            { label: "خانه", href: "/" },
            { label: "کارها", href: "/blog" },
            { label: "رزومه", href: "/resume" },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="transition-colors duration-300 hover:text-indigo-400"
              >
                {item.label}
              </Link>

              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
}
