"use client";
import { JSX, useEffect, useState } from "react";

export default function PersianDate(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // time
  const time = currentTime.toLocaleTimeString("en-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // weekday
  const weekday = currentTime.toLocaleDateString("en-IR", {
    weekday: "long",
  });

  return (
    <div className="flex flex-row items-center justify-center p-12 ">
      {/* Time */}
      <div className="font-mono font-semibold text-3xl  text-black tracking-widest">
        <span>{time.split(":")[0]}</span>
        <span className="animate-pulse">:</span>
        <span>{time.split(":")[1]}</span>
        <span className="animate-pulse">:</span>
        <span>{time.split(":")[2]}</span>
      </div>
      {/* Weekday */}
      <p className="text-3xl font-semibold text-black ml-8">{weekday}</p>
    </div>
  );
}
