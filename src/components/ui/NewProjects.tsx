/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { ExternalLink, GithubIcon } from "lucide-react";
import demo1pic from "../../../public/demo1.png";
import demo2pic from "../../../public/demo1.png";
import demo3pic from "../../../public/demo1.png";

const projects = [
  {
    id: 1,
    title: "پروژه اول",
    images: [demo1pic, demo2pic, demo3pic],
    preview: "/showcase/demo1",
  },
  {
    id: 2,
    title: "پروژه دوم",
    images: [demo2pic, demo3pic, demo1pic],
    preview: "https://example.com/",
  },
  {
    id: 3,
    title: "پروژه سوم",
    images: [demo3pic, demo1pic, demo2pic],
    preview: "https://example.com/",
  },
];

export default function ProjectsUI() {
  return (
    <section className="min-h-screen text-white py-16">
      <h1 className="text-right text-4xl font-extrabold mb-16 mr-12   ">
        نمونه‌کارها
      </h1>

      <div className="flex flex-wrap justify-center items-start gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col items-center w-[360px]"
          >
            {/* کارت */}
            <div className="relative bg-[#E8F0FB] w-full h-[500px] overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="group overflow-hidden h-full relative cursor-pointer">
                <Image
                  alt={project.title}
                  src={project.images[0]}
                  width={400}
                  height={800}
                  className="w-full min-h-[160%] object-cover object-top transition-transform duration-[5000ms] ease-in-out group-hover:translate-y-[-68%]"
                />
              </div>
            </div>

            {/* عنوان */}
            <h2 className="font-bold text-xl text-gray-900 mt-4 mb-3">
              {project.title}
            </h2>

            {/* دکمه‌ها */}
            <div className="flex justify-between w-full px-4 mt-2">
              <button
                onClick={() => window.open(project.preview, "_blank")}
                className="flex items-center justify-center gap-2 w-[48%] px-4 py-2 bg-[#432DD7] text-white rounded-xl hover:bg-blue-700 transition shadow-md"
              >
                <ExternalLink className="w-5 h-5" />
                <span>پیش‌نمایش</span>
              </button>

              <button
                onClick={() => window.open(project.preview, "_blank")}
                className="flex items-center justify-center gap-2 w-[48%] px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition shadow-md"
              >
                <GithubIcon className="w-5 h-5" />
                <span>سورس‌کد</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
