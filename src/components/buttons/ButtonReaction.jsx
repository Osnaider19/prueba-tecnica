"use client";
import { useState } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import {FaCommentDots} from 'react-icons/fa'
import {IoMdShareAlt} from 'react-icons/io'

export const ButtonReaction = () => {
  const [like, setLike] = useState(false);

  const handelLinke = () => {
    setLike(!like);
  };
  return (
    <div className="flex justify-center items-center pt-1">
      <button
        onClick={handelLinke}
        className="flex justify-center items-center gap-x-3 text-sm
         md:text-xl  hover:bg-[#414040] px-1 md:px-3 py-1 rounded-md md:"
      >
        <span> {like ? <AiTwotoneLike className="text-blue-500"/> : <AiOutlineLike/>}</span>
        <span className="text-sm md:text-lg">Me gusta</span>
      </button>
      <button
        className="flex justify-center items-center gap-x-3 text-sm md:text-xl hover:bg-[#414040] px-1 md:px-3 py-1 rounded-md"
      >
        <span><FaCommentDots/></span>
        <span className="text-sm md:text-lg">Comentar</span>
      </button>
      <button
        className="flex justify-center items-center gap-x-3 text-sm md:text-xl hover:bg-[#414040] px-1 md:px-3 py-1 rounded-md"
      >
        <span><IoMdShareAlt/></span>
        <span className=" text-sm md:text-lg">Compartir</span>
      </button>
    </div>
  );
};
