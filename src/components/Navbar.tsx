import Link from "next/link";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full h-9 bg-neutral-900 text-neutral-300 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        
        {/* Left: Role */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-neutral-400">Frontend / Full-Stack Developer</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="mailto:your@email.com"
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <Mail size={16} />
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            aria-label="Resume"
            className="hover:text-white transition-colors"
          >
            <FileText size={16} />
          </Link>

          <Link
            href="https://github.com/your-username"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <Github size={16} />
          </Link>

          <Link
            href="https://linkedin.com/in/your-username"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
