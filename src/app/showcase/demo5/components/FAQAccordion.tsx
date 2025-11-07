"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "چطور ثبت‌نام کنم؟", a: "به سادگی از طریق فرم ثبت‌نام وارد شوید." },
  {
    q: "آیا دوره‌ها رایگان هستند؟",
    a: "برخی دوره‌ها رایگان و برخی ویژه اعضای پریمیوم هستند.",
  },
  {
    q: "آیا مدرک داده می‌شود؟",
    a: "بله، پس از پایان هر دوره مدرک معتبر ارائه می‌شود.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="text-right text-white py-16 px-6 md:px-20">
      <h2 className="text-black text-4xl font-bold text-center mb-10">سؤالات متداول</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-blue-900 text-right rounded-xl p-4 cursor-pointer hover:bg-blue-800 transition"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between items-center text-right">
              <h3 className="text-right">{item.q}</h3>
              <ChevronDown
                className={`transition ${open === i ? "rotate-180" : ""} text-right`}
              />
            </div>
            {open === i && <p className="mt-3 text-gray-300 text-right">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
