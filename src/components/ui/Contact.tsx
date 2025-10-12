"use client";

import { JSX, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert("پیام با موفقیت ارسال شد ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("ارسال پیام با مشکل مواجه شد: " + result.error);
      }
    } catch (err) {
      alert("خطا در ارسال پیام: " + (err as Error).message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center mt-24 mb-20 px-4"
    >
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-700 pb-2">
        تماس با من
      </h2>

      <div
        className="
          w-full max-w-[950px] flex flex-col md:flex-row items-center justify-between
          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
          border border-gray-700 shadow-2xl rounded-[25px] p-8 gap-8
          backdrop-blur-lg
        "
      >
        {/* اطلاعات تماس */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-gray-300">
          <h3 className="text-xl font-semibold text-indigo-400 text-right">
            راه‌های ارتباطی
          </h3>

          <div className="flex items-center gap-3 justify-end">
            <p className="text-sm">masoud@example.com</p>
            <Mail className="text-indigo-400 w-6 h-6" />
          </div>
          <div className="flex items-center gap-3 justify-end">
            <p className="text-sm">+98 912 345 6789</p>
            <Phone className="text-indigo-400 w-6 h-6" />
          </div>
          <div className="flex items-center gap-3 justify-end">
            <p className="text-sm">ایران، تهران</p>
            <MapPin className="text-indigo-400 w-6 h-6" />
          </div>

          <p className="text-gray-400 text-sm leading-6 mt-4 text-right">
            خوشحال می‌شوم از طریق فرم روبه‌رو یا ایمیل با من در ارتباط باشید.
            همیشه آماده همکاری در پروژه‌های جدید و جذاب هستم ✨
          </p>
        </div>

        {/* فرم تماس */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-4 text-gray-300"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام شما"
            required
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition text-right"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل شما"
            required
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition text-right"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="متن پیام..."
            required
            rows={5}
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 resize-none focus:border-indigo-500 outline-none transition text-right"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl shadow-lg transition"
          >
            <Send className="w-5 h-5" />
            <span>ارسال پیام</span>
          </button>
        </form>
      </div>
    </section>
  );
}
