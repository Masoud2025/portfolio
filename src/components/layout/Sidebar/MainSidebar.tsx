"use client";
import Image from "next/image";
import { useState } from "react";
import profilePicture from "../../../../public/Masoud-Jafari-resume-removebg-preview.png";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { motion } from "framer-motion";

// ==================== CONSTANTS ====================
const CONTACT_INFO = {
  email: "example@mail.com",
  phone: "+1 234 567 890",
  location: "Toronto, Canada",
  github: "github.com/example",
};

const SOCIAL_LINKS = [
  { Icon: Github, label: "GitHub", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

// ==================== SUB-COMPONENTS ====================

function ProfileImage({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`
        h-[110px] w-[110px] mx-auto
        rounded-full overflow-hidden
        ${isDark ? "bg-[#373738]" : "bg-gray-200"}
      `}
    >
      <Image
        alt="Masoud Jafari profile picture"
        src={profilePicture}
        className="h-full w-full object-cover object-top"
        priority
      />
    </div>
  );
}

function ProfileInfo({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col items-center mt-4 px-4">
      <h1 className="font-black text-3xl text-center">Masoud Jafari</h1>
      <div
        className={`
          text-center mt-4 text-xl rounded-[10px] w-[80%] py-3
          ${isDark ? "bg-[#2B2B2C]" : "bg-gray-300"}
        `}
      >
        Software Engineer
      </div>
    </div>
  );
}

function MobileToggle({
  isOpen,
  isDark,
  onClick,
}: {
  isOpen: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="md:hidden mx-auto mt-4 flex justify-center"
      aria-label={isOpen ? "Close contact info" : "Open contact info"}
      aria-expanded={isOpen}
    >
      <div
        className={`
          p-4 rounded-2xl transition-all duration-300
          ${isOpen ? "rotate-180" : "rotate-0"}
          ${isDark ? "bg-[#2F6D4D]" : "bg-gray-400"}
        `}
      >
        <ArrowDown color="#FFBD5D" size={18} />
      </div>
    </button>
  );
}

function ContactItem({
  Icon,
  text,
  href,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon size={18} className="flex-shrink-0" />
      <span className="text-sm break-all">{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-2">{content}</div>;
}

function ContactSection({ isOpen, isDark }: { isOpen: boolean; isDark: boolean }) {
  const { toggleTheme } = useTheme();

  return (
    <div
      className={`
        overflow-hidden transition-all duration-700
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        md:max-h-full md:opacity-100
      `}
    >
      <div className="px-4 pb-6 space-y-4">
        {/* Social Links & Theme Toggle */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hover:opacity-70 transition-opacity"
            >
              <Icon size={22} className="cursor-pointer" />
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hover:opacity-70 transition-opacity"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <div className="text-sm font-medium">FA | EN</div>
        </div>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 gap-3 pt-2"
        >
          <ContactItem
            Icon={Mail}
            text={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
          />
          <ContactItem
            Icon={Phone}
            text={CONTACT_INFO.phone}
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          />
          <ContactItem Icon={MapPin} text={CONTACT_INFO.location} />
          <ContactItem
            Icon={Github}
            text={CONTACT_INFO.github}
            href={`https://${CONTACT_INFO.github}`}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <aside
      className={`
        w-full md:w-[260px]
        rounded-[30px] shadow-lg
        transition-all duration-500
        mx-auto md:mx-0
        md:sticky md:top-10
        ${isDark ? "bg-[#111111] text-white" : "bg-white text-black"}
      `}
    >
      {/* Profile Section */}
      <div className="pt-8 pb-4">
        <ProfileImage isDark={isDark} />
        <ProfileInfo isDark={isDark} />
        <MobileToggle
          isOpen={isOpen}
          isDark={isDark}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Contact Information Section */}
      <ContactSection isOpen={isOpen} isDark={isDark} />
    </aside>
  );
}