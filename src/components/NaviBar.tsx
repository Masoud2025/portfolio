"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "/Experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          Masoud<span className="text-neutral-500">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
        >
          Hire Me
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-900"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <ul className="flex flex-col px-4 py-4 gap-4 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-neutral-900 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-white"
            >
              Hire Me
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
