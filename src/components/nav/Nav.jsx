"use client"
import { ItemNav } from "./ItemNav";
import { routes } from "./routes";
export const Nav = () => {
  return (
    <div className="h-screen absolute bg-[#000000]  top-[60px] -left-[400px] max-w-[240px]  md:min-w-[350px] md:max-w-[350px] w-full md:block md:sticky md:top-0 transition-all duration-200 z-30 nav ">
      <div>
        <span className="text-3xl py-5 px-3 md:px-8  hidden md:block">Logo</span>
        <ul className="flex flex-col justify-start py-3 px-5 ">
          {routes.map((route , index) => (
            <ItemNav key={index} icon={route.icon} link={route.link} title={route.label} />
          ))}
        </ul>
      </div>
    </div>
  );
};
