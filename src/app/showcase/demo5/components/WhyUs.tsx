"use client";

import { motion } from "framer-motion";
import { Star, Clock, Laptop, Users } from "lucide-react";

const features = [
  { icon: <Star />, title: "مدرسین حرفه‌ای", text: "تجربه واقعی از متخصصان صنعت" },
  { icon: <Clock />, title: "دسترسی 24 ساعته", text: "در هر زمان، هر مکان یاد بگیر!" },
  { icon: <Laptop />, title: "دوره‌های پروژه‌محور", text: "با پروژه واقعی مهارتت رو بساز" },
  { icon: <Users />, title: "جامعه فعال", text: "پرسش و پاسخ با دیگر دانشجویان" },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#e7e3ff] to-[#f8f6ff]">
      <h2 className="text-center text-4xl font-extrabold text-[#543CDF] mb-12">
        چرا LearnEasy؟
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.03 }}
            className="bg-white rounded-3xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-[#543CDF] flex justify-center mb-3 text-3xl">
              {f.icon}
            </div>
            <h3 className="font-bold text-lg">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
