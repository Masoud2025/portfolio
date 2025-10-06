"use client";

import Link from "next/link";

const demos = [
  { name: "Project 1", slug: "project1" },
  { name: "Project 2", slug: "project2" },
  { name: "Project 3", slug: "project3" },
];

export default function DemosPage() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-8">دموها</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <Link
            key={demo.slug}
            href={`/demos/${demo.slug}`}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            {demo.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
