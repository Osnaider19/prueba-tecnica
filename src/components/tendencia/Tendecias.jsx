import { Search } from "./Search";
import { Subscribe } from "./Subscribe";
import Trends from "./Trends";

export const Tendecias = () => {
  return (
    <div className="max-w-[400px] sticky top-0 left-0 h-screen w-full px-10 py-2">
      <div>
        <Search />
        <Subscribe />
        <Trends/>
      </div>
    </div>
  );
};
