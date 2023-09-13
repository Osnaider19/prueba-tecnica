"use client"
import { PiStorefrontThin } from "react-icons/pi";
import { RxVideo } from "react-icons/rx";
import { CgGames } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { ItemHeader } from "./ItemHeader";
import { AiOutlineMenu } from "react-icons/ai";
export const Header = () => {
  const handelToggleMenu =  (e) => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("-left-[400px]");
    nav.classList.toggle("left-0");
    
  }
  return (
    <div className="sticky top-0 z-20  flex justify-center items-center w-full bg-black">
      <button className="md:hidden pl-3 text-4xl" onClick={handelToggleMenu}>
        <AiOutlineMenu />
      </button>
      <div className="flex  justify-center items-center w-full py-3">
        <ItemHeader icon={<MdGroups />} />
        <ItemHeader icon={<RxVideo />} />
        <ItemHeader icon={<CgGames />} />
        <ItemHeader icon={<PiStorefrontThin />} />
      </div>
    </div>
  );
};
