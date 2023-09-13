import { getData } from "@/helpers/getData";
import { CardCommet } from "./CardCommet";

export const Commet = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const comments = await getData(url);
  return (
    <div className="relative flex flex-col justify-center items-center">
      {comments?.slice(0 , 30).map((comment) => (
        <div key={comment.id} className="mx-3 my-4 rounded-2xl overflow-hidden">
          <CardCommet
            body={comment.body}
            email={comment.email}
            name={comment.name}
            id={comment.id}
          />
        </div>
      ))}
    </div>
  );
};
