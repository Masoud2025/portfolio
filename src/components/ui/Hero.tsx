"use client";

import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="flex flex-col justify-start items-center py-96 px-5 text-center">
      <h1 className="relative top-[-22rem] left-[-92rem]">
        <span className="absolute  text-amber-100 opacity-5 text-[400px]">
          مســـــــــعود
        </span>
        <span className="absolute top-[15rem] left-[85rem]  opacity-5 text-[400px] text-amber-100 ">
          مـــــــــــعود
        </span>
      </h1>
    </section>
  );
}
