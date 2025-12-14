import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-neutral-100 px-4 py-1 text-sm text-neutral-600">
            Frontend / Full-Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
            Building clean, scalable
            <br />
            web experiences.
          </h1>

          <p className="max-w-xl text-neutral-600 text-base sm:text-lg">
            I design and develop modern web applications with a strong focus on
            performance, usability, and maintainable code.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-6 text-neutral-600">
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="hover:text-neutral-900 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>

            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="hover:text-neutral-900 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden md:flex justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-neutral-100 blur-2xl" />
          <div className="relative rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-sm text-neutral-500 mb-2">Currently working with</p>
            <ul className="space-y-2 text-neutral-800 font-medium">
              <li>Next.js (App Router)</li>
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
