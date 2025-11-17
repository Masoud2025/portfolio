"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E1E1F] w-[90%] md:w-[800px] mx-auto mt-6 rounded-[30px] border-[.2px] border-white shadow-lg p-8"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">About Me</h2>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 text-lg mb-6 text-justify"
      >
        Hi! I’m Masoud Jafari, a passionate **Software Engineer** interested in modern web development and cutting-edge technologies.  
        I love learning new things and solving challenging problems. Here’s some placeholder info to fill out the section for testing.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <div className="flex items-center text-white space-x-2">
          <Mail size={20} />
          <span>example@mail.com</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Phone size={20} />
          <span>+1 234 567 890</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <MapPin size={20} />
          <span>Toronto, Canada</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Github size={20} />
          <span>github.com/example</span>
        </div>
        <div className="flex items-center text-white space-x-2">
          <Linkedin size={20} />
          <span>linkedin.com/in/example</span>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "TypeScript"].map(
            (skill, idx) => (
              <span
                key={idx}
                className="bg-[#2F6D4D] text-white px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
