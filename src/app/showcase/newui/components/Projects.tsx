"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ExternalLink, Github, Moon, Sun, Globe } from "lucide-react";
import pic1 from "../../../../../public/demo1pic.png";
import pic2 from "../../../../../public/demo2pic.png";

const Projects = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState<"en" | "fa">("en");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // pointer position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth movement and phyisical
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const isDark = theme === "dark";

  const translations = {
    en: {
      title: "Projects",
      viewDemo: "View Demo",
      viewCode: "Code",
    },
    fa: {
      title: "پروژه‌ها",
      viewDemo: "مشاهده دمو",
      viewCode: "کد",
    },
  };

  const t = translations[lang];

  const projects = [
    {
      title: { en: "E-Commerce Platform", fa: "پلتفرم فروشگاهی" },
      description: {
        en: "Full-featured shopping platform with cart and payment integration",
        fa: "پلتفرم خرید آنلاین با سبد خرید و یکپارچه‌سازی پرداخت",
      },
      tech: ["React", "Next.js", "Tailwind", "Stripe"],
      demo: "https://demo.com",
      code: "https://github.com",
      image: pic1.src,
    },
    {
      title: { en: "Dashboard Analytics", fa: "داشبورد تحلیلی" },
      description: {
        en: "Interactive admin dashboard with real-time data visualization",
        fa: "داشبورد مدیریتی با تجسم داده به صورت زنده",
      },
      tech: ["React", "TypeScript", "Chart.js"],
      demo: "https://demo.com",
      code: "https://github.com",
      image: pic2.src,
    },
    {
      title: {
        en: "Responsive design tester TOOL",
        fa: "ابزار تست سایت در موبایل و تبلت ",
      },
      description: {
        en: "Just enter the url and see you website in mobile & tablet view",
        fa: "فقط کافی آدرس سایت مورد نظر  رو وارد کنی بعدش میتونی سایتت رو تو موبایل و تبلت ببنینی چه شکلی میشه ",
      },
      tech: ["React", "TypeScript", "Chart.js"],
      demo: "https://demo.com",
      code: "https://github.com",
      image: pic2.src,
    },
    {
      title: { en: "Social Media App", fa: "اپ شبکه اجتماعی" },
      description: {
        en: "Modern social platform with posts and notifications",
        fa: "پلتفرم اجتماعی با پست، کامنت و اعلان زنده",
      },
      tech: ["React", "Firebase", "Tailwind"],
      demo: "https://demo.com",
      code: "https://github.com",
      image: pic1.src,
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen transition-colors duration-500 relative overflow-hidden h-screen w-screen ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Floating Controls */}
      <div className="fixed top-8 right-8 z-50 flex gap-3">
        <button
          onClick={() => setLang(lang === "en" ? "fa" : "en")}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
            isDark
              ? "bg-white/10 hover:bg-white/20"
              : "bg-black/5 hover:bg-black/10"
          }`}
        >
          <Globe size={18} />
        </button>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
            isDark
              ? "bg-white/10 hover:bg-white/20"
              : "bg-black/5 hover:bg-black/10"
          }`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Hover Image Preview */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.img
            key={hoveredImage}
            src={hoveredImage}
            alt="preview"
            style={{
              translateX: springX,
              translateY: springY,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed w-72 h-96 object-cover rounded-xl pointer-events-none z-40 shadow-lg"
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1
            className={`text-5xl md:text-7xl font-light tracking-tight mb-4 ${
              lang === "fa" ? "text-right" : ""
            }`}
          >
            {t.title}
          </h1>
          <div
            className={`w-16 h-0.5 ${isDark ? "bg-white" : "bg-black"} ${
              lang === "fa" ? "ml-auto" : ""
            }`}
          ></div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group border-b transition-colors duration-300 ${
                isDark
                  ? "border-white/10 hover:border-white/30"
                  : "border-black/10 hover:border-black/30"
              }`}
              onMouseEnter={() => setHoveredImage(project.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="py-8 px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span
                        className={`text-sm font-mono ${
                          isDark ? "text-white/40" : "text-black/40"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light tracking-tight">
                        {project.title[lang]}
                      </h3>
                    </div>
                    <p
                      className={`text-sm md:text-base ml-12 mb-3 ${
                        isDark ? "text-white/60" : "text-black/60"
                      }`}
                    >
                      {project.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2 ml-12">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-white/5 text-white/60"
                              : "bg-black/5 text-black/60"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 ml-12 md:ml-0">
                    <a
                      href={project.demo}
                      target="_blank"
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                        isDark
                          ? "bg-white text-black hover:bg-white/90"
                          : "bg-black text-white hover:bg-black/90"
                      }`}
                    >
                      {t.viewDemo}
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border transition-all duration-300 ${
                        isDark
                          ? "border-white/20 hover:bg-white/5"
                          : "border-black/20 hover:bg-black/5"
                      }`}
                    >
                      <Github size={14} />
                      {t.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
