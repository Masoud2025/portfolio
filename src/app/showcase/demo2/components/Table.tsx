"use client";

import { JSX } from "react";

export default function Table(): JSX.Element {
  return (
    <div className="fixed top-0 flex justify-center items-center w-[50%] ">
      <table className="border-collapse border border-gray-400 text-center w-full h-full">
        <thead className="bg-amber-300 text-gray-800 font-bold">
          <tr>
            <th className="border p-2">نام محصول</th>
            <th className="border p-2">تعداد</th>
            <th className="border p-2">قیمت واحد (تومان)</th>
            <th className="border p-2">مالیات (%)</th>
            <th className="border p-2">جمع کل</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          <tr className="hover:bg-gray-50">
            <td className="border p-2">قهوه اسپرسو</td>
            <td className="border p-2">2</td>
            <td className="border p-2">60,000</td>
            <td className="border p-2">9%</td>
            <td className="border p-2">130,800</td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="border p-2">کاپوچینو</td>
            <td className="border p-2">1</td>
            <td className="border p-2">70,000</td>
            <td className="border p-2">9%</td>
            <td className="border p-2">76,300</td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="border p-2">چای ماسالا</td>
            <td className="border p-2">1</td>
            <td className="border p-2">65,000</td>
            <td className="border p-2">9%</td>
            <td className="border p-2">70,850</td>
          </tr>

          <tr className="hover:bg-amber-50 font-bold">
            <td className="border p-2">مجموع کل</td>
            <td className="border p-2">4</td>
            <td className="border p-2"></td>
            <td className="border p-2"></td>
            <td className="border p-2">277,950</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
