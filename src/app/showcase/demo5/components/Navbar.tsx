"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-[#543CDF] to-[#ff6b6b] bg-clip-text text-transparent"
        >
          LearnEasy
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          <li>
            <Link href="#" className="hover:text-[#543CDF] transition-colors">
              خانه
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#543CDF] transition-colors">
              دوره‌ها
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#543CDF] transition-colors">
              مدرسین
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#543CDF] transition-colors">
              تماس با ما
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-[#543CDF] text-white px-5 py-2 rounded-3xl shadow-md hover:bg-[#6c52ff] transition"
        >
          ورود / ثبت‌نام
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/90 backdrop-blur-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-5 font-semibold text-gray-700">
            <li>
              <Link href="#" className="hover:text-[#543CDF] transition">
                خانه
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#543CDF] transition">
                دوره‌ها
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#543CDF] transition">
                مدرسین
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#543CDF] transition">
                تماس با ما
              </Link>
            </li>
            <li>
              <button className="bg-[#543CDF] text-white px-6 py-2 rounded-3xl hover:bg-[#6c52ff] transition">
                ورود / ثبت‌نام
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
