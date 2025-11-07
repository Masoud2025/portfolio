"use client";
import { useEffect, useState } from "react";

const stats = [
  { label: "دانشجو", value: 1500 },
  { label: "دوره آموزشی", value: 25 },
  { label: "پروژه عملی", value: 40 },
];

export default function StatsSection() {
  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) =>
        prev.map((val, i) =>
          val < stats[i].value ? val + Math.ceil(stats[i].value / 50) : val
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" text-black py-20 text-center">
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((s, i) => (
          <div key={i} className="text-4xl font-bold">
            {count[i]}+
            <div className="text-sm text-black mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
