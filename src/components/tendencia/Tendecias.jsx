import { Search } from "./Search";
import { Subscribe } from "./Subscribe";
import Trends from "./Trends";

export const Tendecias = () => {
  return (
    <div className="max-w-[400px] hidden sticky top-0 left-0 h-screen w-full px-10 py-2 lg:block">
      <div>
        <Search />
        <Subscribe />
        <Trends/>
      </div>
    </div>
  );
};
