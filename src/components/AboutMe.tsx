"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

export default function AboutMe() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        w-[90%] sm:w-[95%] md:w-[800px] 
        mx-auto mt-4 
        rounded-[30px] 
        p-4 sm:p-6 md:p-8
      "
    >
      {/* Title */}
      <h2
        className={`text-2xl sm:text-3xl font-bold  mb-6 text-center ${
          theme === "light" ? " text-black " : " text-white "
        }
        `}
      >
        About Me 
      </h2>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 text-base sm:text-lg mb-6 text-justify"
      >
        Hi! I’m Masoud Jafari, a passionate <strong>Software Engineer</strong>
        interested in modern web development and cutting-edge technologies. I
        love learning new things and solving challenging problems. Here’s some
        placeholder info for testing.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
      >
        <div className="flex items-center text-white space-x-2">
          <Mail size={20} />
          <span className="text-sm sm:text-base">example@mail.com</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Phone size={20} />
          <span className="text-sm sm:text-base">+1 234 567 890</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <MapPin size={20} />
          <span className="text-sm sm:text-base">Toronto, Canada</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Github size={20} />
          <span className="text-sm sm:text-base">github.com/example</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Linkedin size={20} />
          <span className="text-sm sm:text-base">linkedin.com/in/example</span>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript",
            "TypeScript",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#2F6D4D] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
