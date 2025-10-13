"use client";

import { JSX } from "react";
import { ArrowLeft } from "lucide-react";
import AuroraBackground from "@/components/ui/background";

export default function Blog(): JSX.Element {
  const posts = [
    {
      id: 1,
      title: "شروع کار با Next.js 15",
      description:
        "در این پست یاد می‌گیریم چطور با نسخه جدید Next.js شروع کنیم و ویژگی‌های جدید App Router را بررسی کنیم.",
    },
    {
      id: 2,
      title: "ترفندهایی برای کدنویسی تمیز در React",
      description:
        "در این مقاله چند روش کاربردی برای نوشتن کدهای خوانا و قابل نگهداری در پروژه‌های React یاد می‌گیریم.",
    },
    {
      id: 3,
      title: "مقدمه‌ای بر TypeScript برای توسعه‌دهندگان فرانت‌اند",
      description:
        "در این مطلب مفاهیم کلیدی TypeScript را بررسی می‌کنیم و می‌بینیم چطور به کدنویسی ایمن‌تر و سریع‌تر کمک می‌کند.",
    },
    {
      id: 4,
      title: "طراحی رابط کاربری مینیمال در پروژه‌های وب",
      description:
        "در این نوشته درباره اصول طراحی مینیمال و تأثیر آن بر تجربه کاربری صحبت می‌کنیم.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center mt-20 px-4" dir="rtl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-14 text-center">
        بلاگ من 📝
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1100px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
              flex flex-col justify-between
              bg-white/5 backdrop-blur-xl border border-white/10 
              shadow-[0_8px_30px_rgba(0,0,0,0.3)]
              rounded-[25px] p-6
              text-gray-200 hover:scale-[1.03] transition-all duration-300
              hover:shadow-indigo-500/20
            "
          >
            <div>
              <h2 className="text-xl font-semibold text-indigo-400 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>

            <button
              className="
                flex items-center gap-2 self-end mt-6 
                text-indigo-400 hover:text-indigo-300 transition-all
              "
            >
              مطالعه بیشتر <ArrowLeft size={18} />
            </button>
          </div>
        ))}
      </div>
            <AuroraBackground />
    </section>
  );
}
