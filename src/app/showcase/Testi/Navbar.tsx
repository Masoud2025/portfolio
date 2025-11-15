"use client";

import React, { useState } from "react";

export default function FrostedGlassNavbar() {
  const [copied, setCopied] = useState(false);
  const email = "you@example.com"; // === replace with your email ===

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  return (
    <nav className="w-full px-6 py-4">
      <style>{`
        /* small custom styles for frosted glass and blinking dot */
        .frosted { background: rgba(255,255,255,0.06); backdrop-filter: blur(8px) saturate(120%); -webkit-backdrop-filter: blur(8px) saturate(120%); }
        .glass-pill { border: 1px solid rgba(255,255,255,0.08); }
        @keyframes blinkGreen { 0% { opacity: 0.18; transform: scale(0.96); } 50% { opacity: 1; transform: scale(1.05); } 100% { opacity: 0.18; transform: scale(0.96); } }
        .blink-green { animation: blinkGreen 1.2s infinite ease-in-out; }
      `}</style>

      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* left: available-for-work with blinking green light */}
        <div className="flex items-center frosted glass-pill rounded-2xl px-4 py-2 gap-3 ">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400 ring-2 ring-white/20 blink-green" aria-hidden />
            <span className="text-sm font-medium">Available for work</span>
          </div>
        </div>

        {/* center: link group */}
        <div className="flex-1 flex justify-center">
          <div className="inline-flex items-center gap-3 frosted glass-pill rounded-2xl px-3 py-2">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 rounded-lg text-sm font-medium transition-transform transform hover:-translate-y-0.5 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* right: email + copy button */}
        <div className="flex items-center frosted glass-pill rounded-2xl px-3 py-2 gap-2">
          <div className="text-sm font-medium select-text">{email}</div>

          <button
            onClick={copyEmail}
            aria-label="Copy email"
            className="relative inline-flex items-center gap-2 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>

            <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
