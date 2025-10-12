"use client";

import { JSX } from "react";
import {
  Code,
  Layout,
  Database,
  Cpu,
  Rocket,
  Settings,
  FileJson,
  Cloud,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
  const skills = [
    { name: "Next.js", icon: <Rocket className="w-6 h-6 text-indigo-400" /> },
    { name: "React", icon: <Layout className="w-6 h-6 text-blue-400" /> },
    { name: "TypeScript", icon: <FileJson className="w-6 h-6 text-sky-400" /> },
    {
      name: "Tailwind CSS",
      icon: <Settings className="w-6 h-6 text-cyan-400" />,
    },
    { name: "Node.js", icon: <Cpu className="w-6 h-6 text-green-400" /> },
    {
      name: "MongoDB",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
    },
    { name: "Git", icon: <Code className="w-6 h-6 text-orange-400" /> },
    { name: "REST APIs", icon: <Cloud className="w-6 h-6 text-purple-400" /> },
    { name: "Linux", icon: <Terminal className="w-6 h-6 text-gray-300" /> },
  ];

  return (
    <section className="w-full flex flex-col items-center mt-20 mb-10">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
        مهارت‌ها
      </h2>

      {/* نوار متحرک مهارت‌ها */}
      <div className="relative overflow-hidden w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 border-y border-gray-700">
        <motion.div
          className="flex gap-12 items-center w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[120px] text-center select-none"
            >
              <div className="p-3 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200">
                {skill.icon}
              </div>
              <p className="text-gray-300 text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
