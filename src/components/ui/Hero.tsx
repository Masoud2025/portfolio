"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Braces, Cpu } from "lucide-react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] overflow-hidden">
      {/* نوشته‌های بزرگ محو پس‌زمینه */}
      <span className="absolute text-amber-100 opacity-5 font-extrabold text-[30vw] sm:text-[25vw] md:text-[20vw] lg:text-[15vw] right-[-10vw] top-[10%] select-none leading-none">
        مســـــــــعود
      </span>

      <span className="absolute text-amber-100 opacity-5 font-extrabold text-[28vw] sm:text-[23vw] md:text-[18vw] lg:text-[14vw] left-[-5vw] bottom-[10%] select-none leading-none">
        جــــــــــــعفری
      </span>
      {/* محتوای مرکزی */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center gap-8 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Code size={38} className="text-[#4F39F6]" />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            Hello, I’m <span className="text-[#4F39F6]">Masoud</span>
          </motion.h1>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Terminal size={38} className="text-[#4F39F6]" />
          </motion.div>
        </div>

        {/* متن زیر عنوان */}
        <motion.p
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Frontend Developer • JavaScript • React • Next.js
        </motion.p>

        {/* آیکون‌های مرتبط با برنامه‌نویسی */}
        <motion.div
          className="flex gap-10 mt-6 text-[#4F39F6]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Braces size={40} />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Cpu size={40} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Code size={40} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
