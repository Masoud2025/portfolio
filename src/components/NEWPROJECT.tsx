"use client";

import { Heart, Link, X } from "lucide-react";
import { useState } from "react";

interface CardProps {
  title: string;
  image: string;
  category: string;
  details: string[];
}

function Card({ title, image, category, details }: CardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col items-start group">
      {/* کارت اصلی */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-5">
          <div className="flex justify-between items-start">
            <span className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              {category}
            </span>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Heart className="w-4 h-4 text-white" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Link className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* عنوان و دسته */}
      <h3 className="mt-4 text-base font-semibold text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{category}</p>

      {/* دکمه‌ها */}
      <div className="mt-3 flex gap-3">
        <button className="px-3 py-1.5 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition">
          Preview
        </button>
        <button
          className="px-3 py-1.5 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          onClick={() => setIsDrawerOpen(true)}
        >
          Details
        </button>
      </div>

      {/* Fullscreen Drawer با انیمیشن نرم از پایین */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-start bg-black/60 backdrop-blur-sm transition-all duration-500 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white w-full h-full rounded-t-3xl p-6 md:p-10 transform transition-transform duration-500 ${
            isDrawerOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">{title} - Details</h3>
            <button
              className="p-2 rounded-full hover:bg-gray-200"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-700 mb-6">
            Here you can add detailed information about the project,
            technologies used, challenges, solutions, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {details.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Detail ${idx + 1}`}
                className="w-full h-60 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  const projects = [
    {
      title: "Modern UI Interface",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
        "https://images.unsplash.com/photo-1623073147595-1df1f2d9cb2f?w=400&q=80",
      ],
    },
    {
      title: "Fintech Mobile App",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
      ],
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      ],
    },
    {
      title: "Corporate Branding",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80",
      ],
    },
    {
      title: "Analytics Dashboard",
      category: "Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      ],
    },
    {
      title: "Travel Application",
      category: "Travel App",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
      ],
    },
    {
      title: "Learning Platform",
      category: "EdTech",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80",
      ],
    },
    {
      title: "Content Management",
      category: "CMS",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
      ],
    },
    {
      title: "Fitness Tracker",
      category: "Fitness App",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      ],
    },
    {
      title: "Enterprise Portal",
      category: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
      ],
    },
    {
      title: "Food Delivery App",
      category: "Food Delivery",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
      ],
    },
    {
      title: "Booking System",
      category: "Booking System",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      details: [
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
      ],
    },
  ];

  return (
    <div className="w-full px-6 py-16 md:py-24 mt-[-3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Card
              key={i}
              title={p.title}
              image={p.image}
              category={p.category}
              details={p.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
