"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "Nov 10, 2025",
      summary:
        "Learn the basics of React Hooks and how they simplify state management in functional components."
    },
    {
      id: 2,
      title: "Next.js 14 Features",
      date: "Oct 25, 2025",
      summary:
        "A quick overview of the latest features in Next.js 14 and how to use them in your projects."
    },
    {
      id: 3,
      title: "Tailwind CSS Tips",
      date: "Oct 15, 2025",
      summary:
        "Improve your UI development speed with these practical Tailwind CSS tricks."
    },
    {
      id: 4,
      title: "Framer Motion Animations",
      date: "Oct 5, 2025",
      summary:
        "Add smooth animations to your React apps using Framer Motion with simple examples."
    },
  ];

  return (
    <div className=" w-[90%] md:w-[900px] mx-auto mt-6 rounded-[30px]  p-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence>
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#2B2B2C] rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-white font-semibold text-xl mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300">{post.summary}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
