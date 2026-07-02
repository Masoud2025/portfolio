"use client";
import { useState } from "react";
import AuroraBackground from "./ui/background";
import ItGuy from "./ui/ItGuy";

export default function FullCubePage() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const goToFace = (face) => {
    switch (face) {
      case "home":
        setRotation({ x: 0, y: 0 });
        break;
      case "projects":
        setRotation({ x: 0, y: -90 });
        break;
      case "about":
        setRotation({ x: 0, y: 90 });
        break;
      case "contact":
        setRotation({ x: 90, y: 0 });
        break;
      case "skills":
        setRotation({ x: -90, y: 0 });
        break;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white relative">
      {/* Navbar */}
     <nav
  className="
    absolute top-6 left-1/2 -translate-x-1/2
    z-50
    flex flex-row-reverse gap-6

    px-8 py-4
    rounded-full

    bg-white/8
    backdrop-blur-[30px]
    border border-white/15

    shadow-[0_15px_60px_rgba(0,0,0,.35),inset_0_1px_1px_rgba(255,255,255,.25)]
    transition-all duration-300
    hover:bg-white/12
    hover:scale-[1.02]
    
  "
>
        {["home", "projects", "about", "contact", "skills"].map((face, idx) => (
          <button
            key={idx}
            onClick={() => goToFace(face)}
            className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
          >
            {{
              home: "خانه",
              projects: "پروژه‌ها",
              about: "درباره",
              contact: "تماس",
              skills: "مهارت‌ها",
            }[face]}
          </button>
        ))}
      </nav>

      {/* 3D WORLD */}
      <div className="perspective w-full h-full flex items-center justify-center">
        <div
          className="cube relative w-[90vw] h-[90vh] sm:w-[60vw] sm:h-[60vh]"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 1.5s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* FACE 1 — HOME */}
          <div className="face flex flex-col items-center justify-center rounded-3xl shadow-2xl p-4 sm:p-0">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-center mt-8">
              مســــــــــــعود جـــــــــــــعفری
              <br />
              برنامه نویس
            </h1>
            {/* <div className="absolute bottom-[26em] sm:bottom-7 w-[18rem] sm:w-[23rem] h-[15rem] sm:h-[20rem]"> */}
              <ItGuy />
            {/* </div> */}
            <AuroraBackground />
          </div>

          {/* FACE 2 — PROJECTS */}
          <div className="face face-right flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl shadow-2xl overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {/* کارت‌ها */}
              {[
                {
                  title: "فروشگاه آنلاین",
                  img: "https://media.rtlcdn.com/2025/11/83d6ff94110846137473321f77647e3c4b1f582398360b-scaled.webp",
                },
                {
                  title: "داشبورد حرفه‌ای",
                  img: "https://media.rtlcdn.com/2025/11/667cb5c6b7772a090e20dab64622e82c05ff0bf1090094.webp",
                },
                {
                  title: "سایت شخصی",
                  img: "https://media.rtlcdn.com/2025/08/dd8ec0365161565dc017f14f4338d922f9578842010431.webp",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 w-full max-w-[300px] mx-auto"
                >
                  <div className="relative h-48 sm:h-72 overflow-hidden">
                    <img
                      src={project.img}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[3000ms] ease-linear"
                    />
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all mx-auto">
                      مشاهده
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FACE 3 — ABOUT */}
          <div className="face face-left flex flex-col items-center justify-center text-center p-4 sm:p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_60px_-10px_rgba(255,165,0,0.4)] hover:shadow-[0_0_90px_-10px_rgba(255,165,0,0.6)] transition-all duration-500">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-md">
              درباره من
            </h2>
            <p className="mt-4 text-white/80 text-sm sm:text-lg leading-relaxed max-w-xs sm:max-w-sm">
              من مسعود جعفری هستم، توسعه‌دهنده فرانت‌اند با تمرکز روی Next.js و ساخت رابط‌های مدرن و واکنش‌گرا...
            </p>
          </div>

          {/* FACE 4 — CONTACT */}
          <div className="face face-top flex flex-col items-center justify-center text-center p-4 sm:p-8 bg-gradient-to-br from-red-600/80 to-pink-500/80 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,80,0.4)] overflow-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-white drop-shadow-md mb-4">تماس</h2>
            <form className="flex flex-col gap-3 sm:gap-5 w-full max-w-xs sm:max-w-sm text-base font-normal">
              <input type="text" placeholder="نام" className="p-2 sm:p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md outline-none text-right"/>
              <input type="email" placeholder="ایمیل" className="p-2 sm:p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md outline-none text-right"/>
              <textarea rows="4" placeholder="پیام" className="p-2 sm:p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md outline-none resize-none text-right"/>
              <button type="submit" className="px-4 py-2 sm:px-4 sm:py-3 bg-white/25 text-white font-bold rounded-xl backdrop-blur-lg hover:bg-white/40 hover:shadow-xl active:scale-95 transition-all">
                ارسال
              </button>
            </form>
          </div>

          {/* FACE 5 — SKILLS */}
          <div className="face face-bottom flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-3xl shadow-2xl text-center text-sm sm:text-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">مهارت‌ها</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {["Front-End","Back-End","Database","Tools","Soft Skills"].map((cat,i)=>(
                <div key={i} className="flex flex-col items-center">
                  <h3 className="font-bold mb-2">{cat}</h3>
                  <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded-md">HTML</span>
                    <span className="bg-white/20 px-2 py-1 rounded-md">CSS</span>
                    <span className="bg-white/20 px-2 py-1 rounded-md">JS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 1500px;
        }
        .cube {
          transform-style: preserve-3d;
        }
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          backface-visibility: hidden;
        }
        .face-right {
          transform: rotateY(90deg) translateZ(calc(45vw));
        }
        .face-left {
          transform: rotateY(-90deg) translateZ(calc(45vw));
        }
        .face-top {
          transform: rotateX(90deg) translateZ(calc(45vh));
        }
        .face-bottom {
          transform: rotateX(-90deg) translateZ(calc(45vh));
        }
        .face:nth-child(1) {
          transform: translateZ(calc(45vw));
        }
      `}</style>
    </div>
  );
}
