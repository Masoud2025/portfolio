"use client";

import AuroraBackground from "@/components/ui/background";
import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Mail } from "lucide-react";

export default function ResumePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* خطوط نورانی در پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-100/5 to-transparent animate-pulse blur-3xl" />

      {/* کارت اصلی رزومه */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-4xl text-white"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-green-400">
          رزومه‌ی من
        </h1>

        {/* بخش مهارت‌ها */}
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 border border-white/20"
          >
            <Code2 className="w-12 h-12 mx-auto mb-4 text-[#4F39F6]" />
            <h2 className="text-2xl font-bold mb-2">مهارت‌ها</h2>
            <p className="text-gray-200/90">
              HTML, CSS, JavaScript, TypeScript, React, Next.js, TailwindCSS,
              Git
            </p>
          </motion.div>

          {/* تجربه کاری */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 border border-white/20"
          >
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-[#4F39F6]" />
            <h2 className="text-2xl font-bold mb-2">تجربه کاری</h2>
            <p className="text-gray-200/90">
              توسعه‌دهنده فرانت‌اند در چند پروژه‌ی بزرگ، تمرکز بر UX و عملکرد
              بالا
            </p>
          </motion.div>

          {/* تحصیلات */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 border border-white/20"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#4F39F6]" />
            <h2 className="text-2xl font-bold mb-2">تحصیلات</h2>
            <p className="text-gray-200/90">
              دانشجوی مهندسی کامپیوتر - دانشگاه (ترم 3)
            </p>
          </motion.div>

          {/* ارتباط */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 border border-white/20"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-[#4F39F6]" />
            <h2 className="text-2xl font-bold mb-2">ارتباط با من</h2>
            <p className="text-gray-200/90">
              ایمیل: example@gmail.com
              <br />
              تلگرام: @MasoudDev
            </p>
          </motion.div>
        </div>
      </motion.div>
      <AuroraBackground />
    </section>
  );
}
