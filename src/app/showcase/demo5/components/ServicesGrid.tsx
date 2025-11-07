import { Code, Laptop, Rocket } from "lucide-react";

const services = [
  { icon: <Code size={40} />, title: "برنامه‌نویسی مدرن", desc: "یادگیری React، Next.js و Tailwind" },
  { icon: <Laptop size={40} />, title: "طراحی رابط کاربری", desc: "ایجاد UI حرفه‌ای و واکنش‌گرا" },
  { icon: <Rocket size={40} />, title: "رشد شغلی", desc: "قدم به قدم تا سطح حرفه‌ای" },
];

export default function ServicesGrid() {
  return (
    <section className=" text-black py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">خدمات ما</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className=" rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition"
          >
            <div className="text-blue-400 mb-4">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p className="text-black">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
