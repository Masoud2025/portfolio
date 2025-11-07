export default function NewsletterSignup() {
  return (
    <section className=" text-black py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-4">عضو خبرنامه شو</h2>
      <p className="text-black mb-6">
        اولین نفری باش که از دوره‌های جدید باخبر میشه
      </p>
      <div className="flex justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="ایمیل شما"
          className="flex-1 p-3 rounded-lg text-black outline-non border-2"
        />
        <button className="px-6 bg-purple-500 rounded-lg hover:bg-blue-700 transition text-white">
          عضویت
        </button>
      </div>
    </section>
  );
}
