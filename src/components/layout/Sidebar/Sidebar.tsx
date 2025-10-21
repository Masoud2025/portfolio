"use client";

import { Briefcase, FileUser, Home, Mail, NotebookPen } from "lucide-react";
import { JSX } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Briefcase, label: "Portfolio" },
  { icon: Mail, label: "Contact" },
  { icon: FileUser, label: "About" },
  { icon: NotebookPen, label: "Blog" },
];

export default function Sidebar(): JSX.Element {
  return (
    <aside className="fixed top-0 right-0 h-screen flex flex-col items-center p-4 bg-[#121212] shadow-lg z-50">
      {/* Logo stays at the top */}
      <div className="bg-[#DBA91C] w-14 h-14 flex items-center justify-center rounded-2xl font-extrabold text-white text-lg">
        LOGO
      </div>

      {/* Spacer to push nav items to vertical center */}
      <div className="flex flex-col flex-1 justify-center items-center gap-6">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="group relative flex items-center">
              {/* Icon button */}
              <button
                aria-label={item.label}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl hover:bg-gray-700 transition-colors duration-200"
              >
                <Icon color="white" size={30} className="sm:w-8 sm:h-8" />
              </button>

              {/* Tooltip */}
              <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-2 py-1 whitespace-nowrap transition-opacity duration-200">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
