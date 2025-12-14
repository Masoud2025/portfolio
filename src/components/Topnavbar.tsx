"use client";
import {
  Briefcase,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function SocialStatusBar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      url: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: Twitter,
      url: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 gap-3 sm:gap-6">
          {/* بخش چپ: اطلاعات وضعیت */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            {/* لوکیشن */}
            <div className="flex items-center gap-2 text-gray-300 group cursor-pointer">
              <MapPin className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline group-hover:text-white transition-colors duration-300">
                Tehran, Iran
              </span>
              <span className="sm:hidden group-hover:text-white transition-colors duration-300">
                Tehran
              </span>
            </div>

            {/* وضعیت همکاری */}
            <div className="flex items-center gap-2 text-gray-300 group cursor-pointer">
              <Briefcase className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:inline group-hover:text-white transition-colors duration-300">
                Available for hire
              </span>
              <span className="md:hidden group-hover:text-white transition-colors duration-300">
                Available
              </span>
            </div>

            {/* تماس */}
            <div className="hidden lg:flex items-center gap-2 text-gray-300 group cursor-pointer">
              <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">
                +98 912 345 6789
              </span>
            </div>
          </div>

          {/* بخش راست: شبکه‌های اجتماعی */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* ایمیل */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group relative"
              title="Copy email"
            >
              <Mail className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline text-sm">info@example.com</span>
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            {/* جداکننده */}
            <div className="w-px h-5 bg-gray-600"></div>

            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125`}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* وبسایت */}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              title="Website"
            >
              <Globe className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm hidden lg:inline">example.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
