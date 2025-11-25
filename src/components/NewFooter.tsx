"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-800 px-6 py-8 border-t border-gray-200">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright text */}
        <p className="text-sm text-gray-600">
          © 2025 Masoud Jafari. All rights reserved.
        </p>

        {/* Navigation links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900 transition-colors text-sm">
            Home
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors text-sm">
            Projects
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors text-sm">
            Contact
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
