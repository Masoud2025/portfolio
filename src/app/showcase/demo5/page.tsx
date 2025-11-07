"use client";

import { JSX } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturedCourses from "./components/FeaturedCourses";
import Instructors from "./components/Instructors";
import WhyUs from "./components/WhyUs";
import AboutSection from "./components/AboutSection";
import ServicesGrid from "./components/ServicesGrid";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import StatsSection from "./components/StatsSection";
import FAQAccordion from "./components/FAQAccordion";
import NewsletterSignup from "./components/NewsletterSignup";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Project5Demo(): JSX.Element {
  return (
    <div>
      <div className="">
        <Navbar/>
        <Hero />
        <AboutSection/>
        <FeaturedCourses/>
        <Instructors/>
        <WhyUs/>
        <ServicesGrid/>
        <TestimonialsCarousel/>
        <StatsSection/>
        <FAQAccordion/>
        <NewsletterSignup/>
        <ScrollToTopButton/>
        <Footer/>
      </div>
    </div>
  );
}
