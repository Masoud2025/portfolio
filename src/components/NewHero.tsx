import PersianDate from "../app/showcase/demo2/components/ShamsyDate";

function NewHero() {
  const name = "MASOD JAFARI";
  const role = "FRONTEND DEVELOPER";

  const soft =
    "transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-2 hover:text-blue-500";

  return (
    <div
      className="select-none text-center mt-[-29rem]"
      style={{ fontFamily: "Fredoka, sans-serif" }}
    >
      {/* Name */}
      <h1 className="text-6xl  text-black font-bold flex flex-wrap gap-1 justify-center leading-relaxed">
        {name.split("").map((char, i) => (
          <span key={i} className={soft}>
            {char}
          </span>
        ))}
      </h1>

      {/* Space between name and role */}
      <div className="h-4"></div>

      {/* Role */}
      <h2 className="text-3xl text-black font-semibold flex flex-wrap gap-1 justify-center">
        {role.split("").map((char, i) => (
          <span key={i} className={soft}>
            {char}
          </span>
        ))}
      </h2>

      {/* Space */}
      <div className="-mt-9"></div>
      <PersianDate />
    </div>
  );
}

export default NewHero;
