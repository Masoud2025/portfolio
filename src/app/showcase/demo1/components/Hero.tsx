"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pcBanner from "../assets/images/banner1.webp";
import Headphone from "../assets/images/banner2.webp";
import MouseKeyboardImage from "../assets/images/banner3.webp";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    { src: pcBanner, alt: "PC Banner" },
    { src: MouseKeyboardImage, alt: "Keyboard and Mouse" },
    { src: Headphone, alt: "Headphone" },
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      className="embla group relative w-full h-[30vh] md:h-[40vh] overflow-hidden  shadow-lg "
      ref={emblaRef}
    >
      {/* Slides */}
      <div className="embla__container flex h-full ">
        {slides.map((slide, index) => (
          <div
            className="embla__slide relative flex-[0_0_100%] h-full"
            key={index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0  flex items-center justify-center">
             
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows — hidden until hover */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-white/50 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-white/50 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
