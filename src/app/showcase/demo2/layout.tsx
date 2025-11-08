import "./demo2.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  weight: ["900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: " دمو2 ",
  description: "لیست کارهای فارسی با طراحی خاص و آرامش‌بخش",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable} font-sans font-bold relative min-h-screen text-gray-100 overflow-hidden`}
      >
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>

        <main className="relative z-10  p-6 md:p-10">{children}</main>
      </body>
    </html>
  );
}
