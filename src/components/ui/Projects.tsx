"use client";

import { JSX } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

// نمونه داده‌ها
const projects: Project[] = [
  {
    id: 1,
    title: "پروژه اول",
    description: "توضیح کوتاه درباره پروژه اول",
    image: "/bg.jpg",
    link: "/showcase/demo1",
  },
  {
    id: 2,
    title: "پروژه دوم",
    description: "توضیح کوتاه درباره پروژه دوم",
    image: "/bg.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "پروژه سوم",
    description: "توضیح کوتاه درباره پروژه سوم",
    image: "/bg.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "پروژه چهارم",
    description: "توضیح کوتاه درباره پروژه چهارم",
    image: "/bg.jpg",
    link: "#",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section className="py-20 px-5 ">
      <h2 className="text-4xl font-bold text-center mb-12">
        کارهای من ({projects.length})
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            {/* تصویر داخل کارت */}
            <div className="relative w-full h-[500px] sm:h-[400px] lg:h-[550px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>

            <div className="p-10 flex flex-col justify-between flex-1 text-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center text-blue-600 font-medium hover:underline"
              >
                مشاهده <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
