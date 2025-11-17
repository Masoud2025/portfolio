"use client";

import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";
import {
  Code,
  Cpu,
  Rocket,
  Star,
  Laptop,
  Brain,
  ChevronRight,
  Sparkles,
  Terminal,
  Layers,
  Globe,
} from "lucide-react";

export default function AboutMe() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`
        ${isLight ? "bg-white text-black" : "bg-[#0f0f0f] text-white"}
        sm:w-[95%] md:w-[900px]
        mx-auto mt-6 p-8 sm:p-10
        rounded-[35px] shadow-xl
        border border-gray-700/20
      `}
    >


      {/* Main Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg opacity-90 leading-loose text-justify"
      >
        I’m <strong className="text-green-400">Masoud Jafari</strong>, a{" "}
        <strong>Front-end & Full-stack Developer</strong> passionate about
        creating clean, fast, and beautiful digital experiences. My focus is
        modern web technologies like{" "}
        <strong>React, Next.js, Tailwind, TypeScript</strong>, and everything
        that involves building scalable systems. I love crafting elegant UI/UX,
        optimizing performance, and learning new technologies every day.
      </motion.p>

      {/* Fancy Divider */}
      <div className="my-8 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-40"></div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10"
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Code className="text-green-400" /> Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript",
            "TypeScript",
            "Git & GitHub",
            "Responsive Design",
            "REST APIs",
            "UI/UX Design",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-[#2F6D4D] to-[#1F4D39] text-white px-4 py-2 rounded-full text-sm shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10"
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Cpu className="text-blue-400" /> Tech Stack
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: <Terminal />,
              title: "Frontend",
              desc: "React, Next.js, Tailwind, GSAP, Framer Motion",
            },
            {
              icon: <Layers />,
              title: "Backend",
              desc: "Node.js, Express, MongoDB, Prisma",
            },
            {
              icon: <Globe />,
              title: "Web Design",
              desc: "UI/UX, Layouts, Responsive Systems",
            },
            {
              icon: <Laptop />,
              title: "Tools",
              desc: "VSCode, Git, Figma, Postman",
            },
          ].map((box, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-black/10 border border-gray-500/20 flex items-start gap-4"
            >
              <div className="text-green-400 text-xl">{box.icon}</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{box.title}</h4>
                <p className="opacity-75 text-sm">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-10"
      >
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Rocket className="text-purple-400" /> Experience
        </h3>

        <div className="flex flex-col sm:border-l border-gray-500/30 pl-6 gap-6">
          {[
            {
              title: "Frontend Developer",
              place: "Personal Projects",
              year: "2023 – Present",
              desc: "Developed full websites with modern frameworks, animations, and responsive UI.",
            },
            {
              title: "Intern Web Developer",
              place: "Legacy Projects",
              year: "2022 – 2023",
              desc: "Worked on large-scale, old architecture systems and optimized front-end structure.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-4 top-1 w-3 h-3 bg-green-400 rounded-full"></div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="opacity-70 text-sm mb-1">
                {item.place} • {item.year}
              </p>
              <p className="opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mb-10"
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Star className="text-yellow-400" /> Interests
        </h3>

        <ul className="space-y-3">
          {[
            "Building beautiful UI and animations",
            "Optimizing performance and SEO",
            "Learning advanced mapping models and AI",
            "Reading computer science books",
            "Open-source contribution",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="text-green-400" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Philosophy / Values */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mb-6"
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="text-pink-400" /> My Work Philosophy
        </h3>

        <p className="leading-relaxed opacity-90 text-justify">
          I believe in writing clean, scalable, and maintainable code. My focus
          is always on long-term quality over shortcuts. I love solving
          challenging problems and continuously improving my design & coding
          skills. Consistency, discipline, and passion are the core of my
          growth.
        </p>
      </motion.div>

      {/* Ending Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="text-center mt-10"
      >
        <Sparkles className="mx-auto text-green-400 w-10 h-10" />
        <p className="opacity-70 mt-2">Always learning, always building.</p>
      </motion.div>
    </motion.div>
  );
}
