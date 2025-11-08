"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { JSX } from "react";
import pic1 from "../assets/images/laptop.jpg"
import pic2 from "../assets/images/banner_SecondTwinBanners_0sv6zR_aaa18779-43a0-462d-b207-6d7d16f46af4.webp"

export default function Blog(): JSX.Element {
  const articles = [
    {
      id: 1,
      title: "راهنمای خرید لپ‌تاپ برنامه‌نویسی",
      desc: "در این مقاله بررسی می‌کنیم چه لپ‌تاپی برای برنامه‌نویس‌ها مناسب‌تر است...",
      image: pic1,
      link: "#",
    },
    {
      id: 2,
      title: "بهترین فریم‌ورک‌های فرانت‌اند در سال ۲۰۲۵",
      desc: "در دنیای توسعه وب، رقابت میان فریم‌ورک‌ها بسیار داغ است...",
      image: pic2,
      link: "#",
    },
    {
      id: 3,
      title: "نکاتی برای افزایش سرعت سایت",
      desc: "اگر سرعت سایت شما پایین است، این نکات ساده می‌تواند عملکرد آن را بهبود دهد...",
      image:pic1,
      link: "#",
    },
    {
      id: 4,
      title: "آینده هوش مصنوعی در تجارت الکترونیک",
      desc: "در این مقاله به نقش رو‌به‌رشد AI در خرید و فروش آنلاین می‌پردازیم...",
      image: pic2,
      link: "#",
    },
  ];

  return (
    <div className=" p-8 ">
      <h1 className="text-3xl font-extrabold text-center mb-8">
        مطالب خواندنی فروشگاه
      </h1>

      <section className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max px-4">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col min-w-[300px] max-w-[320px]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {a.desc}
                </p>
                <a
                  href={a.link}
                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  ادامه مطلب
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/*
✅ توضیحات:
- نمایش مقالات به‌صورت یک ردیف افقی با اسکرول افقی و قابلیت درگ با ماوس.
- فوتر حذف شده است.
- برای پنهان کردن اسکرول می‌توان از کلاس scrollbar-hide یا CSS سفارشی استفاده کرد.
*/
