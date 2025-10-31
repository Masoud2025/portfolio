"use client";

import { JSX, useRef, useEffect } from "react";

const categories = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export default function CategoryCircles(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // clone first items for smooth loop
    const children = Array.from(container.children) as HTMLElement[];
    const totalWidth = children.reduce(
      (sum, child) => sum + child.offsetWidth + 16,
      0
    ); // gap=4
    container.scrollLeft = 0;

    let isDown = false;
    let startX = 0;
    let scrollLeftStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeftStart = container.scrollLeft;
    };

    const onMouseUp = () => (isDown = false);
    const onMouseLeave = () => (isDown = false);

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeftStart - walk;

      // loop smoothly
      if (container.scrollLeft <= 0) {
        container.scrollLeft += totalWidth / 2;
      } else if (container.scrollLeft >= totalWidth / 2) {
        container.scrollLeft -= totalWidth / 2;
      }
    };

    // touch support
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX - container.offsetLeft;
      touchScrollLeft = container.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = x - touchStartX;
      container.scrollLeft = touchScrollLeft - walk;

      if (container.scrollLeft <= 0) {
        container.scrollLeft += totalWidth / 2;
      } else if (container.scrollLeft >= totalWidth / 2) {
        container.scrollLeft -= totalWidth / 2;
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-20 py-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {categories.concat(categories).map((cat, i) => (
          <div
            key={i}
            className="flex-none w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-bold"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
