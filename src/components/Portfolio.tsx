"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Layers, Code2, Palette } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Landing Page UI",
      category: "UI",
      image:
        "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "E-commerce Full Stack",
      category: "Full Stack",
      image:
        "https://plus.unsplash.com/premium_photo-1682125748265-d362c809ba04?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "UI",
      image:
        "https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFubmVyJTIwY29kaW5nfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Dashboard App",
      category: "Full Stack",
      image:
        "https://plus.unsplash.com/premium_photo-1673976276744-46bcf9bddbeb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Logo Design",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1753695115211-12629cb8d4e9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYnNpdGUlMjBkZXNpZ24lMjB1aXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Blog Website",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1750651114048-36cf47ab4fca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBkZXNpZ24lMjB1aXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const categories = [
    { name: "All", icon: LayoutGrid },
    { name: "UI", icon: Layers },
    { name: "Full Stack", icon: Code2 },
    { name: "Design", icon: Palette },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="w-[90%] md:w-[900px] mx-auto mt-8 p-4">
  

      {/* Desktop Filters */}
      <div className="hidden md:flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl border backdrop-blur-lg
                transition-all duration-300
                ${
                  filter === cat.name
                    ? "bg-[#2F6D4D] border-transparent text-white shadow-lg shadow-[#2F6D4D80]"
                    : "bg-[#1a1a1a40] border-gray-700 text-gray-300 hover:bg-[#2F6D4D] hover:text-white hover:border-transparent"
                }`}
            onClick={() => setFilter(cat.name)}
          >
            <cat.icon size={18} />
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-[#1a1a1a] text-white p-3 rounded-xl border border-gray-700 focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              className="
                rounded-2xl overflow-hidden cursor-pointer relative
                bg-[#1b1b1c] border border-gray-700 backdrop-blur-xl
                hover:border-[#1F7D53] hover:shadow-[0_0_20px_#1F7D53]
                transition-all duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4 text-white font-semibold">
                {project.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
