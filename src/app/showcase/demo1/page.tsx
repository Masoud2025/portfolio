"use client";

import CategoryCircles from "./components/CategoryCircles";
import Hero from "./components/Hero";
import Navbars from "./components/listitesm";
import MoblieNavbr from "./components/MoblieNavbar/MobileNavbar";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import { CartProvider } from "./components/store/cartContext";
import  Product from "./components/products/ProductsRow"
export default function Project1Demo() {
  return (
    <section className="">
      <Navbar />
      <MoblieNavbr />
      <Hero />
      <CategoryCircles />
      <Product/>
      <CartProvider>
        <Products />
        <Navbars />
      </CartProvider>
    </section>
  );
}
