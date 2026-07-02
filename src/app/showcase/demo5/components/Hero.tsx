/* eslint-disable @typescript-eslint/ban-ts-comment */
// app/showcase/demo5/components/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let fluid: any | null = null;
    let cleanupEvents: (() => void) | undefined;
    let autoTimer: number | null = null;

    const setup = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const module = await import("webgl-fluid");
      const WebGLFluid = module.default;

      const resize = () => {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      };
      resize();

      // ساخت شبیه‌ساز
      fluid = WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRANSPARENT: true,
        COLORFUL: true,

        // برای اینکه رنگ/جریان دیرتر محو شود:
        DENSITY_DISSIPATION: 0.01,
        VELOCITY_DISSIPATION: 0.01,

        PRESSURE: 0.9,
        CURL: 15,
        SPLAT_RADIUS: 0.4,

        BLOOM: true,
        BLOOM_INTENSITY: 1.4,
        SUNRAYS: true,
        SUNRAYS_WEIGHT: 1.0,

        BACK_COLOR: "#020617",

        // تعامل کاربر هنوز کار می‌کند، ولی ما auto-splat هم اضافه می‌کنیم
        TRIGGER: "hover",
      });

      // تعامل با ماوس
      const handleMove = (e: MouseEvent) => {
        if (!canvas || !fluid) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1 - (e.clientY - rect.top) / rect.height;

        const dx = (e.movementX || 0) * 0.005;
        const dy = (e.movementY || 0) * -0.005;

        const r = 0.2 + Math.random() * 0.4;
        const g = 0.3 + Math.random() * 0.4;
        const b = 0.7 + Math.random() * 0.3;

        // @ts-ignore
        if (typeof fluid.splat === "function") {
          // @ts-ignore
          fluid.splat(x, y, dx, dy, [r, g, b]);
        }
      };

      const handleEnter = () => {
        document.body.style.cursor = "crosshair";
      };

      const handleLeave = () => {
        document.body.style.cursor = "default";
      };

      canvas.addEventListener("mousemove", handleMove);
      canvas.addEventListener("mouseenter", handleEnter);
      canvas.addEventListener("mouseleave", handleLeave);
      window.addEventListener("resize", resize);

      // Auto splat: همیشه در حال جریان باشد حتی بدون ماوس
      autoTimer = window.setInterval(() => {
        if (!fluid) return;

        // @ts-ignore
        if (typeof fluid.splat !== "function") return;

        const x = Math.random();
        const y = Math.random();

        // حرکت کوچک ولی دائمی
        const dx = (Math.random() - 0.5) * 0.4;
        const dy = (Math.random() - 0.5) * 0.4;

        const color: [number, number, number] = [
          0.2 + Math.random() * 0.8,
          0.2 + Math.random() * 0.8,
          0.2 + Math.random() * 0.8,
        ];

        // @ts-ignore
        fluid.splat(x, y, dx, dy, color);
      }, 140);

      // cleanup listeners
      cleanupEvents = () => {
        canvas.removeEventListener("mousemove", handleMove);
        canvas.removeEventListener("mouseenter", handleEnter);
        canvas.removeEventListener("mouseleave", handleLeave);
        window.removeEventListener("resize", resize);
      };
    };

    setup();

    return () => {
      if (cleanupEvents) cleanupEvents();

      if (autoTimer !== null) {
        window.clearInterval(autoTimer);
        autoTimer = null;
      }

      if (fluid && typeof fluid.destroy === "function") {
        fluid.destroy();
      }
      fluid = null;

      // اگر صفحه را ترک کردید کرسر به حالت عادی برگردد
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/90" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-6">
        <div className="max-w-3xl text-center text-right">
          <p className="text-xs font-light tracking-[0.2em] text-sky-300/80">
            FRONTEND EXPERIENCE
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white drop-shadow-lg md:text-6xl">
            حرکت رنگ ها
          </h1>
          <p className="mt-5 text-sm text-slate-200/85 md:text-base">
            ماوس را روی صفحه حرکت بده؛ مسیر حرکتت با لایه‌های سیال و رنگی دنبال
            می‌شود و محو نمی‌شود.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
