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
    <div className="w-screen h-screen overflow-hidden bg-black text-white relative ">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex flex-row-reverse justify-center gap-6 p-6 text-2xl z-50">
        <button
          onClick={() => goToFace("home")}
          className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
        >
          خانه
        </button>

        <button
          onClick={() => goToFace("projects")}
          className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
        >
          پروژه‌ها
        </button>

        <button
          onClick={() => goToFace("about")}
          className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
        >
          درباره
        </button>

        <button
          onClick={() => goToFace("contact")}
          className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
        >
          مهارت‌ها
        </button>

        <button
          onClick={() => goToFace("skills")}
          className="hover:text-gray-300 hover:cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:tracking-wide"
        >
          تماس
        </button>
      </nav>

      {/* 3D WORLD */}
      <div className="perspective w-full h-full flex items-center justify-center">
        <div
          className="cube relative w-[80vw] h-[80vh] md:w-[60vw] md:h-[60vh]"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 2s ease-in-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* FACE 1 — HOME */}
          <div className="face flex flex-col items-center justify-center   rounded-3xl shadow-2xl">
            <h1 className="text-4xl font-extrabold relative top-[4rem] text-center">
              مســــــــــــعود جـــــــــــــعفری برنـــــــــــــامه
              نویــــــــــس
            </h1>
            {/* <p className="mt-4 text-lg text-white/80 text-center">خوش آمدید! اینجا بخش هیرو با متن و تصویر است.</p>
             */}
            <div className="absolute bottom-8 w-[23rem] h-[20rem]">
              <ItGuy></ItGuy>
            </div>

            <AuroraBackground></AuroraBackground>
            {/* 
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-white/20 rounded-md hover:bg-white/40">شروع کنید</button>
              <button className="px-4 py-2 border border-white/30 rounded-md hover:bg-white/10">بیشتر بدانید</button>
            </div> */}
          </div>

          {/* FACE 2 — PROJECTS */}
          <div className="face face-right flex flex-col items-center justify-center text-3xl font-bold p-6 rounded-3xl shadow-2xl ">
            <div className="relative h-screen w-screen">
              <div className="absolute inset-0">
                <div className="absolute top-0 -z-10 h-full w-full bg-gray-900 [&>div]:absolute [&>div]:bottom-auto [&>div]:left-auto [&>div]:right-0 [&>div]:top-0 [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:-translate-x-[30%] [&>div]:translate-y-[20%] [&>div]:rounded-full [&>div]:bg-[rgba(109,244,173,0.5)] [&>div]:opacity-50 [&>div]:blur-[80px]">
                  <div></div>
                </div>
              </div>

              <div className="relative z-10 flex h-full flex-col items-center w-[500px]   left-[24rem] justify-center px-4">
                <div className="max-w-6xl w-full">
                  {/* کارت‌ها */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-[400px] w-[900px]">
                    {/* --- کارت 1 --- */}
                    <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden transition-all duration-300">
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src="https://media.rtlcdn.com/2025/11/83d6ff94110846137473321f77647e3c4b1f582398360b-scaled.webp"
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[3000ms] ease-linear"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="text-sm font-bold text-white mb- 2  ">
                          فروشگاه آنلاین
                        </h3>
                        <div className="flex mt-2 ml-[4rem]">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all w-[100px] text-center text-sm hover:cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeWidth="2"
                                d="M15 12H3m12 0l-4-4m4 4l-4 4m10-10v12"
                              />
                            </svg>
                            مشاهده
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* --- کارت 2 --- */}
                    <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden  transition-all duration-300">
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src="https://media.rtlcdn.com/2025/11/667cb5c6b7772a090e20dab64622e82c05ff0bf1090094.webp"
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[3000ms] ease-linear"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="text-sm font-bold text-white mb-2">
                          داشبورد حرفه‌ای
                        </h3>

                        <div className="flex gap-3  mt-2 ml-[4rem]">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all  w-[100px] text-center text-sm hover:cursor-pointer ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeWidth="2"
                                d="M15 12H3m12 0l-4-4m4 4l-4 4m10-10v12"
                              />
                            </svg>
                            مشاهده
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* --- کارت 3 --- */}
                    <div className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden  transition-all duration-300">
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src="https://media.rtlcdn.com/2025/08/dd8ec0365161565dc017f14f4338d922f9578842010431.webp"
                          className="absolute inset-0 w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[3000ms] ease-linear"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="text-sm font-bold text-white mb-2">
                          سایت شخصی
                        </h3>

                        <div className="flex  mt-2 ml-[4rem]">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transition-all  w-[100px] text-center text-sm  hover:cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeWidth="2"
                                d="M15 12H3m12 0l-4-4m4 4l-4 4m10-10v12"
                              />
                            </svg>
                            مشاهده
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FACE 3 — ABOUT */}
          <div
            className="face face-left flex flex-col items-center justify-center text-3xl font-bold 
  bg-white/10 backdrop-blur-xl border border-white/20 
  p-10 rounded-3xl shadow-[0_0_60px_-10px_rgba(255,165,0,0.4)]
  hover:shadow-[0_0_90px_-10px_rgba(255,165,0,0.6)]
  transition-all duration-500"
          >
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
              درباره من
            </h2>

            <p className="mt-4 text-white/80 text-center max-w-sm text-lg leading-relaxed">
              من مسعود جعفری هستم، توسعه‌دهنده فرانت‌اند با تمرکز روی Next.js و
              ساخت رابط‌های مدرن و واکنش‌گرا. علاقه‌مند به تجربه‌گرایی در UI/UX،
              ساخت پروژه‌های خلاقانه و یادگیری تکنولوژی‌های جدید. مجرد ساکن غرب
              تهران میدان آزادی 20 ساله کارشناسی مهندسی کامپیوتر معافیت تحصیلی
            </p>

            <div className="mt-8 flex gap-5">
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 
      text-white rounded-xl shadow-lg hover:scale-105 
      hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300"
              >
                دانلود رزومه
              </button>

              <button
                className="px-6 py-2.5 border border-white/40 text-white 
      rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                تماس با من
              </button>
            </div>
          </div>

          {/* FACE 4 — CONTACT */}
          <div className="face face-top flex flex-col items-center justify-center text-3xl font-bold p-8 rounded-3xl bg-gradient-to-br from-red-600/80 to-pink-500/80 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,80,0.4)]">
            <h2 className="text-white drop-shadow-md">تماس</h2>

            <form className="flex flex-col gap-5 mt-6 w-72 text-base font-normal">
              <input
                type="text"
                placeholder="نام"
                className="p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md focus:shadow-lg transition-all outline-none  text-right"
              />

              <input
                type="email"
                placeholder="ایمیل"
                className="p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md focus:shadow-lg transition-all outline-none  text-right"
              />

              <textarea
                rows="4"
                placeholder="پیام"
                className="p-3 rounded-xl text-black bg-white/80 focus:bg-white shadow-md focus:shadow-lg transition-all outline-none resize-none  text-right"
              ></textarea>

              <button
                type="submit"
                className="px-4 py-3 bg-white/25 text-white font-bold rounded-xl backdrop-blur-lg shadow-lg hover:bg-white/40 hover:shadow-xl active:scale-95 transition-all"
              >
                ارسال
              </button>
            </form>
          </div>

          {/* FACE 5 — SKILLS */}
          <div className="face face-bottom flex flex-col items-center justify-center text-3xl font-bold bg-gradient-to-br from-sky-600 to-cyan-500 p-6 rounded-3xl shadow-2xl">
            <h2>مهارت‌ها</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-lg">
              {/* Front-End */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3">Front-End</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 px-3 py-1 rounded-md">HTML</span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">CSS</span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    JavaScript
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    React
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Back-End */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3">Back-End</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Node.js
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Express
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    API Routes
                  </span>
                </div>
              </div>

              {/* Databases */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3">Database</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    MongoDB
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    MySQL
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Prisma
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 px-3 py-1 rounded-md">Git</span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    GitHub
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    VS Code
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Figma
                  </span>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Problem Solving
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Teamwork
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Communication
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-md">
                    Self-Learning
                  </span>
                </div>
              </div>
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
          transform: rotateY(90deg) translateZ(calc(40vw));
        }
        .face-left {
          transform: rotateY(-90deg) translateZ(calc(40vw));
        }
        .face-top {
          transform: rotateX(90deg) translateZ(calc(40vh));
        }
        .face-bottom {
          transform: rotateX(-90deg) translateZ(calc(40vh));
        }
        .face:nth-child(1) {
          transform: translateZ(calc(40vw));
        }
      `}</style>
    </div>
  );
}
