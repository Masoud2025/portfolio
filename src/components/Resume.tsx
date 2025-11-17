"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Resume() {
  // Temp data for test
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Company A",
      period: "Jan 2022 - Dec 2022",
      description: "Developed responsive web apps using React, Next.js, and Tailwind CSS."
    },
    {
      title: "Intern - Software Engineer",
      company: "Startup B",
      period: "Jun 2021 - Dec 2021",
      description: "Assisted in building internal tools and automating tasks."
    },
    {
      title: "Freelance Projects",
      company: "Self-Employed",
      period: "2020 - Present",
      description: "Worked on small web projects, portfolios, and landing pages."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" w-[90%] md:w-[800px] mx-auto mt-6  p-8"
    >
      {/* عنوان */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">My Work Experience</h2>

      {/* لیست تجربه‌ها */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.3, duration: 0.8 }}
            className="bg-[#2B2B2C] p-4 rounded-lg border border-gray-700 shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-white font-semibold text-lg">
                <Briefcase size={20} />
                <span>{exp.title}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Calendar size={18} />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-gray-400 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
