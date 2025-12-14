    import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-200 py-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white">
          Masoud Jafari
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-6 text-neutral-300 text-sm">
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/your-username"
            target="_blank"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:your-email@example.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Masoud Jafari. All rights reserved.
      </div>
    </footer>
  );
}
