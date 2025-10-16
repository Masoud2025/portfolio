"use client";

import { products } from "../../data/productsData";
import Image from "next/image";
import { JSX } from "react";
import { useCart } from "../store/cartContext";

export default function ProductsPage(): JSX.Element {
  const { addToCart } = useCart();

  return (
    <section className="w-full min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        محصولات ما
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between p-5 h-full"
          >
            <div className="flex flex-col items-center">
              <div className="w-full h-56 sm:h-48 md:h-56 flex items-center justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-contain max-h-full"
                />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm text-center line-clamp-3">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <span className="text-amber-600 font-bold text-lg mb-4">
                {item.price.toLocaleString("fa-IR")} تومان
              </span>
              <button
                onClick={() => addToCart(item)}
                className="bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-amber-600 transition"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
