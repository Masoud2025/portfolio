"use client";

import { JSX, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import pic1 from "../assets/images/digital/small_product-TLP-149697_e49566d8-244f-415b-a227-f7345502170a.webp";
import pic2 from "../assets/images/digital/small_product-TLP-166017_250aedff-25a9-415c-9e6f-dd4d8dc33f7a.webp";
import pic3 from "../assets/images/digital/small_product-TLP-59171_36920432-b849-4f7d-af68-5879b74b2847.webp";
import pic4 from "../assets/images/digital/small_product-TLP-59177_9d9b7e4a-7e12-4787-bd8a-4afe9326bac3.webp";
import pic5 from "../assets/images/digital/small_product-TLP-60357_06e32568-85f2-40a0-bd68-9ad7e03f7dfa.webp";
import pic6 from "../assets/images/digital/small_product-TLP-69015_f4d23762-985a-455b-9664-393d01ee41e8.webp";
import pic7 from "../assets/images/digital/small_product-TLP-69610_dcb93d6f-a847-4fed-8ab4-d05756d05a8e.webp";
import pic8 from "../assets/images/digital/small_product-TLP-7452_ed0c1b29-f82b-486d-8d7f-3c7a1c119d2d.webp";
import pic9 from "../assets/images/digital/small_product-TLP-78111_88f3841f-186e-4fb3-a519-89f6967547ab.webp";

const products = [
  {
    img: pic1,
    name: "گوشی سامسونگ Galaxy S25 Ultra 5G",
    price: "۷۴,۹۰۰,۰۰۰ تومان",
  },
  { img: pic2, name: "گوشی شیائومی 14 Ultra 5G", price: "۵۹,۵۰۰,۰۰۰ تومان" },
  { img: pic3, name: "گوشی آیفون 15 Pro Max", price: "۸۹,۹۰۰,۰۰۰ تومان" },
  {
    img: pic4,
    name: "گوشی سامسونگ Galaxy Z Fold 6",
    price: "۹۵,۸۰۰,۰۰۰ تومان",
  },
  { img: pic5, name: "گوشی شیائومی 13T Pro", price: "۴۳,۹۰۰,۰۰۰ تومان" },
  { img: pic6, name: "گوشی آنر Magic 6 Pro", price: "۵۱,۸۰۰,۰۰۰ تومان" },
  { img: pic7, name: "گوشی پوکو F6 Pro", price: "۳۴,۷۰۰,۰۰۰ تومان" },
  { img: pic8, name: "گوشی وان‌پلاس 12R", price: "۳۸,۹۰۰,۰۰۰ تومان" },
  { img: pic9, name: "گوشی ناتینگ فون 2a", price: "۲۹,۵۰۰,۰۰۰ تومان" },
];

export default function Digital_products(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full py-10 bg-white" dir="rtl">
      <h1 className="text-right text-2xl font-bold mr-8 sm:mr-16 mb-8 text-gray-800">
        محصولات دیجیتال
      </h1>

      <div className="relative w-[90%] sm:w-[85%] mx-auto rounded-2xl p-2 sm:p-6">
        {/* دکمه‌های حرکت */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full p-2 z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ❮
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full p-2 z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ❯
        </button>

        {/* اسلایدر */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_20%] bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md p-4 flex flex-col items-center justify-between"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-3">
                  <Image
                    alt={p.name}
                    src={p.img}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
                <h2 className="text-center text-gray-800 text-sm sm:text-base font-semibold leading-6">
                  {p.name}
                </h2>
                <p className="text-center text-[#0d9488] font-bold mt-2 text-sm sm:text-base">
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
