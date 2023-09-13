"use client";
import Link from "next/link";

export const ItemNav = ({ icon, title, link }) => {
  const handelToggleMenu = (e) => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("-left-[400px]");
    nav.classList.toggle("left-0");
  };
  return (
    <li
      className="w-auto flex flex-col justify-start items-start "
      onClick={handelToggleMenu}
    >
      <Link
        href={link}
        className="hover:bg-[#181818] py-3 px-4  rounded-3xl overflow-hidden transition-colors duration-200"
      >
        <div className="flex justify-center gap-x-3 items-center">
          <i className="text-2xl text-white">{icon}</i>
          <span className="text-xl">{title}</span>
        </div>
      </Link>
    </li>
  );
};
