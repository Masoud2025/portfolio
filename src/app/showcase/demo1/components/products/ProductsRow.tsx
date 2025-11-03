/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import img from "../../assets/images/11-1.png";
import img1 from "../../assets/images/4-19.png";
import img2 from "../../assets/images/6-21.png";

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  images: any[];
}

const products: Product[] = [
  {
    id: 1,
    name: "ایکس باکس کاستوم",
    price: 850000,
    discount: 690000,
    images: [img]
  },
  {
    id: 2,
    name: " سرخ کن بدون روغن ",
    price: 1250000,
    discount: 990000,
    images: [img1]
  },
  {
    id: 3,
    name: "هواپز",
    price: 890000,
    discount: 720000,
    images: [img2]
  },
];

export default function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex-[0_0_80%] sm:flex-[0_0_30%] mx-4 bg-white rounded-2xl shadow-md p-4"
            whileHover={{ scale: 1.03 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden rounded-xl w-full" ref={emblaRef}>
        <div className="flex">
          {product.images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <Image
                src={src}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain rounded-xl w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        {product.images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              selectedIndex === index ? "bg-red-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* اطلاعات محصول */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="line-through text-gray-400 text-sm">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
          <span className="text-red-600 font-bold text-lg">
            {product.discount.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </div>
  );
}
