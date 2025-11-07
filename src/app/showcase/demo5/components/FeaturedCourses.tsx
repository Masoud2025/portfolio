"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, BookOpen } from "lucide-react";
import picture from "../../demo1/assets/images/soti-tasviri-finalfont.png"
import picture1 from "../../demo1/assets/images/banner_SecondTwinBanners_uL6yA2_29c40432-c40f-468e-8821-bebdd3d5b908.webp"

const courses = [
  {
    title: "دوره React حرفه‌ای",
    desc: "از مقدمات تا ساخت پروژه واقعی",
    img: picture,
  },
  {
    title: "دوره Next.js پیشرفته",
    desc: "ساخت وب‌اپ با App Router جدید",
    img: picture1,
  },
  {
    title: "دوره Tailwind CSS",
    desc: "طراحی زیبا با سرعت نور",
    img: picture,
  },
  {
    title: "دوره TypeScript",
    desc: "امنیت در کدهای جاوااسکریپتی",
    img: picture1,
  },
];

export default function FeaturedCourses() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f6ff] to-[#e7e3ff] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold text-[#543CDF] mb-12"
      >
        دوره‌های محبوب
      </motion.h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8 px-10">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="min-w-[22rem] bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={300}
                height={200}
                className="rounded-2xl object-cover"
              />
              <h3 className="text-xl font-bold mt-4 text-[#543CDF]">
                {course.title}
              </h3>
              <p className="text-gray-600 mt-2">{course.desc}</p>
              <button className="mt-4 flex items-center gap-2 bg-[#543CDF] text-white px-5 py-2 rounded-3xl hover:bg-[#6c52ff] transition">
                <Play size={18} /> مشاهده
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
