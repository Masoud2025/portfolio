"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import Hero_pic from "../assets/Images/xacrispy-french-fries_317111-1056.jpg";
import Image from "next/image";
export default function Hero(): JSX.Element {
  return (
    <section
      aria-label="Hero - Fast Food"
      className="relative overflow-hidden rounded-2xl shadow-2xl px-6 py-12 md:py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg,#ff7a18 0%,#ffb347 50%,#ff6a00 100%)",
      }}
    >
      {/* subtle pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.02) 8px, transparent 8px, transparent 16px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <p className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
            تازه — سریع — خوشمزه
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            طعمِ واقعیِ فست‌فود
            <span className="block text-yellow-50 text-2xl sm:text-3xl mt-2">
              (که دوباره دلتون رو برای غذا تنگ می‌کنه)
            </span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 mb-6">
            برگرهای آبدار، سیب‌زمینی‌های کرانچی و سس‌هایی که هر لقمه رو به جشن
            تبدیل می‌کنن — همون چیزی که امروز بهش احتیاج داری!
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#order"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-white text-orange-600 font-semibold shadow-lg hover:scale-[1.02] transition-transform"
            >
              سفارش فوری
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m5-7v7m4-7v7m4-7l2 7"
                />
              </svg>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-white/30 text-white/95 font-semibold hover:bg-white/10 transition"
            >
              منو رو ببین
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 px-3 py-2 text-sm">
                🔥 محبوب الآن
              </div>
              <div className="text-sm">برگر مخصوص با پنیر واقعی</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end items-center">
          {/* Decorative food illustration — SVG so no external images required */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="w-64 sm:w-80 lg:w-96"
          >
            <svg
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <defs>
                <linearGradient id="bun" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffd89b" />
                  <stop offset="100%" stopColor="#ffb86b" />
                </linearGradient>
                <linearGradient id="patty" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#6b2b00" />
                  <stop offset="100%" stopColor="#3e1800" />
                </linearGradient>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="14"
                    stdDeviation="18"
                    floodOpacity="0.25"
                  />
                </filter>
              </defs>

              {/* plate */}
              <g transform="translate(300,360)">
                <ellipse rx="170" ry="30" fill="rgba(255,255,255,0.12)" />
              </g>

              {/* burger stack */}
              <g transform="translate(300,220)">
                {/* top bun */}
                <g filter="url(#shadow)">
                  <ellipse cx="0" cy="-80" rx="160" ry="70" fill="url(#bun)" />
                  {/* sesame seeds */}
                  <g fill="#fff8" opacity="0.9">
                    <ellipse
                      cx="-40"
                      cy="-95"
                      rx="8"
                      ry="4"
                      transform="rotate(-20)"
                    />
                    <ellipse
                      cx="10"
                      cy="-105"
                      rx="6"
                      ry="3"
                      transform="rotate(10)"
                    />
                    <ellipse
                      cx="60"
                      cy="-95"
                      rx="7"
                      ry="3"
                      transform="rotate(-10)"
                    />
                  </g>
                </g>

                {/* lettuce */}
                <path
                  d="M-140 -60 C -100 -30, 100 -30, 140 -60 C 100 -40, -100 -40, -140 -60 Z"
                  fill="#9be28b"
                />

                {/* patty */}
                <ellipse cx="0" cy="-20" rx="140" ry="44" fill="url(#patty)" />

                {/* cheese */}
                <rect
                  x="-120"
                  y="-8"
                  width="240"
                  height="20"
                  rx="6"
                  fill="#ffd25b"
                  transform="rotate(-2)"
                />

                {/* bottom bun */}
                <ellipse cx="0" cy="28" rx="150" ry="50" fill="url(#bun)" />
              </g>

              {/* fries box */}
              <g transform="translate(440,360)">
                <rect
                  x="-30"
                  y="-80"
                  width="70"
                  height="90"
                  rx="10"
                  fill="#ff3b00"
                />
                <rect
                  x="-20"
                  y="-110"
                  width="12"
                  height="35"
                  rx="4"
                  fill="#ffd25b"
                />
                <rect
                  x="0"
                  y="-120"
                  width="12"
                  height="45"
                  rx="4"
                  fill="#ffd25b"
                />
                <rect
                  x="20"
                  y="-105"
                  width="12"
                  height="30"
                  rx="4"
                  fill="#ffd25b"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* subtle bottom wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ transform: "translateY(50%)" }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C150,100 350,0 600,30 C850,60 1050,0 1200,40 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>
      <Image alt="Ayda Eshge Mane❤️" src={Hero_pic} width={500} className="w-[100%] " />
    </section>
  );
}



























// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Hero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const { scrollY } = useScroll();
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 20,
//         y: (e.clientY / window.innerHeight - 0.5) * 20,
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <motion.section
//       style={{ opacity, scale }}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 90, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             rotate: [0, -90, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl"
//         />
//       </div>

//       {/* Grid pattern overlay */}
//       <div 
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(#ff7a18 1px, transparent 1px), linear-gradient(90deg, #ff7a18 1px, transparent 1px)`,
//           backgroundSize: '60px 60px'
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="space-y-8"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200/50 shadow-sm"
//             >
//               <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
//               <span className="text-sm font-medium text-orange-900">تازه — سریع — خوشمزه</span>
//             </motion.div>

//             {/* Heading */}
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.6 }}
//                 className="text-6xl lg:text-7xl font-bold tracking-tight"
//               >
//                 <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
//                   طعمِ واقعیِ
//                 </span>
//                 <br />
//                 <span className="text-gray-900">فست‌فود</span>
//               </motion.h1>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-xl text-gray-600 font-light leading-relaxed"
//               >
//                 که دوباره دلتون رو برای غذا تنگ می‌کنه
//               </motion.p>
//             </div>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="text-lg text-gray-600 leading-relaxed max-w-xl"
//             >
//               برگرهای آبدار، سیب‌زمینی‌های کرانچی و سس‌هایی که هر لقمه رو به جشن تبدیل می‌کنن — همون چیزی که امروز بهش احتیاج داری!
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               <motion.a
//                 href="#order"
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
//               >
//                 <span>سفارش فوری</span>
//                 <svg
//                   className="w-5 h-5 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m5-7v7m4-7v7m4-7l2 7"
//                   />
//                 </svg>
//               </motion.a>

//               <motion.a
//                 href="#menu"
//                 whileHover={{ scale: 1.02, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 shadow-sm"
//               >
//                 <span>منو رو ببین</span>
//               </motion.a>
//             </motion.div>

//             {/* Popular Item Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//               className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
//             >
//               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
//                 <span className="text-xl">🔥</span>
//                 <span className="text-sm font-medium text-gray-900">محبوب الآن</span>
//               </div>
//               <span className="text-sm text-gray-700">برگر مخصوص با پنیر واقعی</span>
//             </motion.div>
//           </motion.div>

//           {/* Visual Side */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="relative"
//           >
//             <motion.div
//               style={{
//                 x: mousePosition.x,
//                 y: mousePosition.y,
//               }}
//               transition={{ type: "spring", stiffness: 50, damping: 20 }}
//               className="relative"
//             >
//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-amber-400/40 rounded-full blur-3xl" />
              
//               {/* Burger Illustration */}
//               <svg
//                 viewBox="0 0 600 600"
//                 className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
//               >
//                 <defs>
//                   <linearGradient id="bun" x1="0" x2="0" y1="0" y2="1">
//                     <stop offset="0%" stopColor="#ffd89b" />
//                     <stop offset="100%" stopColor="#ffb86b" />
//                   </linearGradient>
//                   <linearGradient id="patty" x1="0" x2="0" y1="0" y2="1">
//                     <stop offset="0%" stopColor="#8b4513" />
//                     <stop offset="100%" stopColor="#5c2d0a" />
//                   </linearGradient>
//                   <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feDropShadow dx="0" dy="20" stdDeviation="25" floodOpacity="0.2" />
//                   </filter>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//                     <feMerge>
//                       <feMergeNode in="coloredBlur" />
//                       <feMergeNode in="SourceGraphic" />
//                     </feMerge>
//                   </filter>
//                 </defs>

//                 {/* Plate shadow */}
//                 <ellipse cx="300" cy="450" rx="200" ry="35" fill="rgba(0,0,0,0.08)" />

//                 {/* Burger stack */}
//                 <g transform="translate(300,280)" filter="url(#shadow)">
//                   {/* Top bun */}
//                   <motion.g
//                     animate={{ y: [0, -3, 0] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                   >
//                     <ellipse cy="-100" rx="170" ry="75" fill="url(#bun)" />
//                     {/* Sesame seeds */}
//                     <g fill="#fff" opacity="0.9">
//                       {[-60, -20, 20, 60].map((x, i) => (
//                         <ellipse
//                           key={i}
//                           cx={x}
//                           cy={-115 + Math.random() * 10}
//                           rx="7"
//                           ry="4"
//                           transform={`rotate(${Math.random() * 30 - 15})`}
//                         />
//                       ))}
//                     </g>
//                   </motion.g>

//                   {/* Lettuce */}
//                   <motion.path
//                     animate={{ scale: [1, 1.02, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//                     d="M-150 -60 C -110 -35, 110 -35, 150 -60 C 110 -45, -110 -45, -150 -60 Z"
//                     fill="#7cb342"
//                     opacity="0.9"
//                   />

//                   {/* Tomato slice */}
//                   <motion.circle
//                     animate={{ scale: [1, 1.01, 1] }}
//                     transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                     cx="-60"
//                     cy="-35"
//                     r="35"
//                     fill="#ff6b6b"
//                     opacity="0.85"
//                   />

//                   {/* Cheese */}
//                   <motion.rect
//                     animate={{ rotate: [-1, 0, -1] }}
//                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                     x="-130"
//                     y="-15"
//                     width="260"
//                     height="25"
//                     rx="8"
//                     fill="#ffd93d"
//                   />

//                   {/* Patty */}
//                   <motion.ellipse
//                     animate={{ scale: [1, 1.01, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//                     cy="15"
//                     rx="145"
//                     ry="48"
//                     fill="url(#patty)"
//                   />

//                   {/* Bottom bun */}
//                   <ellipse cy="70" rx="160" ry="55" fill="url(#bun)" />
//                 </g>

//                 {/* Fries */}
//                 <motion.g
//                   animate={{ rotate: [0, 2, 0] }}
//                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                   transform="translate(480,400)"
//                 >
//                   <rect x="-40" y="-100" width="90" height="110" rx="12" fill="#ef4444" />
//                   <text x="10" y="-40" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">F</text>
//                   {[-25, -5, 15, 35].map((x, i) => (
//                     <motion.rect
//                       key={i}
//                       animate={{ y: [0, -5, 0] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
//                       x={x}
//                       y={-130 - i * 10}
//                       width="14"
//                       height={50 + i * 5}
//                       rx="5"
//                       fill="#ffd93d"
//                     />
//                   ))}
//                 </motion.g>

//                 {/* Drink */}
//                 <motion.g
//                   animate={{ y: [0, -4, 0] }}
//                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                   transform="translate(120,400)"
//                 >
//                   <rect x="-30" y="-110" width="70" height="120" rx="8" fill="#ff6b6b" opacity="0.9" />
//                   <ellipse cy="-110" rx="35" ry="12" fill="#c92a2a" />
//                   <rect x="-5" y="-130" width="10" height="25" fill="#666" />
//                   <rect x="-5" y="-135" width="10" height="10" rx="5" fill="#999" />
//                 </motion.g>
//               </svg>
//             </motion.div>

//             {/* Floating elements */}
//             <motion.div
//               animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-10 left-0 text-6xl opacity-50"
//             >
//               🍔
//             </motion.div>
//             <motion.div
//               animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
//               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               className="absolute bottom-20 right-0 text-5xl opacity-40"
//             >
//               🍟
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom wave decoration */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="w-full h-full"
//         >
//           <path
//             d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 L1200,120 L0,120 Z"
//             fill="rgba(255,122,24,0.03)"
//           />
//         </svg>
//       </div>
//     </motion.section>
//   );
// }