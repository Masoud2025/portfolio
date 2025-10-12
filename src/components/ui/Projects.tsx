"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "پروژه اول",
    description: "طراحی مینیمال و مدرن",
    image: "/bg.jpg",
    link: "/showcase/demo1",
  },
  {
    id: 2,
    title: "پروژه دوم",
    description: "تمرکز روی UX/UI حرفه‌ای",
    image: "/bg2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "پروژه سوم",
    description: "نمونه‌های جذاب و خلاق",
    image: "/bg3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "پروژه چهارم",
    description: "پروژه‌های الهام‌بخش",
    image: "/bg4.jpg",
    link: "#",
  },
];

export default function ResponsiveGlassProjects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* SVG clip-path definition */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path d="M0.0637,0H0.9363A0.0637,0.0637,0,0,1,1,0.0637V0.7A0.1,0.1,0,0,1,0.9,0.8H0.8A0.1,0.1,0,0,0,0.7,0.9V0.9A0.1,0.1,0,0,1,0.6,1H0.0637A0.0637,0.0637,0,0,1,0,0.9363V0.0637A0.0637,0.0637,0,0,1,0.0637,0Z" />
          </clipPath>
        </defs>
      </svg>

      {isMobile ? (
        <MobileCarousel projects={projects} />
      ) : (
        <DesktopGrid projects={projects} />
      )}
    </>
  );
}

// Desktop Grid + Glass + Hover Reveal + clickable entire card
function DesktopGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 px-5 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        کارهای من ({projects.length})
        ظاهر سایت رو عوض کن
        این پس زمینه متحرک رو بزار برای ارور
        <h1 className="opacity-5 font-extrabold text-[90px]" >404</h1> 
         شیشه ای
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden shadow-lg cursor-pointer group block"
            style={{ clipPath: "url(#clip)" }}
          >
            {/* Glass Card */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-white/20 "></div>

            {/* Text */}
            <div className="relative z-10 p-6 text-center flex flex-col justify-center h-[250px] sm:h-[300px] lg:h-[280px]">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>

            {/* Image on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// Mobile Carousel + clickable cards + center mode
function MobileCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: true,
  });

  return (
    <section className="py-10 px-5">
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-5">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-[0_0_80%] shadow-lg overflow-hidden block"
              style={{ clipPath: "url(#clip)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
