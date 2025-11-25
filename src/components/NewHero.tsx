import PersianDate from "../app/showcase/demo2/components/ShamsyDate";

function NewHero() {
  const name = "MASOD JAFARI";
  const role = "FRONTEND DEVELOPER";

  const soft =
    "transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-2 hover:text-blue-500";

  return (
    <div
      className="select-none text-center mt-10"
      style={{ fontFamily: "Fredoka, sans-serif" }}
    >
      {/* Name */}
      <h1 className="text-5xl font-bold flex flex-wrap gap-1 justify-center leading-relaxed">
        {name.split("").map((char, i) => (
          <span key={i} className={soft}>
            {char}
          </span>
        ))}
      </h1>

      {/* Space between name and role */}
      <div className="h-4"></div>

      {/* Role */}
      <h2 className="text-2xl font-semibold flex flex-wrap gap-1 justify-center">
        {role.split("").map((char, i) => (
          <span key={i} className={soft}>
            {char}
          </span>
        ))}
      </h2>

      {/* Space */}
      <div className="h-6"></div>

      {/* English paragraph */}
      <p className="max-w-xl  mx-auto text-gray-500 text-lg leading-8 px-4">
        I&apos;m a frontend developer who loves creating smooth, modern, and
        user-friendly interfaces. I enjoy bringing ideas to life with clean
        design and intuitive interactions. Every project I build is focused on
        performance, simplicity, and a great user experience. Always learning,
        always improving.
      </p>
      <PersianDate />
    </div>
  );
}

export default NewHero;
