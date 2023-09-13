import { IoIosAdd } from "react-icons/io";
export const CreatePost = () => {
  return (
    <div className="w-full px-2 md:px-6">
      <div className="hover:bg-[#181818] py-2 cursor-pointer rounded-lg   flex gap-x-3 px-4 transition-colors duration-200 bg-[#201f1f]">
        <div className="rounded-full h-[50px]  w-[50px] flex  justify-center items-center bg-[#3C4D6320]  text-xl">
          <IoIosAdd className="text-white" />
        </div>
        <div>
          <span className="block">Crear posts</span>
          <span className="block">comparte una foto o escribe algo</span>
        </div>
      </div>
    </div>
  );
};
