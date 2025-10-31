"use client";

import BookingTabs from "./components/BookingTabs";
import Card from "./components/card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Project3Demo() {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <Card />
      <BookingTabs/>
    </section>
  );
}
