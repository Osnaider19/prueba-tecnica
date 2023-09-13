import { ItemAbout } from "@/components/user/ItemAbout";
import { getData } from "@/helpers/getData";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { BiSolidPointer } from "react-icons/bi";
export default async function User({ params }) {
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const user = await getData(url);
  console.log(user);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-start items-center w-full h-full p-4">
        <div className="w-[200px] h-[200px]  rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/300"
            className="w-full h-full object-cover "
            alt=""
          />
        </div>
        <p className="pt-2 text-3xl font-semibold">{user?.name}</p>
        <p className="text-center">{user?.username}</p>
        <div className="flex gap-x-2 flex-col justify-center w-full items-center px-2">
          <ItemAbout
            description={user?.address?.city}
            icon={<IoLocationSharp />}
            title="City"
          />
          <ItemAbout
            description={user?.email}
            icon={<AiOutlineMail />}
            title="Email"
          />
          <ItemAbout
            description={user?.website}
            icon={<BiSolidPointer />}
            title="Website"
          />
          <ItemAbout
            description={user?.phone}
            icon={<BsTelephone />}
            title="Phone"
          />
        </div>
      </div>
    </div>
  );
}
