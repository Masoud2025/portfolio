/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, Link } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import pic1 from "../../demo1/assets/images/banner1.webp";
import pic2 from "../../demo1/assets/images/banner2.webp";
import pic3 from "../../demo1/assets/images/banner3.webp";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "یک وب‌سایت شخصی مدرن با Next.js و Tailwind ساخته شده...",
    image: pic1,
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      "فروشگاه آنلاین با قابلیت سبد خرید، درگاه پرداخت و مدیریت محصولات...",
    image: pic2,
    tags: ["React", "Zustand", "Stripe"],
  },
  {
    id: 3,
    title: "Dashboard App",
    description: "پنل مدیریت داده‌ها با نمودارهای پویا و API اتصال زنده...",
    image: pic3,
    tags: ["Next.js", "Recharts", "Prisma"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#1E1F23] text-white flex flex-col items-center justify-start pt-8 pb-16 px-5">
      {/* Projects grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#34363A] rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Picture */}
            <div className="w-full h-64 md:h-72 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text */}
            <div className="text-center mt-6">
              <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
              <p className="text-base opacity-80 mt-2">
                {project.description.slice(0, 50)}...
              </p>
            </div>

            {/* blue button on the bottom right */}
            <button
              onClick={() => setSelected(project)}
              className="absolute bottom-2 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors hover:cursor-pointer"
            >
              <Info size={20} />
            </button>
            <button
              onClick={() => setSelected(project)}
              className="absolute bottom-2 right-16 bg-purple-500 hover:bg-purple-700 text-white p-2.5 rounded-full transition-colors hover:cursor-pointer"
            >
              <Link size={20} />
            </button>
          </div>
        ))}
      </div>
      {/* Pop up  */}
      <AnimatePresence>
        {selected && (
          <>
            {/* blur background  */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal details  */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-[#2A2C30] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              {/* Projects image */}
              <div className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={700}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Texts and tags */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-bold mb-3">{selected.title}</h2>
                <p className="text-base opacity-90 mb-5">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {selected.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="bg-[#3E4045] text-sm px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white px-5 py-2.5 rounded-lg"
                >
                  بستن
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="bg-purple-600 hover:bg-purple-700 hover:cursor-pointer text-white px-5 py-2.5 rounded-lg ml-4"
                >
                  مشاهده
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
