import { BiSolidUserCircle } from "react-icons/bi";
export const CardCommet = ({ name, email, body }) => {
  return (
    <div className="flex justify-center items-start gap-x-3">
      <div className="flex justify-center items-center text-3xl">
        <BiSolidUserCircle />
      </div>
      <div className="relative rounded-lg flex flex-col bg-[rgba(255,255,255,0.2)] py-2 px-3 ">
        <p className="text-lg">{email}</p>
        <p className="font-semibold tracking-wider">{name}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};
