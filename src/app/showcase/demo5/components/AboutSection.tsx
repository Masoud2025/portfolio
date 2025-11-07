import Image from "next/image";
import picture from "../../demo1/assets/images/book.webp";
export default function AboutSection() {
  return (
    <section className=" text-right py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10 items-center">
      <Image
        src={picture}
        alt="About"
        width={500}
        height={400}
        className="rounded-3xl shadow-lg object-cover"
      />
      <div>
        <h2 className="text-4xl font-bold mb-6 text-blue-400">درباره ما</h2>
        <p className="leading-8 text-black">
          ما تیمی از توسعه‌دهندگان و طراحان هستیم که عاشق آموزش، خلاقیت و ساخت
          ابزارهای دیجیتال هستیم. هدف ما اینه که یادگیری رو ساده، لذت‌بخش و
          کاربردی کنیم.
        </p>
      </div>
    </section>
  );
}
