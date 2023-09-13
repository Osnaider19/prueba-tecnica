export const CardCommet = ({id, name, email, body }) => {
  return (
    <div className="relative flex flex-col bg-[rgba(255,255,255,0.2)] py-2 px-3 ">
      <p>{id} {email}</p>
      <p>{name}</p>
      <p>{body}</p>
    </div>
  );
};
