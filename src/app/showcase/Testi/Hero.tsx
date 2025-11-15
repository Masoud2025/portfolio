"use client";

import React from "react";

const projects = [
  { title: "Project One", description: "A cool web app", image: "/demo1.png" },
  { title: "Project Two", description: "Another amazing project", image: "/demo2.png" },
  { title: "Project Three", description: "Creative solution", image: "/demo3.png" },
];

export default function HeroPortfolioSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-10">
     <h1 className="text-8xl">Looking for a website that speaks for you? I’ll build it.</h1>
     <h1>Masoud Jaa</h1>
    </section>
  );
}
