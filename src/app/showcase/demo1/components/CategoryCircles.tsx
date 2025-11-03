"use client";

import Image from "next/image";
import { JSX } from "react";
import categoryimg1 from "../assets/images/category1.webp";
import categoryimg2 from "../assets/images/categori2.webp";
import categoryimg3 from "../assets/images/categori3.webp";
import categoryimg4 from "../assets/images/categori4.webp";
import categoryimg5 from "../assets/images/categori5.webp";
import categoryimg6 from "../assets/images/categori6.webp";
import categoryimg7 from "../assets/images/categori7.webp";
import categoryimg8 from "../assets/images/categori8.webp";
import categoryimg9 from "../assets/images/categori9.webp";


export default function CategoryCircles(): JSX.Element {
  const categories = [
    { img: categoryimg1, title: "ابزارآلات" },
    { img: categoryimg2, title: "زیبایی و سلامتی" },
    { img: categoryimg3, title: "سوپرمارکت" },
    { img: categoryimg4, title: "محصولات بومی و محلی" },
    { img: categoryimg5, title: "ورزش و سفر" },
    { img: categoryimg6, title: "مد و پوشاک" },
    { img: categoryimg7, title: "اسباب بازی کودک" },
    { img: categoryimg8, title: "کتاب و لوازم اتحریر" },
    { img: categoryimg9, title: "خانه و آشپزخانه" },


  ];

  return (
    <div className="flex items-center justify-center gap-10 py-10">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-orange-400 animate-border-spin">
            <div className="rounded-full bg-white p-1 group-hover:scale-105 transition-transform duration-300">
              <Image
                alt={cat.title}
                src={cat.img}
                width={90}
                height={90}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <p className="mt-3 text-sm font-medium group-hover:text-red-500 transition-colors duration-300">
            {cat.title}
          </p>
        </div>
      ))}
    </div>
  );
}
