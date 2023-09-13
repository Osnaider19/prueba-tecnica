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

export const routes = [
    {
      label: "Home",
      icon: <RiHome7Line />,
      link: "/",
    },
    {
      label: "Explore",
      icon: <BsSearch />,
      link: "#",
    },
    {
      label: "Notificaciones",
      icon: <IoIosNotificationsOutline />,
      link: "#",
    },
    {
      label: "Mensajes",
      icon: <MdOutlineMail />,
      link: "#",
    },
    {
      label: "Listas",
      icon: <MdOutlineFeaturedPlayList />,
      link: "#",
    },
    {
      label: "Verifado",
      icon: <MdOutlineVerified />,
      link: "#",
    },
    {
      label: "Perfil",
      icon: <CiUser />,
      link: "#",
    },
    ,
    {
      label: "Más opciones",
      icon: <SlOptions />,
      link: "#",
    },
  ];