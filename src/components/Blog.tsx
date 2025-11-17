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
    <div className="w-[90%] md:w-[900px] mx-auto mt-10 p-4">

      {/* Title */}
      <h2 className="text-4xl font-black text-center mb-10 
        bg-gradient-to-r from-[#ff8a00] to-[#e52e71] 
        text-transparent bg-clip-text">
        Blog & Articles
      </h2>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <AnimatePresence>
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="
                rounded-2xl p-6 cursor-pointer 
                bg-[#1b1b1c]/60 border border-gray-700 
                backdrop-blur-xl
                hover:shadow-[0_0_20px_#ff880080] 
                hover:border-[#ff8a00]
                transition-all duration-300 hover:scale-[1.03]
              "
            >
              <h3 className="text-white font-semibold text-2xl mb-3">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {post.date}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {post.summary}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
