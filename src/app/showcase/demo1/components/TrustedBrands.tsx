"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// Import brand logos
import samsung from "../assets/images/brands/samsung.png";
import apple from "../assets/images/brands/apple.png";
import xiaomi from "../assets/images/brands/xiaomi.png";
import huawei from "../assets/images/brands/huawei.png";
import oneplus from "../assets/images/brands/oneplus.png";
import nokia from "../assets/images/brands/nokia.png";
import lg from "../assets/images/brands/lg.png";
import sony from "../assets/images/brands/sony.png";
import oppo from "../assets/images/brands/oppo.png";
import honor from "../assets/images/brands/honor.png";
import realme from "../assets/images/brands/realme.png";
import nothing from "../assets/images/brands/nothing.png";
import Image from "next/image";
// Placeholder brand data - replace with your actual imports
const brands = [
  { img: samsung, name: "Samsung", color: "#1428A0" },
  { img: apple, name: "Apple", color: "#000000" },
  { img: xiaomi, name: "Xiaomi", color: "#FF6700" },
  { img: huawei, name: "Huawei", color: "#FF0000" },
  { img: oneplus, name: "OnePlus", color: "#000000" },
  { img: nokia, name: "Nokia", color: "#124191" },
  { img: lg, name: "LG", color: "#A50034" },
  { img: sony, name: "Sony", color: "#000000" },
  { img: oppo, name: "Oppo", color: "#00A55E" },
  { img: honor, name: "Honor", color: "#0075C9" },
  { img: realme, name: "Realme", color: "#FFD900" },
  { img: nothing, name: "Nothing", color: "#000000" },
];
export default function TrustedBrands() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <div className="w-full py-10 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-right text-2xl font-bold mr-[10rem] mb-8 text-gray-800">
        برندهای مورد اعتماد
      </h1>

      <div className="relative w-[85%] mx-auto rounded-2xl p-6 bg-white shadow-sm">
        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" dir="rtl">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="min-w-0 flex-shrink-0 pl-6 first:pl-0"
                style={{ flex: "0 0 16.66%" }}
              >
                <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer group h-full">
                  <div
                    className="w-32 h-32 mb-3 rounded-lg flex items-center justify-center text-4xl font-bold transition-all duration-300 grayscale group-hover:grayscale-0"
                    style={{ backgroundColor: `${brand.color}20` }}
                  >
                    <div className="relative w-32 h-32 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <Image
                        alt={brand.name}
                        src={brand.img}
                        fill
                        className="object-contain"
                        sizes="128px"
                      />
                    </div>
                    {/* <span style={{ color: brand.color }}>{brand.name[0]}</span> */}
                  </div>
                  <p className="text-center text-gray-600 group-hover:text-gray-900 text-sm font-medium transition-colors">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
