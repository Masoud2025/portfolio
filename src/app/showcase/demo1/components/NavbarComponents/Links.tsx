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
  Store,
  TabletSmartphone,
  Volleyball,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Pc_pic from "../../assets/images/pc.jpg";
import mobile_pic from "../../assets/images/moblie.webp";
import Tshirt_pic from "../../assets/images/shirt.webp";
import Shose_pic from "../../assets/images/shose.jpg";
import Book_pic from "../../assets/images/book.webp";
import kitchen from "../../assets/images/kitchen-hood.jpg";
import Toop_pic from "../../assets/images/toop.webp";
import arayasehi_pic from "../../assets/images/arayesh.webp";
import car_pic from "../../assets/images/car.jpg";

export default function Links() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuCategories = [
    {
      name: "الکترونیک و کامپیوتر",
      icon: <MonitorCog className="text-blue-600" />,
      items: ["نرم افزار", "سخت افزار", "لپ تاپ", "کامپیوتر"],
      picture: Pc_pic,
    },
    {
      name: "موبایل و لوازم جانبی",
      icon: <TabletSmartphone className="text-pink-500" />,
      items: ["سامسونگ", "آیفون", "شیاومی", "آنر"],
      picture: mobile_pic,
    },
    {
      name: "مد و پوشاک",
      icon: <Shirt className="text-purple-500" />,
      items: ["مردانه", "زنانه", "بچه گانه", "اکسسوری"],
      picture: Tshirt_pic,
    },
    {
      name: "کفش و اکسسوری",
      icon: <Footprints className="text-orange-500" />,
      items: ["کفش مردانه", "کفش زنانه", "کفش بچه گانه", "کیف"],
      picture: Shose_pic,
    },
    {
      name: "خانه و آشپزخانه",
      icon: <ChefHat className="text-green-600" />,
      items: ["قابلمه", "ظرف", "پیش دستی", "لوازم آشپزخانه"],
      picture: kitchen,
    },
    {
      name: "کتاب و رسانه",
      icon: <Book className="text-amber-600" />,
      items: ["فلسفی", "برنامه نویسی", "ریاضیات", "داستان"],
      picture: Book_pic,
    },
    {
      name: "ورزش و سفر",
      icon: <Volleyball className="text-cyan-600" />,
      items: ["فوتبال", "والیبال", "بسکتبال", "لوازم سفر"],
      picture: Toop_pic,
    },
    {
      name: "سلامتی و زیبایی",
      icon: <HeartPulse className="text-rose-500" />,
      items: ["رژلب", "مژه مصنوعی", "آرایش پاک کن", "تونر"],
      picture: arayasehi_pic,
    },
    {
      name: "ماشین و ابزار خودرو",
      icon: <Car className="text-gray-600" />,
      items: ["آچار بوکس", "آچار رینگ", "لاستیک و تیوب", "روغن موتور"],
      picture: car_pic,
    },
  ];

  return (
    <div>
      <ul className="hidden md:block md:flex flex-row-reverse gap-12 mr-8  hover:cursor-pointer text-[#666D74]">
        <li className="flex">
          <button
            onMouseEnter={() => setMegaMenuOpen(true)}
            // onMouseLeave={() => setMegaMenuOpen(false)}
          >
            دسته بندی کالاها
          </button>
          <Menu className="ml-2 mt-0.5" color="#666D74" size={18} />
        </li>
        <li className="flex">
          سوپر مارکت
          <SandwichIcon className="ml-2 mt-0.5" color="#666D74" size={18} />
        </li>
        <li className="flex">
          شگفت انگیز ها
          <BadgePercent className="ml-2" color="#666D74" size={18} />
        </li>
        <li className="flex">
          فروشگاه
          <Store className="ml-2" color="#666D74" size={18} />
        </li>
        <li className="flex">
          بایگانی نوشته ها
          <BookOpenText className="ml-2" color="#666D74" size={18} />
        </li>
        <li className="flex">
          گوشی موبایل
          <Smartphone className="ml-2" color="#666D74" size={18} />
        </li>
      </ul>

      {megaMenuOpen && (
        <div
          className="bg-white relative top-[.5rem] left-[10rem] w-[90%] h-[23.5rem] z-10 rounded-b-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="flex h-full">
            {/* Left side - Scrollable Category list */}
            <div className="w-[500px] overflow-y-auto relative left-[64rem]">
              <ul className="flex flex-col text-right gap-3 mr-6 py-6 ">
                {menuCategories.map((category, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex flex-row-reverse items-center justify-between px-5 py-3 rounded-xl text-lg font-semibold transition-all duration-200 cursor-pointer ${
                      activeIndex === i
                        ? "bg-blue-50 shadow-md text-blue-700"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-2xl">{category.icon}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Fixed Subitems and Image */}
            <div className="flex-1 flex flex-row-reverse items-center justify-around px-10 sticky top-0 right-[40rem]" >
              {/* Subitems */}
              <ul className="text-right text-xl space-y-3">
                {menuCategories[activeIndex].items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-blue-600 cursor-pointer transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Image */}
              <div className="flex items-center justify-center">
                <Image
                  alt={menuCategories[activeIndex].name}
                  src={menuCategories[activeIndex].picture}
                  className="w-[300px] h-[220px] object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}