"use client";

import { JSX, useState } from "react";
import { BookText, Edit, PlusCircle, User } from "lucide-react";
import PersianDate from "./ShamsyDate";
export default function Navbar(): JSX.Element {
  const EditMenu = () => alert("Menu Edited");
  const CreateMenu = () => SetMenuItemAdderToggeler((prev) => !prev);
  const [MenuItemAdderToggeler, SetMenuItemAdderToggeler] = useState(false);
  return (
    <div className="flex gap-2 group justify-end items-center mt-6 mr-4">
      <div className="border  border-dashed flex flex-col justify-center items-center p-2">
        <h1 className="flex flex-row-reverse   ">
          مشتری های امروز: 0 <User />
        </h1>
        <h1 className="flex  mt-4">
          تاریخ:
          <PersianDate></PersianDate>
        </h1>
      </div>
      <button
        onClick={EditMenu}
        className="bg-[#FFD230] p-2 rounded-[8px] text-[1rem] border-2  group-hover:cursor-pointer flex flex-row-reverse justify-center items-center  border-dashed hover:bg-amber-400 hover:border-double"
      >
        ویرایش منو
        <Edit size={20} strokeWidth={1} color="#4D5156" className="mr-2" />
      </button>
      <button
        onClick={EditMenu}
        className="bg-[#FFD230] p-2 rounded-[8px] text-[1rem] border-2  group-hover:cursor-pointer flex flex-row-reverse justify-center items-center  border-dashed hover:bg-amber-400 hover:border-double"
      >
        ویرایش جدول
        <Edit size={20} strokeWidth={1} color="#4D5156" className="mr-2" />
      </button>
      <button
        onClick={CreateMenu}
        className="bg-[#FFD230] p-2 rounded-[8px] text-[1rem] border-2  group-hover:cursor-pointer border-dashed hover:bg-amber-400 hover:border-double flex flex-row-reverse"
      >
        افزودن منو
        <PlusCircle
          size={20}
          strokeWidth={1}
          color="#4D5156"
          className="mr-2"
        />
      </button>
      <button
        onClick={CreateMenu}
        className="bg-[#FFD230] p-2 rounded-[8px] text-[1rem] border-2 group-hover:cursor-pointer border-dashed hover:bg-amber-400 hover:border-double flex flex-row-reverse"
      >
        صدور فاکتور
        <BookText size={20} strokeWidth={1} color="#4D5156" className="mr-2" />
      </button>
      {MenuItemAdderToggeler && (
        <section className="relative left-[-26rem] top-[20rem] z-10 ">
          <div className="bg-amber-200 p-16  absolute rounded-2xl flex flex-col text-right gap-5 ">
            <span>نام محصول</span>
            <input type="text" className="border" />
            <span>قیمت</span>
            <input type="text" className="border" />
            <button
              onClick={CreateMenu}
              className="bg-[#FFD230] p-2 rounded-[8px] text-[1rem] border-2 group-hover:cursor-pointer border-dashed hover:bg-amber-400 hover:border-double flex flex-row-reverse"
            >
              افزودن
              <BookText
                size={20}
                strokeWidth={1}
                color="#4D5156"
                className="mr-2"
              />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
