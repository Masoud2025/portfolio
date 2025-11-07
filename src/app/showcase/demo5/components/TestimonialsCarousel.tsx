"use client";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  { name: "علی", text: "بهترین تجربه یادگیری آنلاین رو اینجا داشتم." },
  { name: "مینا", text: "طراحی سایت خیلی زیبا و کاربرپسنده 👌" },
  { name: "رضا", text: "دوره‌ها کاملاً کاربردی و بروز هستن." },
];

export default function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-20 text-black">
      <h2 className="text-4xl font-bold text-center mb-10">نظرات کاربران</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-[0_0_100%] px-10 text-center">
              <div className=" p-10 rounded-3xl max-w-md mx-auto shadow-lg">
                <p className="italic mb-4">“{t.text}”</p>
                <p className="font-bold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
