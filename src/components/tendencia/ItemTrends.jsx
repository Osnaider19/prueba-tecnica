export const ItemTrends = ({tilte , countPost , genres}) => {
  return (
    <div className="hover:bg-[#1D1F23] py-2 px-3  cursor-pointer">
      <div className="text-sm text-[#ffffff80]">
        <span className="">Tendecias - {genres}</span>
      </div>
      <p className="font-semibold text-xl">{tilte}</p>
      <span className="block py-1 text-sm text-[#ffffff80]">{countPost} mil post</span>
    </div>
  );
};
