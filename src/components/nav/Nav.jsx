import { ItemNav } from "./ItemNav";
import { RiHome7Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  MdOutlineMail,
  MdOutlineFeaturedPlayList,
  MdOutlineVerified,
} from "react-icons/md";
export const Nav = () => {
  return (
    <div className="h-screen sticky top-0 left-0 min-w-[350px] max-w-[350px] w-full ">
      <div>
        <span className="text-3xl py-5 px-8 block">Logo</span>
        <ul className="flex flex-col justify-start py-3 px-5 ">
          <ItemNav icon={<RiHome7Line />} title="Inicion" link={"/"} />
          <ItemNav icon={<BsSearch />} title="Explore" link={"#"} />
          <ItemNav
            icon={<IoIosNotificationsOutline />}
            title="Notificaciones"
            link={"#"}
          />
          <ItemNav icon={<MdOutlineMail />} title="Mensajes" link={"#"} />
          <ItemNav
            icon={<MdOutlineFeaturedPlayList />}
            title="Listas"
            link={"#"}
          />
          <ItemNav icon={<MdOutlineVerified />} title="Verifado" link={"#"} />
          <ItemNav icon={<CiUser />} title="Perfil" link={"#"} />
          <ItemNav icon={<SlOptions />} title="Más opciones" link={"#"} />
        </ul>
      </div>
    </div>
  );
};
