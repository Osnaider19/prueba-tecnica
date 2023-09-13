import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
export const CardPost = ({
  username,
  name,
  userId,
  postTilte,
  postBody,
  postId,
  link,
}) => {
  return (
    <div className="relative max-w-[400px] p-4 rounded-md bg-[rgba(255,255,255,0.1)]">
      <Link href={link}>
        <div>
          <div className="flex">
            <div className="flex justify-center  items-center w-[50px] h-[50px] rounded-full overflow-hidden text-9xl">
              <BiSolidUserCircle />
            </div>
            <div className="px-2">
              <span className="block">{name}</span>
              <Link href={`/user/${userId}`}>
                <strong className="block text-sm font-normal hover:underline">
                  @{username}
                </strong>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-1">
          <p className="font-semibold tracking-wider text-xl">
            {postId} {postTilte}
          </p>
          <p className="py-1">{postBody}</p>
        </div>
      </Link>
    </div>
  );
};
