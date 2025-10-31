"use client";

import Image from "next/image";
import plane from "../assets/images/plane.png";
import cloud from "../assets/images/cloude.png";
import sky from "../assets/images/Sky.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        clipPath: "ellipse(100% 95% at 50% 0)",
      }}
    >
      {/* Sky Background */}
      <Image
        src={sky}
        alt="Sky Background"
        fill
        className="object-cover"
        style={{
          zIndex: 1,
        }}
        priority
      />
      {/* Opacity layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, ${Math.min(scrollY / 300, 0.6)}) 50%,
            rgba(255, 255, 255, ${Math.min(scrollY / 200, 0.8)}) 100%)`,
          zIndex: 20,
        }}
      />

      {/* Plane top of the clouds */}
      <Image
        src={plane}
        alt="Plane"
        fill
        className="object-contain transition-all duration-700 ease-in-out"
        style={{
          zIndex: 10,
          transform: `translateY(${scrollY * 0.3}px) scale(${
            1 - scrollY / 1500
          })`,
          opacity: Math.max(1 - scrollY / 500, 0),
        }}
      />
      {/* Clouds on the bottom of the plane */}
      <div className="relative top-[-5rem] left-[-40rem] w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Image
            key={i}
            src={cloud}
            alt="Cloud"
            className="absolute transition-transform duration-500 "
            style={{
              top: `${390 + i * 80}px`,
              left: `${i * 20}%`,
              right: "900px",
              width: "800px",
              height: "auto",
              zIndex: 15,
              transform: `translateY(${scrollY * 0.8}px)`,
              opacity: 0.9,
            }}
          />
        ))}
      </div>
      <div className="relative top-[-5rem] left-[-40rem] w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Image
            key={i}
            src={cloud}
            alt="Cloud"
            className="absolute transition-transform duration-500 "
            style={{
              top: `${390 + i * 80}px`,
              left: `${i * 20}%`,
              right: "900px",
              width: "800px",
              height: "auto",
              zIndex: 15,
              transform: `translateY(${scrollY * 0.8}px)`,
              opacity: 0.9,
            }}
          />
        ))}
      </div>
    </div>
  );
}
