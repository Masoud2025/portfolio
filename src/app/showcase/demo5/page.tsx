"use client";

import { JSX } from "react";
import AboutSection from "./components/AboutSection";
import FAQAccordion from "./components/FAQAccordion";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Instructors from "./components/Instructors";
import Navbar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ServicesGrid from "./components/ServicesGrid";
import StatsSection from "./components/StatsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhyUs from "./components/WhyUs";

export default function Project5Demo(): JSX.Element {
  return (
    <div>
      <div className="">
        {/* <Navbar /> */}
        <Hero />
        <AboutSection />
        <FeaturedCourses />
        <Instructors />
        <WhyUs />
        <ServicesGrid />
        <TestimonialsCarousel />
        <StatsSection />
        <FAQAccordion />
        <NewsletterSignup />
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}
