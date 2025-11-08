"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

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
    <div
      className="w-full py-10 bg-gradient-to-b from-gray-50 to-white"
      dir="rtl"
    >
      <h1 className="text-right text-2xl font-bold mr-8 sm:mr-16 mb-8 text-gray-800">
        برندهای مورد اعتماد
      </h1>

      <div className="relative w-[90%] sm:w-[85%] mx-auto rounded-2xl p-2 sm:p-6 bg-white shadow-sm">
        {/* دکمه‌ها */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous"
        >
          ❮
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next"
        >
          ❯
        </button>

        {/* اسلایدر */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex-[0_0_40%] sm:flex-[0_0_25%] md:flex-[0_0_20%] lg:flex-[0_0_14.28%] min-w-0"
              >
                <div className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer group h-full">
                  <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{
                      backgroundColor: `${brand.color}10`,
                      borderRadius: "12px",
                    }}
                  >
                    <Image
                      alt={brand.name}
                      src={brand.img}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                    />
                  </div>
                  <p className="text-center text-gray-600 group-hover:text-gray-900 text-xs sm:text-sm font-medium transition-colors">
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
