"use client";
export default function MobileNavbar() {
  return (
    <div className="md:hidden bg-[#282829] rounded-t-3xl fixed bottom-0 w-screen opacity-80">
      <ul className="flex  justify-between  py-12 px-6 text-white">
        <li>About </li>
        <li>Resume </li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
