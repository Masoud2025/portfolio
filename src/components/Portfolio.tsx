"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Landing Page UI", category: "UI", image: "https://via.placeholder.com/300x200" },
    { id: 2, title: "E-commerce Full Stack", category: "Full Stack", image: "https://via.placeholder.com/300x200" },
    { id: 3, title: "Portfolio Website", category: "UI", image: "https://via.placeholder.com/300x200" },
    { id: 4, title: "Dashboard App", category: "Full Stack", image: "https://via.placeholder.com/300x200" },
    { id: 5, title: "Logo Design", category: "Design", image: "https://via.placeholder.com/300x200" },
    { id: 6, title: "Blog Website", category: "Full Stack", image: "https://via.placeholder.com/300x200" },
  ];

  const categories = ["All", "UI", "Full Stack", "Design"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#1E1E1F] w-[90%] md:w-[900px] mx-auto mt-6 rounded-[30px] border-[.2px] border-white shadow-lg p-6">

      {/* Desktop Filters */}
      <div className="hidden md:flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filter === cat
                ? "bg-[#2F6D4D] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-[#2F6D4D] hover:text-white"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown Filter */}
      <div className="md:hidden mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="bg-[#2B2B2C] rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-white font-semibold">{project.title}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
