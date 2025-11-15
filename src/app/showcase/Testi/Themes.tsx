"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DraggableThemeSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0); // 0..100
  const dragging = useRef(false);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const t = Math.max(0, Math.min(1, x / rect.width));
      setValue(Math.round(t * 100));
    };
    const onPointerUp = () => (dragging.current = false);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  // Colors: white -> (subtle shading until 50) -> instant cream at 50 -> cream -> dark
  const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);

  const getBackground = (val: number) => {
    // RGB tuples
    const white = [255, 255, 255];
    const cream = [247, 243, 234];
    const dark = [11, 18, 32];

    if (val < 50) {
      // soft shift: white + a subtle gray overlay grows gradually
      const overlayAlpha = (val / 50) * 0.06; // max 0.06 subtle
      return {
        base: `rgb(${white.join(",")})`,
        overlay: `rgba(0,0,0,${overlayAlpha})`,
      };
    }

    // at or past midpoint we *immediately* step to cream then progress to dark
    const t = (val - 50) / 50; // 0..1
    const r = lerp(cream[0], dark[0], t);
    const g = lerp(cream[1], dark[1], t);
    const b = lerp(cream[2], dark[2], t);

    // create stepped darkness layers: add a few overlay stops that become visible at different t
    const layer1 = Math.min(1, Math.max(0, (t - 0.15) / 0.85)) * 0.12; // first shadow
    const layer2 = Math.min(1, Math.max(0, (t - 0.5) / 0.5)) * 0.18; // stronger shadow later
    const layer3 = Math.min(1, Math.max(0, (t - 0.8) / 0.2)) * 0.25; // final deep shadow

    return {
      base: `rgb(${r},${g},${b})`,
      overlay: `rgba(0,0,0,${layer1 + layer2 + layer3})`,
    };
  };

  const bg = getBackground(value);

  // text color: switch to light text at high darkness
  const textColor = value > 75 ? "text-white" : "text-slate-900";

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: `linear-gradient(180deg, ${bg.base} 0%, calc(${bg.base} - 0%) 100%)`,
      }}
    >
      {/* overlay for progressive shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: bg.overlay }}
      />

      <div className="relative z-10 w-full max-w-3xl">
        <div className={`rounded-2xl p-8 shadow-xl transition-colors duration-300 ${textColor}`}>
          <h2 className="text-2xl font-semibold mb-2">Draggable Light ⇢ Dark</h2>
          <p className="text-sm opacity-80 mb-6">
            نوار را بکشید تا حالت از روشن به تاریک برود — در وسط یک تغییر سریع به رنگ "شیری" رخ می‌دهد،
            سپس مرحله‌به‌مرحله تاریک شود.
          </p>

          {/* preview card */}
          <div className="rounded-lg p-6 mb-6 bg-white/30 backdrop-blur-sm" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <p className={`font-medium ${value > 70 ? "text-white/90" : "text-slate-900"}`}>
              پیش‌نمایش متن — مقدار: {value}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-md bg-white/60">کارت ۱</div>
              <div className="p-3 rounded-md bg-white/40">کارت ۲</div>
              <div className="p-3 rounded-md bg-white/30">کارت ۳</div>
            </div>
          </div>

          {/* track */}
          <div className="select-none">
            <div
              ref={trackRef}
              onPointerDown={(e) => {
                dragging.current = true;
                const rect = trackRef.current!.getBoundingClientRect();
                const x = (e as PointerEvent).clientX - rect.left;
                const t = Math.max(0, Math.min(1, x / rect.width));
                setValue(Math.round(t * 100));
              }}
              className="relative h-4 rounded-full bg-slate-200/60 dark:bg-slate-800/40"
              style={{
                background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${Math.max(0, Math.min(100, value))}% , rgba(0,0,0,0.18) ${Math.max(0, Math.min(100, value))}% , rgba(0,0,0,0100.6) 100%)`,
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
              }}
            >
              {/* draggable knob */}
              <motion.div
                layout
                animate={{ x: `calc(${value}% - 12px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center bg-white"
                style={{ left: `calc(${value}% - 12px)` }}
              >
                <div className="w-3 h-3 rounded-full bg-slate-600" />
              </motion.div>
            </div>

            <div className="flex items-center justify-between text-xs mt-3 px-1">
              <span>روشن</span>
              <span>میان‌راه (شیری)</span>
              <span>تاریک</span>
            </div>

            <div className="mt-4 text-sm opacity-85">
              نکته: این یک کنترل کشیدنی است — کلیک کردن هم کار می‌کند، اما تجربهٔ اصلی با کشیدن است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
