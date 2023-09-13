import Link from "next/link";
export const ItemHeader = ({ icon }) => {
  return (
    <Link href={"#"} className="hover:bg-[#181818] overflow-hidden rounded-md">
      <div className="flex justify-center items-center text-3xl px-6 md:px-10  py-2">
        {icon}
      </div>
    </Link>
  );
};
