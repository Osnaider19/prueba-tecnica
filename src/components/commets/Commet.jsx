import { getData } from "@/helpers/getData";
import React from "react";
import { CardCommet } from "./CardCommet";

export const Commet = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const comments = await getData(url);
  console.log(comments);
  return (
    <div className="relative flex flex-col justify-center items-center">
      {comments?.map((comment) => (
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
