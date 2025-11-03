/* eslint-disable prefer-const */
"use client";

import {
  BadgePercent,
  Book,
  BookOpenText,
  Car,
  ChefHat,
  Footprints,
  HeartPulse,
  Menu,
  MonitorCog,
  SandwichIcon,
  Shirt,
  Smartphone,
  Squirrel,
  Store,
  TabletSmartphone,
  Volleyball,
} from "lucide-react";
import { useState } from "react";

export default function Links() {
  const openCloseMenu = () => {};
  let [megaMenu, setMegaMenu] = useState(true);
  return (
    <div>
      <ul className=" hidden md:blcok md:flex flex-row-reverse gap-12 mr-10 mt-2 hover:cursor-pointer">
        <li className="flex ">
          <button onMouseEnter={() => setMegaMenu(megaMenu == false)}>
            دسته بندی کالاها
          </button>
          <Menu className="ml-2 mt-0.5" color="#44444E" size={18} />
        </li>
        <li className="flex ">
          سوپر مارکت
          <SandwichIcon className="ml-2 mt-0.5" color="#44444E" size={18} />
        </li>
        <li className="flex ">
          شگفت انگیز ها
          <BadgePercent className="ml-2" color="#44444E" size={18} />
        </li>
        <li className="flex ">
          فروشگاه
          <Store className="ml-2" color="#44444E" size={18} />
        </li>
        <li className="flex ">
          بایگانی نوشته ها
          <BookOpenText className="ml-2" color="#44444E"size={18}  />
        </li>
        <li className="flex ">
          گوشی موبایل
          <Smartphone className="ml-2" color="#44444E" size={18} />
        </li>
      </ul>
      {megaMenu ? (
        <div className=""></div>
      ) : (
        <div className="bg-white relative top-[.5rem] left-[10rem] w-[90%] h-[23.5rem] z-10 rounded-b-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-auto">
          <ul
            className="flex flex-col text-right gap-3 mr-6 py-6"
            onMouseLeave={() => setMegaMenu((megaMenu = true))}
          >
            {[
              {
                name: "الکترونیک و کامپیوتر",
                icon: <MonitorCog className="text-blue-600" />,
              },
              {
                name: "موبایل و لوازم جانبی",
                icon: <TabletSmartphone className="text-pink-500" />,
              },
              {
                name: "مد و پوشاک",
                icon: <Shirt className="text-purple-500" />,
              },
              {
                name: "کفش و اکسسوری",
                icon: <Footprints className="text-orange-500" />,
              },
              {
                name: "خانه و آشپزخانه",
                icon: <ChefHat className="text-green-600" />,
              },
              {
                name: "کتاب و رسانه",
                icon: <Book className="text-amber-600" />,
              },
              {
                name: "ورزش و سفر",
                icon: <Volleyball className="text-cyan-600" />,
              },
              {
                name: "سلامتی و زیبایی",
                icon: <HeartPulse className="text-rose-500" />,
              },
              {
                name: "ماشین و ابزار خودرو",
                icon: <Car className="text-gray-600" />,
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex flex-row-reverse items-center justify-between bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-pointer px-5 py-3 rounded-xl text-lg font-semibold text-gray-700"
              >
                <span>{item.name}</span>
                <span className="text-2xl">{item.icon}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
