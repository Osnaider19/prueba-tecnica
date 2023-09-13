import { PiStorefrontThin} from "react-icons/pi";
import { RxVideo } from "react-icons/rx";
import { CgGames } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { ItemHeader } from "./ItemHeader";

export const Header = () => {
  return (
    <div className="sticky top-0 z-20   w-full bg-black">
      <div className="flex  justify-center items-center w-full py-3">
        <ItemHeader icon={<MdGroups />} />
        <ItemHeader icon={<RxVideo />} />
        <ItemHeader icon={<CgGames />} />
        <ItemHeader icon={<PiStorefrontThin />} />
      </div>
    </div>
  );
};
