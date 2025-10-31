/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Airplay, Home, Train, Bus, Calendar, Users } from "lucide-react";

type Transport = "flight" | "hotel" | "train" | "bus";

export default function BookingTabs(): JSX.Element {
  const [active, setActive] = useState<Transport>("flight");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [isInternational, setIsInternational] = useState(false);
  const [nights, setNights] = useState(1);

  function resetCommon() {
    setOrigin("");
    setDestination("");
    setDepartDate("");
    setReturnDate("");
    setIsRoundTrip(false);
    setPassengers(1);
    setIsInternational(false);
    setNights(1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload: Record<string, any> = { service: active };
    if (active === "hotel") {
      payload.destination = destination;
      payload.checkIn = departDate;
      payload.nights = nights;
      payload.rooms = Math.max(1, Math.ceil(passengers / 2));
    } else {
      payload.origin = origin;
      payload.destination = destination;
      payload.departDate = departDate;
      payload.returnDate = isRoundTrip ? returnDate : null;
      payload.passengers = passengers;
      payload.roundTrip = isRoundTrip;
      payload.international = isInternational;
    }
    console.log("Booking payload:", payload);
    alert("درخواست ثبت شد — نگاه کن به کنسول برای payload (نمونه)");
  }

  const tabs: { id: Transport; label: string; Icon: any }[] = [
    { id: "flight", label: "پرواز", Icon: Airplay },
    { id: "hotel", label: "هتل", Icon: Home },
    { id: "train", label: "قطار", Icon: Train },
    { id: "bus", label: "اتوبوس", Icon: Bus },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-blue-700">رزرو سفر</h2>
        <div className="text-sm text-blue-500">
          انتخاب کن — پرواز، هتل، قطار یا اتوبوس
        </div>
      </div>

      <nav className="flex gap-2 bg-blue-50 p-1 rounded-xl">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setActive(t.id);
              resetCommon();
            }}
            aria-pressed={active === t.id}
            className={`relative flex-1 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
              ${
                active === t.id
                  ? "bg-white text-blue-700 shadow"
                  : "hover:bg-blue-100 text-blue-600"
              }`}
          >
            <t.Icon className="w-4 h-4" />
            <span>{t.label}</span>
            {active === t.id && (
              <motion.span
                layoutId="active-underline"
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-blue-500 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          {active === "flight" && (
            <motion.form
              key="flight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex flex-col">
                  <span className="text-xs text-blue-600">مبدا</span>
                  <input
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="شهر یا فرودگاه"
                    className="mt-1 p-2 rounded-md border border-blue-200 bg-white"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-blue-600">مقصد</span>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="شهر یا فرودگاه"
                    className="mt-1 p-2 rounded-md border border-blue-200 bg-white"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-blue-600">تاریخ رفت</span>
                  <div className="mt-1 relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-blue-400" />
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="pl-10 p-2 rounded-md border border-blue-200 bg-white w-full"
                      required
                    />
                  </div>
                </label>

                <label className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600">تاریخ برگشت</span>
                    <label className="text-xs flex items-center gap-1">
                      <input
                        type="checkbox"
                        checked={isRoundTrip}
                        onChange={(e) => setIsRoundTrip(e.target.checked)}
                        className="w-4 h-4"
                      />
                      برگشت
                    </label>
                  </div>

                  <div className="mt-1 relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-blue-400" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className={`pl-10 p-2 rounded-md border border-blue-200 bg-white w-full ${
                        !isRoundTrip ? "opacity-60 pointer-events-none" : ""
                      }`}
                      required={isRoundTrip}
                    />
                  </div>
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-blue-600">تعداد مسافر</span>
                  <div className="mt-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                      className="p-2 rounded-md border border-blue-200 text-blue-600"
                    >
                      -
                    </button>
                    <div className="flex items-center gap-2 px-3 py-2 border border-blue-200 rounded-md text-blue-700">
                      <Users className="w-4 h-4" />
                      <span>{passengers}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPassengers((p) => Math.min(9, p + 1))}
                      className="p-2 rounded-md border border-blue-200 text-blue-600"
                    >
                      +
                    </button>
                  </div>
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-blue-600">نوع پرواز</span>
                  <div className="mt-1 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsInternational(false)}
                      className={`flex-1 p-2 rounded-md border border-blue-200 ${
                        !isInternational ? "bg-blue-100 text-blue-700" : ""
                      }`}
                    >
                      داخلی
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsInternational(true)}
                      className={`flex-1 p-2 rounded-md border border-blue-200 ${
                        isInternational ? "bg-blue-100 text-blue-700" : ""
                      }`}
                    >
                      بین‌المللی
                    </button>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => resetCommon()}
                  className="px-3 py-2 rounded-md border border-blue-200 text-blue-700"
                >
                  پاک کردن
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:brightness-95"
                >
                  جستجو
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
