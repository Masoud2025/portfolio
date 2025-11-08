"use client";

import CategoryCircles from "./components/CategoryCircles";
import Hero from "./components/Hero";
import Navbars from "./components/listitesm";
import MoblieNavbr from "./components/MoblieNavbar/MobileNavbar";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import { CartProvider } from "./components/store/cartContext";
import Product from "./components/products/ProductsRow";
import TopBannerGif from "./components/Tpbannergif";
import GridCategory from "./components/categoryGrid";
import DigitalProducts from "./components/DigitalProdcuts";
import TrustedBrands from "./components/TrustedBrands";
import HomeKitchenGrids from "./components/Home_kitchenGrids";
import Products_Banner from "./components/ProductBanner";
import GridCards_gif from "./components/GridGifs";
import Blog from "./components/blogs";
export default function Project1Demo() {
  return (
    <section className="">
      <TopBannerGif />
      <Navbar />
      <MoblieNavbr />
      <Hero />
      <CategoryCircles />
      <GridCategory />
      <DigitalProducts />
      <TrustedBrands />
      <HomeKitchenGrids />
      <Products_Banner />
      <DigitalProducts />
      <GridCards_gif />
      <DigitalProducts />
      <Products_Banner />
      <br />
      <GridCards_gif />
      <DigitalProducts />
      <Blog/>

      {/* <Product /> */}
      {/* <CartProvider> */}
      {/* <Products /> */}
      {/* <Navbars /> */}
      {/* </CartProvider> */}
    </section>
  );
}
