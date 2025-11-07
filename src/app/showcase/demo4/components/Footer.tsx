"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "fa">("en");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // اگر از Tailwind + dark mode استفاده می‌کنید، می‌توانید body class هم تغییر دهید
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "fa");
  };

  return (
    <footer className="bg-[#34363A] text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-lg font-semibold">
        © 2025 YourCompany
      </div>

      <div className="flex items-center gap-4">
        {/* Language Select */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-[#4B4C50] text-white px-3 py-1 rounded-md focus:outline-none"
        >
          <option value="en">English</option>
          <option value="fa">فارسی</option>
        </select>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-[#4B4C50] px-3 py-1 rounded-md hover:bg-gray-700 transition"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </footer>
  );
}
