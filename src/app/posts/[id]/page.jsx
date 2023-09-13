import { CardPost } from "@/components/Cards/CardPost";
import { Commet } from "@/components/commets/Commet";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  const dataUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const user = await dataUser.json();
 
  return { post, user };
}

export default async function PostId({ params }) {
  const { post, user } = await getPost(params.id);
  return (
    <div className="flex flex-col  relative w-full h-full overflow-auto  content__page">
      <div className="relative flex-col h-screen flex justify-start items-center py-5 w-full">
        <CardPost
          name={user.name}
          userId={user.id}
          username={user.username}
          postBody={post.body}
          postTilte={post.title}
          link={"#"}
        />
      </div>
      <div className="bg-black/95 sticky top-0 w-full">
        <p className="text-lg font-semibold text-center py-1  ">
          Comentarios
        </p>
      </div>
      <Commet />
    </div>
  );
}
