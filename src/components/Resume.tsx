"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Company A",
      period: "Jan 2022 - Dec 2022",
      description:
        "Developed modern and responsive web apps using React, Next.js, Tailwind CSS.",
    },
    {
      title: "Intern - Software Engineer",
      company: "Startup B",
      period: "Jun 2021 - Dec 2021",
      description: "Built automation tools, dashboards and internal systems.",
    },
    {
      title: "Freelance Projects",
      company: "Self-Employed",
      period: "2020 - Present",
      description:
        "Designed landing pages, ecommerce sites and high-quality portfolio websites.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[90%] md:w-[800px] mx-auto mt-10 p-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-black text-center bg-gradient-to-r from-[#ff8a00] to-[#e52e71] text-transparent bg-clip-text mb-10"
      >
        Work Experience
      </motion.h2>

      {/* Timeline line */}
      <div className="relative border-l-4 border-[#ff8a00] pl-6 space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="
              relative 
              bg-gradient-to-br from-[#1c1c1d] to-[#2b2b2c]
              p-6 rounded-2xl shadow-xl border border-gray-700 
              hover:border-[#ff8a00] hover:shadow-[#ff8a0080]
              transition-all duration-300
            "
          >
            {/* Timeline dot */}
            <div
              className="
              w-4 h-4 rounded-full bg-[#ff8a00] 
              absolute -left-[30px] top-6 shadow-[0_0_10px_#ff8a00]
            "
            ></div>

            {/* Title + Date */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2 text-white font-semibold text-xl">
                <Briefcase size={20} className="text-[#ff8a00]" />
                <span>{exp.title}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Calendar size={18} className="text-[#e52e71]" />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-gray-300 font-medium">{exp.company}</p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
  