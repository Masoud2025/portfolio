"use client";

import Hero from "./components/Hero";
import Navbars from "./components/listitesm";
import MoblieNavbr from "./components/MoblieNavbar/MobileNavbar";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import { CartProvider } from "./components/store/cartContext";

export default function Project1Demo() {
  return (
    <section className="">
      <Navbar />
      <MoblieNavbr />
      <Hero />
      <CartProvider>
        <Products />
        <Navbars/>
      </CartProvider>
    </section>
  );
}
