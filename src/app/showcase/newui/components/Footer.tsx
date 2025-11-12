"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-800 mt-16">
      {/* Text */}
      <p className="text-gray-500 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Masoud Jafari. Made With LovE ❤️  𝓜𝕵
      </p>

      {/* Social Links  */}
      <div className="flex gap-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
