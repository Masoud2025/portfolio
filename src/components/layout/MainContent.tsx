"use client";
import { useState } from "react";
import AboutMe from "../AboutMe";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import Contact from "../ui/Contact";
import { useTheme } from "../ThemeContext";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();

  const tabs = [
    { title: "About", content: <AboutMe /> },
    { title: "Resume", content: <Resume /> },
    { title: "Portfolio", content: <Portfolio /> },
    { title: "Blog", content: <Blog /> },
    { title: "Contact", content: <Contact /> },
  ];

  return (
    <div
      className={`
        w-full max-w-[900px]
        mx-auto mt-6 mb-20
        rounded-[30px] border p-6
        transition-all duration-500 ease-in-out
        relative
        ${
          theme === "light"
            ? "bg-white text-black border-gray-300"
            : "bg-[#1E1E1F] text-white border-white"
        }
      `}
    >
      {/* تب‌ها برای تبلت و دسکتاپ */}
      <div className="hidden md:flex justify-center space-x-6 border-b border-gray-700 pb-3 mb-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-t-lg text-lg transition-all 
              ${
                activeTab === index
                  ? "bg-[#2F6D4D] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* محتوای تب فعال با ارتفاع ثابت + اسکرول داخلی */}
      <div
        className="
          p-5 rounded-lg bg-[#2B2B2C]
          transition-all duration-500
          overflow-y-auto scroll-smooth hide-scroll
          h-[450px] md:h-[520px]
        "
      >
        {tabs[activeTab].content}
      </div>

      {/* تب‌ها در موبایل */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1E1E1F] flex justify-around md:hidden border-t border-gray-600 p-2 shadow-inner z-50">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-2 transition-all text-sm
              ${
                activeTab === index
                  ? "bg-[#2F6D4D] text-white rounded-t-lg"
                  : "text-gray-400"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
