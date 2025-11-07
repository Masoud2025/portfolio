"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const teachers = [
  {
    name: "دکتر محمدی",
    role: "مدرس React و Front-end",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "مهندس سارا کاظمی",
    role: "مدرس UX/UI و طراحی رابط کاربری",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "استاد نادری",
    role: "مدرس JavaScript و Node.js",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

export default function Instructors() {
  return (
    <section className="py-24 bg-white">
      <h2 className="text-center text-4xl font-extrabold text-[#543CDF] mb-12">
        مدرسین برتر
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {teachers.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-[#f8f6ff] to-[#e7e3ff] rounded-3xl shadow-lg p-6 w-[18rem] text-center"
          >
            <Image
              src={t.img}
              alt={t.name}
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-xl text-gray-800">{t.name}</h3>
            <p className="text-gray-500 mb-4">{t.role}</p>
            <button className="bg-[#543CDF] text-white px-5 py-2 rounded-3xl flex items-center gap-2 justify-center mx-auto">
              <Linkedin size={16} /> LinkedIn
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
