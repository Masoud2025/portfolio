"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";
import itguy from "../../../public/ITGUY-removebg-preview.png";

const codeSnippets = [
  { text: "<h1>Hello</h1>", color: "#e06c75" },
  { text: "body { margin: 0; }", color: "#98c379" },
  { text: "console.log('Hi')", color: "#61afef" },
  { text: "const x = 10;", color: "#c678dd" },
  { text: "<div className='app'></div>", color: "#e5c07b" },
  { text: "function greet() {}", color: "#61afef" },
  { text: "color: red;", color: "#98c379" },
  { text: "let arr = [1,2,3];", color: "#c678dd" },
];

export default function ItGuy(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(220);

  // Adjust radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(120);
      else if (window.innerWidth < 1024) setRadius(160);
      else setRadius(220);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Orbit Animation
  useEffect(() => {
    let angle = 0;

    const animate = () => {
      if (containerRef.current) {
        const children = Array.from(
          containerRef.current.children
        ) as HTMLElement[];
        const n = children.length;

        children.forEach((child, i) => {
          const theta = (i / n) * 2 * Math.PI + angle;
          const phi = Math.PI / 6;

          const x = radius * Math.cos(theta) * Math.cos(phi);
          const y = radius * Math.sin(phi);
          const z = radius * Math.sin(theta) * Math.cos(phi);

          const scale = 0.5 + (z + radius) / (2 * radius);
          child.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
          child.style.zIndex = `${Math.floor(scale * 1000)}`;
          child.style.opacity = `${0.5 + scale / 2}`;
        });

        angle += 0.002;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [radius]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8 perspective-[1200px] mt-[-29rem]"
    >
      {/* Background Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20, filter: "blur(12px)" }}
        animate={{ opacity: 0.05, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-100 
        font-extrabold text-center whitespace-nowrap pointer-events-none"
      >
        برنــــــــــــامه نویـــــــــــــــس
      </motion.h1>

      {/* Main Container */}
      <div className="relative flex justify-center items-end w-full max-w-7xl h-full">
        {/* IT Guy Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          className="relative md:mb-36  
          w-[400px] h-[550px] sm:w-[400px] sm:h-[400px] 
          md:w-[550px] md:h-[550px] 
          lg:w-[700px] lg:h-[700px] 
          xl:w-[800px] xl:h-[800px]"
        >
          <Image
            src={itguy}
            alt="Masoud"
            fill
            className="object-contain object-bottom relative z-20"
          />
        </motion.div>

        {/* Orbiting Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          ref={containerRef}
          className="
            absolute top-[-5%] left-[46%] sm:top-[1%] md:top-[40%] 
            -translate-x-1/2 w-0 h-0 pointer-events-none z-30"
        >
          {codeSnippets.map((snippet, idx) => (
            <div
              key={idx}
              className="absolute font-mono font-bold 
              text-xs sm:text-sm md:text-base lg:text-lg 
              p-1 rounded-md select-none"
              style={{
                transform: "translate3d(0,0,0)",
                color: snippet.color,
              }}
            >
              {snippet.text}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
