"use client";

import Image from "next/image";
import { JSX } from "react";

import product1 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_airConditioner_new.webp";
import product2 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_coffeMaker_new.webp";
import product3 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_dishwasher_new.webp";
import product4 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_electric_heater_new.webp";
import product5 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_hairDryer_new.webp";
import product6 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_iron_new.webp";
import product7 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_juicer_new.webp";
import product8 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_meatGreander_new.webp";
import product9 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_microwave_new.webp";
import product10 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_refrigerator_new (1).webp";
import product11 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_riceMaker_new.webp";
import product12 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_teaMaker_new.webp";
import product13 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_washingMachine_new.webp";
import product14 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_washingMachine_new.webp";
import product15 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_washingMachine_new.webp";
import product16 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_teaMaker_new.webp";
import product17 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_riceMaker_new.webp";
import product18 from "../assets/images/Home-and kitchen-appliances/static_homeAppliance_riceMaker_new.webp";

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
];

export default function HomeKitchenGrids(): JSX.Element {
  return (
    <section
      dir="rtl"
      className="w-full px-8 py-12 bg-gradient-to-b from-gray-50 to-white"
    >
      <h2 className="text-3xl font-bold text-right text-gray-800 mb-10">
        لوازم خانگی و آشپزخانه
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center">
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 w-[160px] sm:w-[180px]"
          >
            <div className="p-4 flex items-center justify-center">
              <Image
                alt={`product-${index + 1}`}
                src={item}
                width={200}
                height={200}
                className="object-contain transition-transform duration-500 group-hover:scale-110 rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
