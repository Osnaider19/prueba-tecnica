import { CardPost } from "@/components/Cards/CardPost";
import { CreatePost } from "@/components/header/CreatePost";
import { getData } from "@/helpers/getData";

export default async function Home() {
  const urlUser = "https://jsonplaceholder.typicode.com/users";
  const posts = await getData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className=" relative flex w-full   flex-col  py-1 md:overflow-auto content__page">
      <div className="relative w-full "></div>
      <CreatePost />
      <div className="relative  flex flex-col my-5 items-center gap-4">
        {posts?.slice(0, 30).map(async (post) => {
          const user = await getData(`${urlUser}/${post.userId}`);
          return (
            <CardPost
              name={user?.name}
              userId={user?.id}
              username={user?.name}
              postBody={post.body}
              postId={post.id}
              postTilte={post.title}
              link={`posts/${post.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
